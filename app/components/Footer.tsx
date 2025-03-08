import Link from "next/link"
import Image from "next/image"

const footerSections = [
  {
    title: "サービス",
    links: [
      { name: "Webアプリケーション開発", href: "#services" },
      { name: "モバイルアプリケーション開発", href: "#services" },
      { name: "PM代行サポート", href: "#services" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { name: "開発実績", href: "#portfolio" },
      { name: "パートナー企業", href: "#partner" },
      { name: "お客様の声", href: "#testimonials" },
    ],
  },
  {
    title: "法的情報",
    links: [
      { name: "プライバシーポリシー", href: "/privacy" },
      { name: "利用規約", href: "/terms" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-mRQky75PpoAbCvwr6cL1psRQrY1skO.png"
                alt="合同会社Beeeeing ロゴ"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 md:mb-0"
              />
              <p className="text-sm text-muted-foreground text-center md:text-left">
                〒114-0011 東京都北区昭和町2-5-5グレイスノース東京602号室
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">© 2024 合同会社Beeeeing All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

