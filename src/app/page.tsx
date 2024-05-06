import { redirect } from 'next/navigation'
export default function Home() {
  redirect('/admin')
  return <main className="min-h-screen grid grid-cols-2"></main>
}
