"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { ShaderMaterial } from "three"

interface LiquidButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function LiquidButton({ children, onClick, className = "" }: LiquidButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!containerRef.current || !buttonRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(buttonRef.current.offsetWidth, buttonRef.current.offsetHeight)
    containerRef.current.appendChild(renderer.domElement)

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform float time;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        
        float noise = sin(uv.x * 10.0 + time) * 0.1 +
                     sin(uv.y * 8.0 - time * 0.5) * 0.1;
        
        float alpha = smoothstep(0.4 + noise, 0.6 + noise, 
                               length(uv - vec2(0.5)));
        
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - alpha);
      }
    `

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        time: { value: 0 },
      },
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let isHovered = false
    buttonRef.current.addEventListener("mouseenter", () => { isHovered = true })
    buttonRef.current.addEventListener("mouseleave", () => { isHovered = false })

    const animate = () => {
      requestAnimationFrame(animate)
      if (material.uniforms) {
        material.uniforms.time.value += isHovered ? 0.05 : 0.02
      }
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!buttonRef.current) return
      renderer.setSize(buttonRef.current.offsetWidth, buttonRef.current.offsetHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`relative z-10 px-8 py-3 text-white bg-primary rounded-lg ${className}`}
      >
        {children}
      </button>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "scale(1.2)" }}
      />
    </div>
  )
}

