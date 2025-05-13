"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const time = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create a gradient that slowly shifts over time
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time.current * 0.2) * canvas.width * 0.2,
        canvas.height / 2 + Math.cos(time.current * 0.3) * canvas.height * 0.2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8,
      )

      gradient.addColorStop(0, "rgba(100, 255, 218, 0.05)")
      gradient.addColorStop(0.5, "rgba(10, 25, 47, 0)")
      gradient.addColorStop(1, "rgba(10, 25, 47, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Increment time for animation
      time.current += 0.01

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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}
