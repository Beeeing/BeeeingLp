"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { MagneticButton } from "@/app/components/ui/magnetic-button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-gradient">グローバル開発で</span>
                <br />
                <span className="text-foreground">ビジネスを加速する</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                最新技術と確かな実績で、あなたのビジネスの成長をサポートする受託開発パートナー
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <MagneticButton>
                  <Button asChild className="relative overflow-hidden group px-8 py-6 text-lg" size="lg">
                    <a href="#contact">
                      <span className="relative z-10 flex items-center">
                        無料相談を申し込む
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-accent"
                        style={{
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["0% 0%", "200% 0%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                    </a>
                  </Button>
                </MagneticButton>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href="#services">サービスを見る</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl animate-float" />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass-card">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                  <span className="text-8xl">🚀</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">スクロールして詳細を見る</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-8 rounded-full bg-primary/20"
          >
            <div className="w-full h-1/2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

