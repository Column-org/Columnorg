import type React from "react"
import "../styles/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Providers } from "./providers"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const dynamic = "force-static"
export const revalidate = 30



import { ErrorSuppressor } from "@/components/error-suppressor"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <ErrorSuppressor />
        <Providers>
          {/* Header */}
          <Header />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "Next.js",
}
