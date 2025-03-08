import "./globals.css"
import { Inter, Noto_Sans_JP } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

// Noto Sans JP の設定
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  preload: true,
})

// メインフォント設定
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

export const metadata = {
  title: "合同会社Beeeeing | グローバル開発パートナー",
  description: "最新技術と確かな実績で、あなたのビジネスの成長をサポートする受託開発パートナー",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJp.variable} min-h-screen bg-background text-foreground font-sans`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

