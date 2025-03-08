"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Users } from "lucide-react"

const services = [
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Webアプリケーション開発",
    description:
      "最新のフレームワークを活用し、スケーラブルで高パフォーマンスなWebアプリケーションを開発。クラウドネイティブな設計で、ビジネスの成長に対応します。",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "モバイルアプリケーション開発",
    description:
      "iOS/Android両対応のネイティブアプリ開発。直感的なUIと高度な機能を備えた、ユーザー体験の高いモバイルアプリを提供します。",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-primary" />,
    title: "PM代行サポート",
    description:
      "経験豊富な日本人PMがプロジェクトをリード。要件定義から開発管理まで、プロジェクトの成功をトータルでサポートします。",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-primary sm:text-4xl mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          サービス内容
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          最新技術と豊富な経験を活かし、お客様のビジネスの成長をサポートします
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-background p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mb-6"
                >
                  {service.icon}
                </motion.div>
                <motion.h3 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </motion.h3>
                <motion.p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </motion.p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ scale: [0.95, 1], opacity: [0, 1] }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-primary/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ scale: [0.95, 1], opacity: [0, 1] }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

