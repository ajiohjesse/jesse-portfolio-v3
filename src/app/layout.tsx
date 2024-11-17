import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { DM_Serif_Display, Rock_Salt } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const magnat = localFont({
  src: '../assets/fonts/NeueMagnatDisplay.woff',
  variable: '--font-magnat',
  weight: '400',
})

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rock-salt',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display',
})

export const metadata: Metadata = {
  title: 'Jesse Ajioh',
  description: 'Fullstack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${magnat.variable} ${rockSalt.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {/* <SplashScreen /> */}
        <Header />
        <main className='pb-[500px] pt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
