"use client"

import { useState } from "react"
import AnimatedBackground from "@/components/animated-background"
import AnimatedBackgroundWaves from "@/components/animated-background-waves"
import AnimatedBackgroundGradient from "@/components/animated-background-gradient"
import { Button } from "@/components/ui/button"

export default function AnimatedBackgroundDemo() {
  const [backgroundType, setBackgroundType] = useState<"particles" | "waves" | "gradient" | "combined">("particles")

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-slate-300 font-sans">
      {backgroundType === "particles" && <AnimatedBackground />}
      {backgroundType === "waves" && <AnimatedBackgroundWaves />}
      {backgroundType === "gradient" && <AnimatedBackgroundGradient />}
      {backgroundType === "combined" && (
        <>
          <AnimatedBackground />
          <AnimatedBackgroundGradient />
        </>
      )}

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">Animated Background</h1>
          <p className="text-xl text-teal-300 mb-8">Elegant, subtle animations for your portfolio</p>
          <p className="max-w-xl text-center text-slate-400 mb-12">
            Choose from different animation styles that add depth and sophistication without distracting from your
            content.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setBackgroundType("particles")}
              className={`${
                backgroundType === "particles" ? "bg-teal-500 text-slate-900" : "bg-[#112240] text-teal-300"
              } hover:bg-teal-400 hover:text-slate-900`}
            >
              Particles
            </Button>
            <Button
              onClick={() => setBackgroundType("waves")}
              className={`${
                backgroundType === "waves" ? "bg-teal-500 text-slate-900" : "bg-[#112240] text-teal-300"
              } hover:bg-teal-400 hover:text-slate-900`}
            >
              Waves
            </Button>
            <Button
              onClick={() => setBackgroundType("gradient")}
              className={`${
                backgroundType === "gradient" ? "bg-teal-500 text-slate-900" : "bg-[#112240] text-teal-300"
              } hover:bg-teal-400 hover:text-slate-900`}
            >
              Gradient
            </Button>
            <Button
              onClick={() => setBackgroundType("combined")}
              className={`${
                backgroundType === "combined" ? "bg-teal-500 text-slate-900" : "bg-[#112240] text-teal-300"
              } hover:bg-teal-400 hover:text-slate-900`}
            >
              Combined
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
