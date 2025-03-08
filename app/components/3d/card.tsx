"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Card3D({ children, className = "", containerClassName = "" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 15
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 15

    setRotateX(-rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div className={`perspective-2000 ${containerClassName}`}>
      <motion.div
        ref={cardRef}
        className={`relative transform-gpu transition-transform duration-200 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
} 