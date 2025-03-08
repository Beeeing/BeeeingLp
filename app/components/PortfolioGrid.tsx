"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Database, Globe2, Layout, Smartphone, Sparkles } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "顔認証出退勤管理システム",
    description: "自社プロジェクトとして開発・導入した顔認証技術を活用した出退勤管理システム",
    icon: Layout,
    category: "自社開発",
    gradient: "from-blue-500/20 via-blue-400/20 to-blue-300/20",
    stats: ["導入企業数 50社以上", "認証精度 99.9%", "処理速度 0.5秒"],
  },
  {
    id: 2,
    title: "物流業界向け在庫管理システム",
    description: "リアルタイム在庫追跡と予測分析機能を備えた物流業界向けの在庫管理システム",
    icon: Database,
    category: "業務システム",
    gradient: "from-emerald-500/20 via-emerald-400/20 to-emerald-300/20",
    stats: ["在庫精度 99.9%", "作業効率 40%改善", "導入企業数 30社"],
  },
  {
    id: 3,
    title: "ECプラットフォーム構築",
    description: "日本企業向けにカスタマイズされた多言語対応のECプラットフォーム",
    icon: Globe2,
    category: "Webシステム",
    gradient: "from-purple-500/20 via-purple-400/20 to-purple-300/20",
    stats: ["月間PV 100万", "コンバージョン率 5%", "多言語対応 5言語"],
  },
  {
    id: 4,
    title: "NextEngine連携動画整理アプリ",
    description: "NextEngineと連携し、商品管理と動画コンテンツを効率的に整理するアプリケーション",
    icon: Smartphone,
    category: "モバイルアプリ",
    gradient: "from-orange-500/20 via-orange-400/20 to-orange-300/20",
    stats: ["ユーザー数 1000+", "動画処理速度 2倍", "作業時間 50%削減"],
  },
  {
    id: 5,
    title: "クラウド移行プロジェクト",
    description: "レガシーシステムからクラウドへの移行を実現し、運用コストを30%削減",
    icon: Code2,
    category: "クラウドインフラ",
    gradient: "from-cyan-500/20 via-cyan-400/20 to-cyan-300/20",
    stats: ["コスト削減 30%", "処理速度 3倍", "ダウンタイム 0"],
  },
  {
    id: 6,
    title: "AIチャットボット開発",
    description: "顧客サポート向けに自然言語処理を活用した多言語対応AIチャットボット",
    icon: Sparkles,
    category: "AI開発",
    gradient: "from-pink-500/20 via-pink-400/20 to-pink-300/20",
    stats: ["応答精度 95%", "対応時間 80%削減", "多言語対応 3言語"],
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">開発実績</h2>
          <p className="mt-4 text-lg text-muted-foreground">多様な業界・技術領域での開発実績をご紹介します</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors m-1 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-primary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div
                  className={`h-full rounded-3xl bg-gradient-to-br ${project.gradient} p-1 transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="relative h-full rounded-[1.4rem] bg-secondary p-6 transition-all duration-300">
                    <div className="absolute -top-4 -right-4 rounded-2xl bg-background/50 p-3 shadow-lg backdrop-blur-md">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>

                    <div className="mt-2 space-y-4">
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-primary">{project.category}</span>
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>

                      <div className="border-t border-primary/10 pt-4">
                        <ul className="grid grid-cols-1 gap-2">
                          {project.stats.map((stat, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-muted-foreground before:mr-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                            >
                              {stat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-all duration-300 group-hover:from-primary/5 group-hover:via-primary/5 group-hover:to-primary/10 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

