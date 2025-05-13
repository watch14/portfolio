"use client"

import { useEffect, useRef } from "react"

export default function AnimatedStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const stars = useRef<
    Array<{
      x: number
      y: number
      size: number
      opacity: number
      blinkSpeed: number
      blinkPhase: number
    }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get the computed accent color from CSS variables
    const getAccentColor = () => {
      const accentColor =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim() || "#64ffda"
      return accentColor
    }

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    // Initialize stars
    const initStars = () => {
      stars.current = []
      // Create a sparse field of stars - reduced count
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 20000), 70)

      for (let i = 0; i < starCount; i++) {
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3, // Smaller stars
          opacity: Math.random() * 0.3 + 0.1, // Lower opacity
          blinkSpeed: Math.random() * 0.008 + 0.003, // Slower blinking
          blinkPhase: Math.random() * Math.PI * 2,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const accentColor = getAccentColor()
      const time = Date.now() * 0.001 // Current time in seconds

      // Draw stars with twinkling effect
      stars.current.forEach((star) => {
        // Calculate blinking opacity - reduced overall
        const blinkingOpacity = star.opacity * (0.5 + 0.5 * Math.sin(time * star.blinkSpeed + star.blinkPhase))

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `${accentColor}${Math.floor(blinkingOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Add glow effect - reduced
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(star.x, star.y, star.size * 0.5, star.x, star.y, star.size * 2)
        gradient.addColorStop(
          0,
          `${accentColor}${Math.floor(blinkingOpacity * 0.2 * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${accentColor}00`)
        ctx.fillStyle = gradient
        ctx.fill()
      })

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
      style={{ opacity: 0.3 }} // Reduced opacity from 0.6 to 0.3
    />
  )
}
