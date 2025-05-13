"use client"

import { useEffect, useRef } from "react"

export default function HiddenPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const time = useRef(0)

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
      drawPattern()
    }

    // Draw the hidden pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const accentColor = getAccentColor()
      const currentTime = time.current

      // Pattern style - more subtle
      ctx.strokeStyle = `${accentColor}10` // Reduced from 18 to 10 (6% opacity)
      ctx.lineWidth = 0.3 // Thinner lines

      // Draw a more structured grid pattern
      const gridSize = 60 // Larger grid for fewer lines
      const offsetX = (canvas.width % gridSize) / 2
      const offsetY = (canvas.height % gridSize) / 2

      // Horizontal grid lines with subtle animation
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath()

        // Wavy horizontal lines - reduced wave amplitude
        for (let x = 0; x < canvas.width; x += 5) {
          const waveY = y + Math.sin(x * 0.01 + currentTime) * 1.5 // Reduced amplitude
          if (x === 0) {
            ctx.moveTo(x, waveY)
          } else {
            ctx.lineTo(x, waveY)
          }
        }

        ctx.stroke()
      }

      // Vertical grid lines with subtle animation
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath()

        // Wavy vertical lines - reduced wave amplitude
        for (let y = 0; y < canvas.height; y += 5) {
          const waveX = x + Math.sin(y * 0.01 + currentTime) * 1.5 // Reduced amplitude
          if (y === 0) {
            ctx.moveTo(waveX, y)
          } else {
            ctx.lineTo(waveX, y)
          }
        }

        ctx.stroke()
      }

      // Add animated dots at intersections - reduced opacity
      ctx.fillStyle = `${accentColor}15` // Reduced from 20 to 15 (8% opacity)

      for (let x = offsetX; x < canvas.width; x += gridSize) {
        for (let y = offsetY; y < canvas.height; y += gridSize) {
          // Pulsing size based on time - reduced size
          const pulseSize = 0.6 + Math.sin(currentTime + x * 0.01 + y * 0.01) * 0.3 // Smaller dots

          ctx.beginPath()
          ctx.arc(
            x + Math.sin(currentTime + y * 0.05) * 1.5, // Reduced movement
            y + Math.cos(currentTime + x * 0.05) * 1.5,
            pulseSize,
            0,
            Math.PI * 2,
          )
          ctx.fill()
        }
      }

      // Add very subtle diagonal lines - reduced opacity
      ctx.strokeStyle = `${accentColor}08` // Reduced from 10 to 08 (3% opacity)
      ctx.lineWidth = 0.2 // Thinner lines

      for (let i = 0; i < canvas.width + canvas.height; i += gridSize * 2) {
        ctx.beginPath()
        ctx.moveTo(0, i + Math.sin(currentTime) * 3) // Reduced movement
        ctx.lineTo(i + Math.sin(currentTime) * 3, 0)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(canvas.width, i - canvas.width + Math.cos(currentTime) * 3) // Reduced movement
        ctx.lineTo(i + Math.cos(currentTime) * 3, canvas.height)
        ctx.stroke()
      }

      // Increment time for animation - slower
      time.current += 0.003 // Reduced from 0.005

      // Request next frame
      animationFrameId.current = requestAnimationFrame(drawPattern)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

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
      style={{
        opacity: 0.05, // Reduced from 0.08 to 0.05
        mixBlendMode: "screen", // Blend mode for better integration
      }}
    />
  )
}
