"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  duration?: number
  colors?: string[]
}

export function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  duration = 4,
  colors = ["#FFD700", "#FFA500", "#FF8C00", "#FFD700"],
}: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-2xl", containerClassName)}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${colors.join(", ")})`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className={cn("relative bg-background rounded-2xl", className)}>{children}</div>
    </div>
  )
}

