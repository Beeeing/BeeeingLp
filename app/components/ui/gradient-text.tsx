"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export function GradientText({
  children,
  className,
  from = "from-primary",
  via = "via-primary/80",
  to = "to-accent",
}: GradientTextProps) {
  return (
    <span className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, via, to, className)}>{children}</span>
  )
}

