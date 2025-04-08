import './globals.css'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Car Finder',
  description: 'Find your perfect car with filtering and wishlist support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}