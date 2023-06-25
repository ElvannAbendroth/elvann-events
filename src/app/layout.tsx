import '@/styles/globals.css'

export const metadata = {
  title: 'Elvann | Harpist & Singer for Special Events',
  description: 'Harpist & singer for special occasions based in Helsinki.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  )
}
