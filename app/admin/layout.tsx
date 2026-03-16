import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin — Artificial Studio',
  description: 'Community member dashboard',
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
