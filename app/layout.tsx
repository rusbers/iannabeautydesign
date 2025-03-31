import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

const playfairDisplayItalic = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-playfair-display-italic",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Homepage | Ianna Beauty",
  description: "Permanent Makeup & Beauty",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`h-full ${playfairDisplay.variable} ${playfairDisplayItalic.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
