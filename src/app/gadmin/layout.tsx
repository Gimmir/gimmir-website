'use client'

import dynamic from 'next/dynamic'
import { config } from '../../../sanity.config'

const Studio = dynamic(
  () => import('sanity').then((mod) => mod.Studio),
  { ssr: false, loading: () => <div>Завантаження...</div> }
)

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const hasProjectId = !!config.projectId

  if (!hasProjectId) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Sanity Studio</h1>
        <p>⚠️ Не налаштовано</p>
        <p>Заповніть змінні в <code>.env.local</code>:</p>
        <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
{`NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production`}
        </pre>
        <p>Потім перезавантажте сторінку.</p>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh' }}>
      <Studio config={config} />
    </div>
  )
}
