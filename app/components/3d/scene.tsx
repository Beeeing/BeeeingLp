"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, Float, OrbitControls } from "@react-three/drei"
import { Model } from "./model"
import { Loader } from "./loader"

export function Scene() {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={<Loader />}>
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Model />
          </Float>
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

