import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import { Roboto_Mono } from "next/font/google";
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })
const robotomono = Roboto_Mono({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mono Secur',
  description: 'Mono Secur by MonoStone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotomono.className}>{children}</body>
    </html>
  )
}
