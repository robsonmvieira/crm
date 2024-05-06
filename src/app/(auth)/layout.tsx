import { Banner } from './components/banner'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth Page',
  description: 'The CRM Auth App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`min-h-screen grid grid-cols-2`}>
      <Banner />
      {children}
    </div>
  )
}
