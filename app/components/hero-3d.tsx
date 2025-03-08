"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, Float, Text3D, Center } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import { motion } from "framer-motion-3d"
import { MeshGradient } from "./effects/mesh-gradient"
import { ParticleField } from "./effects/particle-field"
import { LiquidButton } from "./effects/liquid-button"
import * as THREE from "three"

export default function Hero3D() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <MeshGradient />
      <ParticleField />

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Center>
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                <motion.group
                  initial={{ scale: 0, rotateX: 90 }}
                  animate={{ scale: 1, rotateX: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  <Text3D
                    font="/fonts/bold.json"
                    size={0.5}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                  >
                    Beeeeing
                    <primitive object={new THREE.MeshStandardMaterial({
                      color: "#FFD700",
                      metalness: 0.8,
                      roughness: 0.2,
                      emissive: "#FFD700",
                      emissiveIntensity: 0.2
                    })} />
                  </Text3D>
                </motion.group>
              </Float>
            </Center>
            <Environment preset="city" />
            <EffectComposer>
              <Bloom
                intensity={2}
                luminanceThreshold={0.8}
                luminanceSmoothing={0.05}
                blendFunction={0}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
          >
            グローバル開発で
            <br />
            <span className="text-gradient">ビジネスを加速する</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            最新技術と確かな実績で、あなたのビジネスの成長をサポートする受託開発パートナー
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <LiquidButton className="px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-full">
              無料相談を申し込む
            </LiquidButton>
            <LiquidButton className="px-8 py-4 text-lg font-medium bg-secondary text-secondary-foreground rounded-full">
              サービスを見る
            </LiquidButton>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

