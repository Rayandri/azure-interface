import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felix Chat',
  description: 'Modern chat interface by Whiskers Team',
  generator: 'tabby.dev',
  icons: {
    icon: '/icons8-cat-face-96.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
