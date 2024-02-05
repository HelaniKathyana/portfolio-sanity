import localFont from "next/font/local"
import React from "react"

import type { Metadata } from "next"

import metaImage from "@/assets/images/rejaur-ronny-rahman.png"

import "./globals.css"

const figtree = localFont({
  src: [
    {
      path: "../assets/fonts/Figtree-Light.woff2",
      style: "normal",
      weight: "300"
    },
    {
      path: "../assets/fonts/Figtree-Regular.woff2",
      style: "normal",
      weight: "400"
    }
  ],
  variable: "--font-figtree"
})

const sketchBold = localFont({
  src: "../assets/fonts/SketchBlock-Bold.woff2",
  style: "normal",
  variable: "--font-sketch",
  weight: "500"
})

const sothardjo = localFont({
  src: "../assets/fonts/Sothardjo.woff2",
  style: "normal",
  variable: "--font-sothardjo",
  weight: "300"
})

const ubuntu = localFont({
  src: [
    {
      path: "../assets/fonts/Ubuntu-Medium.woff2",
      style: "normal",
      weight: "400"
    },
    {
      path: "../assets/fonts/Ubuntu-Bold.woff2",
      style: "normal",
      weight: "700"
    }
  ],
  variable: "--font-ubuntu"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rejaurrahman.co.uk"),
  title: "Rejaur Rahman | Front End Developer",
  description: "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
  alternates: {
    canonical: "https://rejaurrahman.co.uk"
  },
  openGraph: {
    title: "Rejaur Rahman | Front End Developer",
    description: "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
    images: `/${metaImage.src}`,
    url: "https://rejaurrahman.co.uk"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`scroll-smooth ${sketchBold.variable} ${figtree.variable} ${ubuntu.variable} ${sothardjo.variable}`}
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
