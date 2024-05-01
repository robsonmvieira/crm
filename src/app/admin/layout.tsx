import type { Metadata } from 'next'
import { Sidebar } from '@/components/sidebar/sidebar'

export const metadata: Metadata = {
  title: 'Admin Page',
  description: 'Admin Page CRM'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen space-x-5 p-5 grid grid-cols-[240px_1fr] bg-blue-75">
      <Sidebar />
      {children}
    </div>
  )
}
