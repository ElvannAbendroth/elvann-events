import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: 'Elvann | Harpist & Singer for Special Events',
  description: 'Harpist & singer for special occasions based in Helsinki.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body className="">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center gap-8 p-8 md:p-24">{children}</main>
      </body>
    </html>
  )
}
