"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bot, Globe2, Users } from "lucide-react"

const features = [
  {
    title: "AI提案",
    description:
      "最新AIツールを活用し、提案ミーティングでプロトタイプを提供。アイデアを素早く形にし、プロジェクトの方向性を明確化します。",
    icon: <Bot className="w-16 h-16 text-primary" />,
    details: [
      "ChatGPT/Claude活用による要件定義の効率化",
      "AIを活用したプロトタイプの即時生成",
      "AIによる見積もり精度の向上",
      "自動化されたコード提案システム",
    ],
  },
  {
    title: "グローバル開発",
    description:
      "北米・アジアを中心にグローバル展開するオフショア開発企業とアライアンス。高品質な開発リソースを最適なコストで提供します。",
    icon: <Globe2 className="w-16 h-16 text-primary" />,
    details: [
      "ベトナムトップクラスIT企業との強力な連携",
      "2拠点体制でのグローバル開発サポート",
      "多言語・多文化に対応した開発体制",
      "コスト効率の高いリソース配分",
    ],
  },
  {
    title: "日本PM参画",
    description:
      "日本人PMがプロジェクトに入り、スムーズな進行をサポート。言語や文化の壁を越えた円滑なコミュニケーションを実現します。",
    icon: <Users className="w-16 h-16 text-primary" />,
    details: [
      "経験豊富な日本人PMによる要件整理と提案",
      "きめ細やかな進捗管理とリスク対策",
      "品質基準の明確化と徹底した管理",
      "ステークホルダー間の円滑な連携",
    ],
  },
]

export default function FeatureCarousel() {
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground">
            最新技術とグローバルな体制で、あなたのプロジェクトを成功に導きます
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 h-full hover-lift">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="mb-6"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>

                    {/* Feature details */}
                    <ul className="space-y-3 text-left w-full">
                      {feature.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center text-muted-foreground" // Changed to text-muted-foreground
                        >
                          <span className="text-primary mr-2">▶</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

