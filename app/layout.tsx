import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Alaska Cleaning Services - Professional Home & Commercial Cleaning | Call 907-671-0552",
  description:
    "Alaska's trusted cleaning service company. Family-owned, Alaska-wide coverage. Residential, commercial, gutter & roof cleaning. Eco-friendly products. 100% satisfaction guarantee. Call or text 907-671-0552 for free quote.",
  keywords:
    "Alaska cleaning services, residential cleaning Alaska, commercial cleaning Alaska, house cleaning Alaska, office cleaning Alaska, gutter cleaning Alaska, roof cleaning Alaska, window cleaning Alaska, carpet cleaning Alaska, eco-friendly cleaning Alaska, professional cleaners Alaska, family-owned cleaning service, Alaska wide cleaning, Anchorage cleaning, Fairbanks cleaning, Juneau cleaning",
  authors: [{ name: "Alaska Cleaning Services" }],
  creator: "Alaska Cleaning Services",
  publisher: "Alaska Cleaning Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alaskacleaningservices.com",
    title: "Alaska Cleaning Services - Professional Home & Commercial Cleaning",
    description:
      "Alaska's trusted cleaning service company. Family-owned, Alaska-wide coverage. Call 907-671-0552 for free quote.",
    siteName: "Alaska Cleaning Services",
    images: [
      {
        url: "/images/alaska-logo.png",
        width: 1200,
        height: 630,
        alt: "Alaska Cleaning Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alaska Cleaning Services - Professional Home & Commercial Cleaning",
    description:
      "Alaska's trusted cleaning service company. Family-owned, Alaska-wide coverage. Call 907-671-0552 for free quote.",
    images: ["/images/alaska-logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891b2",
  category: "business",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
