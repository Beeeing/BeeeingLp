"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonial = {
  quote:
    "Beeeeingさんには、当社の基幹システムの刷新プロジェクトを担当していただきました。特に印象的だったのは、AIを活用した効率的な開発プロセスと、日本人PMによる丁寧なコミュニケーションです。開発期間を当初の予定より30%短縮できただけでなく、運用コストも40%削減することができました。",
  author: "田中 健太",
  position: "株式会社テックイノベーション CTO",
  image: "/placeholder.svg?height=100&width=100",
  company: {
    name: "株式会社テックイノベーション",
    industry: "製造業",
    size: "従業員数 300名",
  },
  project: {
    type: "基幹システム刷新",
    duration: "8ヶ月",
    team: "10名体制",
  },
  results: ["開発期間を30%短縮", "運用コスト40%削減", "システム応答速度が2倍に改善", "ユーザー満足度92%を達成"],
  technologies: ["React", "Node.js", "AWS", "AI活用"],
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          お客様の声
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 sm:p-12 bg-background border border-primary/20">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Client Info */}
              <div className="lg:col-span-1">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{testimonial.author}</h3>
                  <p className="text-muted-foreground mb-4">{testimonial.position}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-muted-foreground">{testimonial.company.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company.industry}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company.size}</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="relative">
                  <svg
                    className="absolute -top-6 -left-6 h-12 w-12 text-primary/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-foreground leading-relaxed mb-6 pl-4">{testimonial.quote}</p>
                </div>

                {/* Project Details */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">プロジェクト概要</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">種類：</span> {testimonial.project.type}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">期間：</span> {testimonial.project.duration}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">体制：</span> {testimonial.project.team}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">プロジェクト成果</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {testimonial.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

