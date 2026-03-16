'use client'

import { useState, useMemo } from 'react'

export type UserRow = {
  id: number
  name: string
  email: string
  phone: string
  interests: string
  createdAt: string
}

type SortKey = keyof UserRow
type SortDir = 'asc' | 'desc'

export default function AdminDashboard({ users }: { users: UserRow[] }) {
  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('createdAt')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  // ── Search filter ──
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return users
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.phone.includes(q) ||
        u.interests.toLowerCase().includes(q)
    )
  }, [users, query])

  // ── Sort ──
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const av = a[sortKey] ?? ''
      const bv = b[sortKey] ?? ''
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true })
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [filtered, sortKey, sortDir])

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  // ── CSV Export ──
  function exportCSV() {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Interests', 'Joined']
    const rows = sorted.map((u) => [
      u.id,
      `"${u.name.replace(/"/g, '""')}"`,
      `"${u.email.replace(/"/g, '""')}"`,
      `"${u.phone.replace(/"/g, '""')}"`,
      `"${u.interests.replace(/"/g, '""')}"`,
      `"${formatDate(u.createdAt)}"`,
    ])
    const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `as-community-members-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col)
      return <span style={{ opacity: 0.2, marginLeft: 4 }}>↕</span>
    return (
      <span style={{ marginLeft: 4 }}>
        {sortDir === 'asc' ? '↑' : '↓'}
      </span>
    )
  }

  return (
    <div style={styles.root}>

      {/* ── NAV ── */}
      <header style={styles.nav}>
        <span style={styles.navLogo}>ARTIFICIAL STUDIO</span>
        <span style={styles.navTag}>// ADMIN DASHBOARD</span>
      </header>

      {/* ── PAGE HEADER ── */}
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Community Members</h1>
          <p style={styles.pageSub}>
            {users.length} total &nbsp;·&nbsp; {filtered.length} shown
          </p>
        </div>
        <div style={styles.headerActions}>
          {/* Search */}
          <div style={styles.searchWrap}>
            <span style={styles.searchIcon}>⌕</span>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Search name, email, interests..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button style={styles.clearBtn} onClick={() => setQuery('')}>
                ×
              </button>
            )}
          </div>
          {/* Export */}
          <button style={styles.exportBtn} onClick={exportCSV}>
            ↓ Export CSV
          </button>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={styles.statsBar}>
        {[
          { label: 'Total Members', value: users.length },
          {
            label: 'This Week',
            value: users.filter((u) => {
              const d = new Date(u.createdAt)
              const now = new Date()
              const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
              return diff <= 7
            }).length,
          },
          {
            label: 'Today',
            value: users.filter((u) => {
              const d = new Date(u.createdAt)
              const now = new Date()
              return (
                d.getDate() === now.getDate() &&
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
              )
            }).length,
          },
          {
            label: 'Top Interest',
            value: (() => {
              const counts: Record<string, number> = {}
              users.forEach((u) => {
                u.interests.split(',').forEach((i) => {
                  const k = i.trim()
                  if (k) counts[k] = (counts[k] ?? 0) + 1
                })
              })
              const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
              return top ? top[0] : '—'
            })(),
          },
        ].map((s) => (
          <div key={s.label} style={styles.statCard}>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── TABLE ── */}
      <div style={styles.tableWrap}>
        {sorted.length === 0 ? (
          <div style={styles.empty}>
            <div style={styles.emptyIcon}>[ ]</div>
            <div style={styles.emptyText}>No members found.</div>
          </div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                {(
                  [
                    { key: 'id' as SortKey, label: '#' },
                    { key: 'name' as SortKey, label: 'Name' },
                    { key: 'email' as SortKey, label: 'Email' },
                    { key: 'phone' as SortKey, label: 'Phone' },
                    { key: 'interests' as SortKey, label: 'Interests' },
                    { key: 'createdAt' as SortKey, label: 'Joined' },
                  ] as { key: SortKey; label: string }[]
                ).map(({ key, label }) => (
                  <th
                    key={key}
                    style={styles.th}
                    onClick={() => handleSort(key)}
                  >
                    {label}
                    <SortIcon col={key} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((user, idx) => (
                <tr
                  key={user.id}
                  style={{
                    ...styles.tr,
                    backgroundColor: idx % 2 === 0 ? '#000' : 'rgba(255,255,255,0.025)',
                  }}
                >
                  <td style={{ ...styles.td, ...styles.tdMono, opacity: 0.35 }}>
                    {user.id}
                  </td>
                  <td style={{ ...styles.td, ...styles.tdBold }}>
                    {user.name}
                  </td>
                  <td style={{ ...styles.td, ...styles.tdMono }}>
                    {user.email}
                  </td>
                  <td style={{ ...styles.td, ...styles.tdMono }}>
                    {user.phone}
                  </td>
                  <td style={styles.td}>
                    <div style={styles.tagWrap}>
                      {user.interests.split(',').map((t) =>
                        t.trim() ? (
                          <span key={t.trim()} style={styles.tag}>
                            {t.trim()}
                          </span>
                        ) : null
                      )}
                    </div>
                  </td>
                  <td style={{ ...styles.td, ...styles.tdMono, whiteSpace: 'nowrap' }}>
                    {formatDate(user.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <span style={styles.footerText}>
          ARTIFICIAL STUDIO &nbsp;·&nbsp; ADMIN &nbsp;·&nbsp;{' '}
          {new Date().getFullYear()}
        </span>
        <span style={styles.footerText}>
          artificialstudio.vercel.app
        </span>
      </footer>
    </div>
  )
}

// ══════════════════════════════════════
// INLINE STYLES — strict #000 / #fff
// ══════════════════════════════════════
const mono = "'IBM Plex Mono', 'Courier New', monospace"
const cond = "'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif"
const disp = "'Bebas Neue', Impact, sans-serif"

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: cond,
    fontSize: 14,
  },

  // NAV
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 40px',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    backgroundColor: '#000',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    fontFamily: disp,
    fontSize: 18,
    letterSpacing: 4,
    color: '#fff',
  },
  navTag: {
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: 3,
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase' as const,
  },

  // PAGE HEADER
  pageHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap' as const,
    gap: 16,
    padding: '40px 40px 24px',
  },
  pageTitle: {
    fontFamily: disp,
    fontSize: 42,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
    color: '#fff',
    lineHeight: 1,
    margin: 0,
  },
  pageSub: {
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: 3,
    color: 'rgba(255,255,255,0.35)',
    textTransform: 'uppercase' as const,
    marginTop: 6,
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap' as const,
  },

  // SEARCH
  searchWrap: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute' as const,
    left: 12,
    color: 'rgba(255,255,255,0.3)',
    fontSize: 18,
    pointerEvents: 'none' as const,
    lineHeight: 1,
  },
  searchInput: {
    backgroundColor: 'transparent',
    border: '1px solid rgba(255,255,255,0.18)',
    color: '#fff',
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: 1,
    padding: '10px 36px 10px 34px',
    width: 280,
    outline: 'none',
  },
  clearBtn: {
    position: 'absolute' as const,
    right: 10,
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.4)',
    fontSize: 18,
    cursor: 'pointer',
    lineHeight: 1,
    padding: 0,
  },

  // EXPORT
  exportBtn: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    fontFamily: mono,
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
    padding: '10px 20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  },

  // STATS BAR
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 1,
    margin: '0 40px 24px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  statCard: {
    backgroundColor: '#000',
    padding: '20px 24px',
    textAlign: 'center' as const,
  },
  statValue: {
    fontFamily: disp,
    fontSize: 32,
    color: '#fff',
    letterSpacing: 1,
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: mono,
    fontSize: 8,
    letterSpacing: 2,
    color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase' as const,
    marginTop: 6,
  },

  // TABLE
  tableWrap: {
    margin: '0 40px',
    border: '1px solid rgba(255,255,255,0.12)',
    overflowX: 'auto' as const,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    tableLayout: 'auto' as const,
  },
  th: {
    fontFamily: mono,
    fontSize: 9,
    letterSpacing: 3,
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.4)',
    padding: '14px 16px',
    textAlign: 'left' as const,
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    cursor: 'pointer',
    userSelect: 'none' as const,
    whiteSpace: 'nowrap' as const,
    backgroundColor: '#000',
  },
  tr: {
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'background 0.15s',
  },
  td: {
    padding: '13px 16px',
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    verticalAlign: 'top' as const,
    lineHeight: 1.5,
  },
  tdMono: {
    fontFamily: mono,
    fontSize: 11,
  },
  tdBold: {
    fontWeight: 600,
    color: '#fff',
  },

  // TAGS
  tagWrap: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 4,
  },
  tag: {
    fontFamily: mono,
    fontSize: 8,
    letterSpacing: 1,
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(255,255,255,0.15)',
    padding: '2px 6px',
    whiteSpace: 'nowrap' as const,
  },

  // EMPTY
  empty: {
    padding: '80px 40px',
    textAlign: 'center' as const,
  },
  emptyIcon: {
    fontFamily: mono,
    fontSize: 32,
    color: 'rgba(255,255,255,0.1)',
    marginBottom: 12,
  },
  emptyText: {
    fontFamily: mono,
    fontSize: 11,
    letterSpacing: 3,
    color: 'rgba(255,255,255,0.2)',
    textTransform: 'uppercase' as const,
  },

  // FOOTER
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 40px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    marginTop: 40,
  },
  footerText: {
    fontFamily: mono,
    fontSize: 8,
    letterSpacing: 3,
    color: 'rgba(255,255,255,0.2)',
    textTransform: 'uppercase' as const,
  },
}
