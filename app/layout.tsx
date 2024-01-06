import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import { Roboto_Mono } from "next/font/google";
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/app/components/layout/header";
import React from "react";
import {NextAuthProvider} from "@/src/auth/NextAuthProvider";
import Redirection from "@/app/components/main/redirection";

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
      <body className={robotomono.className}>
      <NextAuthProvider>
          <Redirection/>
      <Header/>
        {children}
        <SpeedInsights />
      </NextAuthProvider>
      </body>
    </html>
  )
}
