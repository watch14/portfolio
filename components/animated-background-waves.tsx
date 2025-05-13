"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackgroundWaves() {
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

    // Draw a wave
    const drawWave = (
      ctx: CanvasRenderingContext2D,
      amplitude: number,
      wavelength: number,
      offset: number,
      color: string,
      opacity: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.sin(x / wavelength + time.current + offset)

        ctx.lineTo(x, y)
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      ctx.fillStyle = color.replace("1)", `${opacity})`)
      ctx.fill()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waves with different parameters
      drawWave(ctx, 50, 200, 0, "rgba(100, 255, 218, 1)", 0.03)
      drawWave(ctx, 40, 150, 2, "rgba(80, 225, 200, 1)", 0.02)
      drawWave(ctx, 60, 250, 4, "rgba(60, 200, 180, 1)", 0.01)

      // Increment time for animation
      time.current += 0.005

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
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ opacity: 0.8 }} />
  )
}
