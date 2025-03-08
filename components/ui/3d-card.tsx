"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export const Card3D = ({
  children,
  className = "",
  containerClassName = "",
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const rotateXUnnormalized = ((mouseY - height / 2) / height) * -10
    const rotateYUnnormalized = ((mouseX - width / 2) / width) * 10
    setRotateX(rotateXUnnormalized)
    setRotateY(rotateYUnnormalized)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`py-10 ${containerClassName}`}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.5,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}

