"use client"

import AnimatedBackground from "@/components/animated-background"
import MouseSpotlight from "@/components/mouse-spotlight"
import HiddenPattern from "@/components/hidden-pattern"
import ProfessionalGradient from "@/components/professional-gradient"
import AnimatedStars from "@/components/animated-stars"

export default function BackgroundEffects() {
  return (
    <>
      <AnimatedBackground />
      <ProfessionalGradient />
      <AnimatedStars />
      <HiddenPattern />
      <MouseSpotlight />
    </>
  )
}
