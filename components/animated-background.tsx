"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>(0)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particles = useRef<
    Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      pulseSpeed: number
      pulsePhase: number
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
      initParticles()
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
      // Reduced particle count for more subtle effect
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 30000), 40)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.4, // Slightly smaller particles
          speedX: (Math.random() - 0.5) * 0.12, // Slower movement
          speedY: (Math.random() - 0.5) * 0.12,
          opacity: Math.random() * 0.3 + 0.1, // Lower opacity
          pulseSpeed: Math.random() * 0.015 + 0.005, // Slower pulsing
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    // Animation loop
    const animate = () => {
      // Clear the canvas with a slight fade effect for trails
      ctx.fillStyle = "rgba(5, 16, 31, 0.3)" // Using the darker background color with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const accentColor = getAccentColor()
      const time = Date.now() * 0.001 // Current time in seconds for animations

      // Draw and update particles
      particles.current.forEach((particle) => {
        // Calculate pulsing opacity - reduced overall
        const pulsingOpacity =
          particle.opacity * 0.7 * (0.7 + 0.3 * Math.sin(time * particle.pulseSpeed + particle.pulsePhase))

        // Draw particle with pulsing effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${accentColor}${Math.floor(pulsingOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Add a subtle glow effect - reduced
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          particle.size * 0.5,
          particle.x,
          particle.y,
          particle.size * 1.5,
        )
        gradient.addColorStop(
          0,
          `${accentColor}${Math.floor(pulsingOpacity * 0.3 * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${accentColor}00`)
        ctx.fillStyle = gradient
        ctx.fill()

        // Update position with dynamic speed
        particle.x += particle.speedX * (1 + 0.1 * Math.sin(time * 0.3))
        particle.y += particle.speedY * (1 + 0.1 * Math.cos(time * 0.3))

        // Subtle mouse interaction
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const angle = Math.atan2(dy, dx)
          const force = ((120 - distance) / 120) * 0.3
          particle.x -= Math.cos(angle) * force
          particle.y -= Math.sin(angle) * force
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      // Connect particles with lines - more subtle connections
      connectParticles(ctx, accentColor, time)

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Draw lines between nearby particles with reduced opacity
    const connectParticles = (ctx: CanvasRenderingContext2D, accentColor: string, time: number) => {
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Reduced connection distance
          if (distance < 150) {
            // Dynamic opacity based on distance and time - reduced overall
            const baseOpacity = 0.08 * (1 - distance / 150) // Reduced from 0.15
            const pulsingOpacity = baseOpacity * (0.8 + 0.2 * Math.sin(time * 0.3 + i * 0.1 + j * 0.1))

            ctx.beginPath()
            ctx.strokeStyle = `${accentColor}${Math.floor(pulsingOpacity * 255)
              .toString(16)
              .padStart(2, "0")}`

            // Thinner lines
            const lineWidth = 0.3 * (1 - distance / 150)
            ctx.lineWidth = lineWidth

            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
          }
        }
      }
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
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.15 }} // Reduced opacity from 0.3 to 0.15
    />
  )
}
