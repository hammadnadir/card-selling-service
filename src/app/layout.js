import NextAuthSessionProvider from '@/providers/sessionProvider'
import './globals.css'

export const metadata = {
  title: 'Car Entry App',
  description: 'Create By Hammad Nadir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><NextAuthSessionProvider>{children}</NextAuthSessionProvider></body>
    </html>
  )
}
