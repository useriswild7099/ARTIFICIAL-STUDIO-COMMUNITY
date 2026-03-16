import { NextResponse } from 'next/server';
import db from '@/lib/db';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interests } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const formattedInterests = Array.isArray(interests) ? interests.join(', ') : interests;

    // ── 1. CLOUD STORAGE (MongoDB) ──
    const user = await db.user.upsert({
      where: { email },
      update: {
        name,
        phone,
        interests: formattedInterests,
      },
      create: {
        name,
        email,
        phone,
        interests: formattedInterests,
      },
    });

    // ── 2. LOCAL HYBRID BACKUP (JSON) ──
    try {
      const backupPath = path.join(process.cwd(), 'members_local_backup.json');
      const backupEntry = {
        name,
        email,
        phone,
        interests: formattedInterests,
        timestamp: new Date().toISOString()
      };
      
      let currentData = [];
      if (fs.existsSync(backupPath)) {
        const fileContent = fs.readFileSync(backupPath, 'utf8');
        currentData = JSON.parse(fileContent);
      }
      
      // Update or add to local backup
      const existingIdx = currentData.findIndex((u: any) => u.email === email);
      if (existingIdx > -1) {
        currentData[existingIdx] = backupEntry;
      } else {
        currentData.push(backupEntry);
      }
      
      fs.writeFileSync(backupPath, JSON.stringify(currentData, null, 2));
    } catch (backupErr) {
      console.error('Local backup failed, but cloud saved:', backupErr);
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
