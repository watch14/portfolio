"use client"

import { useEffect, useRef } from "react"

export default function ProfessionalGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get the computed colors from CSS variables
    const getColors = () => {
      const accentColor =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim() || "#64ffda"
      const bgDark = getComputedStyle(document.documentElement).getPropertyValue("--bg-dark").trim() || "#05101f"
      return { accentColor, bgDark }
    }

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { accentColor, bgDark } = getColors()

      // Create multiple gradient layers for more dynamic effect - reduced opacity
      const gradientSize = Math.max(canvas.width, canvas.height) * 1.5

      // First layer - slow moving large gradient
      const centerX1 = canvas.width / 2 + Math.sin(time.current * 0.04) * canvas.width * 0.15
      const centerY1 = canvas.height / 2 + Math.cos(time.current * 0.03) * canvas.height * 0.15

      const gradient1 = ctx.createRadialGradient(centerX1, centerY1, 0, centerX1, centerY1, gradientSize)
      gradient1.addColorStop(0, `${accentColor}08`) // Reduced from 10 to 08 (3% opacity)
      gradient1.addColorStop(0.4, `${accentColor}05`) // Reduced from 08 to 05 (2% opacity)
      gradient1.addColorStop(0.8, `${bgDark}03`) // Reduced from 05 to 03 (1% opacity)
      gradient1.addColorStop(1, `${bgDark}00`) // 0% opacity

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Second layer - faster moving smaller gradient
      const centerX2 = canvas.width / 2 + Math.sin(time.current * 0.06) * canvas.width * 0.1
      const centerY2 = canvas.height / 2 + Math.cos(time.current * 0.05) * canvas.height * 0.1

      const gradient2 = ctx.createRadialGradient(centerX2, centerY2, 0, centerX2, centerY2, gradientSize * 0.7)
      gradient2.addColorStop(0, `${accentColor}06`) // Reduced from 0A to 06 (2.4% opacity)
      gradient2.addColorStop(0.6, `${accentColor}03`) // Reduced from 05 to 03 (1.2% opacity)
      gradient2.addColorStop(1, `${bgDark}00`) // 0% opacity

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Third layer - small pulsing accent gradient
      const pulseSize = (Math.sin(time.current * 0.4) * 0.15 + 0.7) * gradientSize * 0.3
      const centerX3 = canvas.width / 2 + Math.sin(time.current * 0.08) * canvas.width * 0.08
      const centerY3 = canvas.height / 2 + Math.cos(time.current * 0.09) * canvas.height * 0.08

      const gradient3 = ctx.createRadialGradient(centerX3, centerY3, 0, centerX3, centerY3, pulseSize)
      gradient3.addColorStop(0, `${accentColor}0A`) // Reduced from 12 to 0A (4% opacity)
      gradient3.addColorStop(0.7, `${accentColor}03`) // Reduced from 05 to 03 (1.2% opacity)
      gradient3.addColorStop(1, `${bgDark}00`) // 0% opacity

      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add a subtle vignette effect for depth - reduced
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8,
      )

      vignetteGradient.addColorStop(0.7, "rgba(0,0,0,0)")
      vignetteGradient.addColorStop(1, "rgba(0,0,0,0.15)") // Reduced from 0.25 to 0.15

      ctx.fillStyle = vignetteGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Increment time for animation
      time.current += 0.008 // Slower animation

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    window.addEventListener("resize", handleResize)
    handleResize()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.7 }} // Added opacity control at the canvas level
    />
  )
}
