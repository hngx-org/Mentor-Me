import './globals.css'
import type { Metadata } from 'next'
import { Inter, Hanken_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
})

export const metadata: Metadata = {
  title: 'Mentor Me',
  description: 'No.1 Mentoring app, All the help you need in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${hanken.variable}`}>{children}</body>
    </html>
  )
}
