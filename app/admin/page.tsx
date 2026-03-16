import db from '@/lib/db'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  try {
    const users = await db.user.findMany({
      orderBy: { createdAt: 'desc' },
    })

    // Serialize dates to strings for client component
    const serialized = users.map((u: any) => ({
      ...u,
      createdAt: u.createdAt instanceof Date ? u.createdAt.toISOString() : new Date().toISOString(),
    }))

    return <AdminDashboard users={serialized} />
  } catch (error) {
    console.error('Admin page database error:', error)
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#000',
        color: '#fff',
        fontFamily: 'monospace',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>[ DATABASE ERROR ]</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            Check your Vercel Environment Variables (DATABASE_URL) <br />
            and MongoDB Atlas Network Access (Allow 0.0.0.0/0).
          </p>
        </div>
      </div>
    )
  }
}
