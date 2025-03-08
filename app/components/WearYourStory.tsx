"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function WearYourStory() {
  const features = [
    "200名以上のエンジニアを擁する",
    "Java, .NET, React, Vue.js, Flutter等の技術スタック",
    "CMMI レベル3認証取得",
    "日本語可能なPM・BSEが常駐",
    "24時間体制での開発サポート",
    "ISO 27001（情報セキュリティ）認証取得",
  ]

  const achievements = [
    "年間100件以上のプロジェクト実績",
    "顧客満足度95%以上を維持",
    "平均プロジェクト期間短縮率30%",
    "リピート率80%以上",
  ]

  return (
    <section id="partner" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">グローバル開発パートナー</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            ベトナムのトップクラスのオフショア開発企業NNGと提携し、高品質な開発リソースを提供します。
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">NNG（Next Next Generation）</h3>
                <p className="text-muted-foreground">
                  ベトナム・ホーチミン市を拠点とする、急成長中のIT企業です。
                  最新技術と品質管理の両立により、高品質な開発サービスを提供しています。
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">主な特徴</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">実績</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (features.length + index) * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button asChild className="button-primary mt-4">
                  <a href="#contact" className="inline-flex items-center">
                    パートナーシップについて相談する
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/453268128_1011551937638788_1853295076671004160_n.jpg-b4gKjndBL4jNpKOJxdcgBL4tzDrJHv.jpeg"
                  alt="NNG オフィス"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm">NNGのモダンなオフィス（ホーチミン市）</p>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6 border border-primary/20">
                <h4 className="text-xl font-semibold text-primary mb-4">開発拠点情報</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mr-2">▶</span>
                    <span className="text-muted-foreground">本社：ベトナム ホーチミン市</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

