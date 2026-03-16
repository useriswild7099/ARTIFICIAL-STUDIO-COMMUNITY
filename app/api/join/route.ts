import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interests } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const user = await db.user.upsert({
      where: { email },
      update: {
        name,
        phone,
        interests: Array.isArray(interests) ? interests.join(', ') : interests,
      },
      create: {
        name,
        email,
        phone,
        interests: Array.isArray(interests) ? interests.join(', ') : interests,
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
