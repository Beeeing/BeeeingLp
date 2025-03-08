"use client"

import { motion, useAnimation, type Variants } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

const defaultAnimations: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export function AnimatedText({ text, className = "", once = true }: AnimatedTextProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {},
      }}
      className="flex flex-wrap"
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} className="mr-2" variants={defaultAnimations}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

