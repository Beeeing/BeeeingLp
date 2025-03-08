"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function MeshGradient() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create gradient mesh
    const geometry = new THREE.PlaneGeometry(5, 5, 32, 32)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;

        void main() {
          vec2 position = vUv * 2.0 - 1.0;
          float d = length(position);
          vec3 color1 = vec3(1.0, 0.85, 0.0); // Gold
          vec3 color2 = vec3(1.0, 0.65, 0.0); // Orange
          vec3 color = mix(color1, color2, d + sin(time * 0.5) * 0.5);
          gl_FragColor = vec4(color, 0.1);
        }
      `,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    camera.position.z = 2

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      material.uniforms.time.value += 0.01
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      material.uniforms.resolution.value.set(width, height)
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

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

