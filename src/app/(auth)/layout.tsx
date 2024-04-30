import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Banner from './components/banner'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CRM App',
  description: 'The CRM App'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${nunito.className} min-h-screen grid grid-cols-2`}>
      <Banner />
      {children}
    </div>
  )
}
