import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PINKYE - Premium Cluster Lashes",
  description: "Glue-free cluster lashes, deep brown not fake black, naturally beautiful. Ships from Mexico, 6-10 days delivery.",
  generator: "v0.app",
  alternates: {
    canonical: "https://pinkye.mx/",
  },
  openGraph: {
    siteName: "PINKYE",
    title: "PINKYE - Premium Cluster Lashes",
    description: "Glue-free cluster lashes, deep brown not fake black, naturally beautiful. Ships from Mexico, 6-10 days delivery.",
    type: "website",
    url: "https://pinkye.mx/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PINKYE - Premium Cluster Lashes",
    description: "Glue-free cluster lashes, deep brown not fake black, naturally beautiful. Ships from Mexico, 6-10 days delivery.",
    site: "@pinkye_mx",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased bg-[#FAFAFA] scroll-smooth`}>
      <body className="font-sans bg-[#FAFAFA] text-neutral-800 overflow-x-hidden">{children}</body>
    </html>
  )
}