"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  type?: "particles" | "waves" | "gradient" | "combined"
  opacity?: number
  color?: string
  particleCount?: number
}

export default function AnimatedBackgroundIntegration({
  type = "particles",
  opacity = 0.6,
  color = "#64ffda",
  particleCount = 70,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<any[]>([])
  const animationFrameId = useRef<number>(0)
  const mousePosition = useRef({ x: 0, y: 0 })
  const time = useRef(0)

  // Convert hex to rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex.slice(3, 5), 16)
    const b = Number.parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (type === "particles" || type === "combined") {
        initParticles()
      }
    }

    // Track mouse position for subtle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.current = []
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), particleCount)

      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: color,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Draw particles
    const drawParticles = () => {
      particles.current.forEach((particle) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba(particle.color, particle.opacity * opacity)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Subtle mouse interaction
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const angle = Math.atan2(dy, dx)
          particle.x -= Math.cos(angle) * 0.2
          particle.y -= Math.sin(angle) * 0.2
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Connect particles with lines if they're close enough
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = hexToRgba(color, 0.1 * (1 - distance / 150) * opacity)
            ctx.lineWidth = 0.5
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw waves
    const drawWaves = () => {
      const baseColor = hexToRgba(color, opacity)

      // Draw multiple waves with different parameters
      const drawWave = (amplitude: number, wavelength: number, offset: number, alpha: number) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + amplitude * Math.sin(x / wavelength + time.current + offset)

          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = hexToRgba(color, alpha * opacity)
        ctx.fill()
      }

      drawWave(50, 200, 0, 0.03)
      drawWave(40, 150, 2, 0.02)
      drawWave(60, 250, 4, 0.01)
    }

    // Draw gradient
    const drawGradient = () => {
      // Create a gradient that slowly shifts over time
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time.current * 0.2) * canvas.width * 0.2,
        canvas.height / 2 + Math.cos(time.current * 0.3) * canvas.height * 0.2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8,
      )

      gradient.addColorStop(0, hexToRgba(color, 0.05 * opacity))
      gradient.addColorStop(0.5, "rgba(10, 25, 47, 0)")
      gradient.addColorStop(1, "rgba(10, 25, 47, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (type === "particles" || type === "combined") {
        drawParticles()
      }

      if (type === "waves" || type === "combined") {
        drawWaves()
      }

      if (type === "gradient" || type === "combined") {
        drawGradient()
      }

      // Increment time for animation
      time.current += 0.005

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [type, opacity, color, particleCount])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true" />
}
