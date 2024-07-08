import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'
import AOSInit from '@/utils/aos/Aos'
import ScrollToTop from '@/utils/scrollToTop/ScrollToTop'

export const metadata: Metadata = {
  title: ' CoffeeCraze | فروشگاه اینترنتی قهوه آرامش',
  description: 'project with next app',
  icons: {
    icon: './image/coffee_logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir='rtl'>
      <body>
        <AOSInit />
        {children}
        <ScrollToTop/>
      </body>
    </html>
  )
}