import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdullah Mehmood — Software Engineer',
  description: 'Portfolio of Abdullah Mehmood, a Software Engineer specializing in full-stack web development, React, Next.js, and scalable cloud architectures.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Abdullah Mehmood'],
  authors: [{ name: 'Abdullah Mehmood' }],
  openGraph: {
    title: 'Abdullah Mehmood — Software Engineer',
    description: 'Full-stack developer crafting beautiful, performant web experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
