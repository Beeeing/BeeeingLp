"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card3D } from "@/app/components/ui/3d-card"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"
import { MagneticButton } from "@/app/components/ui/magnetic-button"

const GeometricPattern = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // クライアントサイドでのみwindowにアクセス
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Wave Pattern */}
      <svg
        className="absolute w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="waves" width="50" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 15 Q12.5 0, 25 15 Q37.5 30, 50 15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>

      {/* 3D Grid */}
      <div className="absolute inset-0" style={{ opacity: 0.02 }}>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-primary/20"
            style={{
              top: `${i * 10}%`,
              transform: "perspective(1000px) rotateX(60deg)",
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-primary/20"
            style={{
              left: `${i * 10}%`,
              transform: "perspective(1000px) rotateX(60deg)",
            }}
          />
        ))}
      </div>

      {/* Tech Circuit Pattern */}
      <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <path d="M50 50 L80 50 L80 80" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M50 50 L20 50 L20 20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="80" r="4" fill="none" stroke="currentColor" />
          <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Organic Curves */}
      <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="organic" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 C20 20, 40 80, 60 40 S80 60, 100 50" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 30 C30 10, 50 70, 70 30 S90 50, 100 30" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M0 70 C10 40, 30 90, 50 60 S70 70, 100 70" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#organic)" />
      </svg>

      {/* Floating Elements */}
      {dimensions.width > 0 &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              opacity: 0.03,
            }}
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
              scale: [0.5, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Random Geometric Shapes */}
            {Math.random() > 0.5 ? (
              <svg viewBox="0 0 100 100">
                <polygon points="50 15, 100 100, 0 100" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 100 100">
                <rect x="20" y="20" width="60" height="60" fill="currentColor" transform="rotate(45 50 50)" />
              </svg>
            )}
          </motion.div>
        ))}

      {/* Animated Gradient Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-full"
          style={{
            top: `${20 + i * 15}%`,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 215, 0, 0.1) 50%, 
              transparent 100%
            )`,
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["-200% 0", "200% 0"],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Radial Dots */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-primary"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              marginLeft: `-${((i + 1) * 200) / 2}px`,
              marginTop: `-${((i + 1) * 200) / 2}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hexagon Grid */}
      {/*<svg
        className="absolute w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
          <path
            d="M25 0L50 14.4338L50 43.3013L25 57.7351L0 43.3013L0 14.4338L25 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>*/}

      {/* Animated Lines */}
      {/*<div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>*/}

      {/* Floating Circles */}
      {/*{[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}*/}

      {/* Dot Grid */}
      {/*<div className="absolute inset-0" style={{ opacity: 0.03 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>*/}

      {/* Diagonal Lines */}
      {/*<svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonalLines"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>*/}
    </div>
  )
}

const slides = [
  {
    id: "main",
    title: (
      <>
        <span className="text-gradient">グローバル開発で</span>
        <br />
        <span>ビジネスを加速する</span>
      </>
    ),
    description: "最新技術と確かな実績で、あなたのビジネスの成長をサポートする受託開発パートナー",
    visual: (
      <Card3D containerClassName="perspective-2000" className="w-full max-w-[300px] aspect-square mx-auto">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div className="relative z-20 w-full h-full flex items-center justify-center p-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-xUh1jwJ7SepEI2hdk9B88wlgE1FQEI.png"
              alt="グローバル開発"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </Card3D>
    ),
  },
  {
    id: "ai",
    title: (
      <>
        <span className="text-gradient">AIで実現する</span>
        <br />
        <span>次世代の開発体験</span>
      </>
    ),
    description:
      "最新のAIツールを活用し、アイデアを素早くプロトタイプへ。提案から開発まで、効率的なプロセスを実現します。",
    visual: (
      <Card3D containerClassName="perspective-2000" className="w-full max-w-[300px] aspect-square mx-auto">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <div className="relative z-20 w-full h-full flex items-center justify-center p-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Pd5SFFgCUK4xRGpneaCEx4oB3mI9yM.png"
              alt="AIアシスタントロボット"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </Card3D>
    ),
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const slideIndex = wrap(0, slides.length, page)

  useEffect(() => {
    // クライアントサイドでのみwindowにアクセス
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      paginate(1)
    }, 8000)
    return () => clearInterval(timer)
  }, [isAutoPlay]) // Removed paginate from dependencies

  function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-20 sm:pt-24">
      <GeometricPattern />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="space-y-8"
              >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {slides[slideIndex].title}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {slides[slideIndex].description}
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

                  <MagneticButton>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="px-8 py-6 text-lg border-primary/20 hover:border-primary/40"
                    >
                      <a href="#services">サービスを見る</a>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual content */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {slides[slideIndex].visual}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === slideIndex ? "bg-primary w-6" : "bg-primary/20"
              }`}
              onClick={() => {
                setPage([index, index - slideIndex])
                setIsAutoPlay(false)
                setTimeout(() => setIsAutoPlay(true), 5000)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

