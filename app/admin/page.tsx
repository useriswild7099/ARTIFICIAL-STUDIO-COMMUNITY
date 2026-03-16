import db from '@/lib/db'
import AdminDashboard from './AdminDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const users = await db.user.findMany({
    orderBy: { createdAt: 'desc' },
  })

  // Serialize dates to strings for client component
  const serialized = users.map((u: any) => ({
    ...u,
    createdAt: u.createdAt.toISOString(),
  }))

  return <AdminDashboard users={serialized} />
}
