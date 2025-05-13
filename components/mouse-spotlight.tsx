"use client"

import { useEffect, useRef } from "react"

export default function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const isTouch = useRef(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const spotlight = spotlightRef.current
    const revealLayer = revealRef.current
    if (!spotlight || !revealLayer) return

    // Get the computed accent color from CSS variables
    const getAccentColor = () => {
      const accentColor =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim() || "#64ffda"
      return accentColor
    }

    // Update spotlight gradient with current theme color - reduced opacity
    const updateSpotlightGradient = () => {
      const accentColor = getAccentColor()

      // Reduced gradient opacity
      spotlight.style.background = `radial-gradient(circle, ${accentColor}20 0%, ${accentColor}10 40%, rgba(5, 16, 31, 0) 70%)`
      revealLayer.style.background = `radial-gradient(circle, ${accentColor}40 0%, ${accentColor}15 40%, rgba(5, 16, 31, 0) 70%)`
    }

    // Check if device is touch-enabled
    const checkTouch = () => {
      isTouch.current = "ontouchstart" in window || navigator.maxTouchPoints > 0

      // If touch device, position spotlight in center with very low opacity
      if (isTouch.current) {
        spotlight.style.opacity = "0.10" // Reduced from 0.15
        spotlight.style.left = "50%"
        spotlight.style.top = "50%"
        revealLayer.style.opacity = "0.05" // Reduced from 0.1
      }
    }

    checkTouch()
    updateSpotlightGradient()

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch.current) return

      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }

      // Make spotlight more visible when mouse is moving - but with reduced opacity
      spotlight.style.opacity = "0.15" // Reduced from 0.25
      revealLayer.style.opacity = "0.4" // Reduced from 0.7

      // Reset the fade timeout
      clearTimeout(fadeTimeout)
      fadeTimeout = setTimeout(() => {
        spotlight.style.opacity = "0.10" // Reduced from 0.18
        revealLayer.style.opacity = "0.3" // Reduced from 0.5
      }, 1000)
    }

    // Smooth animation for spotlight following - increased speed for less tracking
    const animateSpotlight = () => {
      if (isTouch.current) return

      // Faster follow with less easing (0.3 instead of 0.15) for more immediate response
      targetPosition.current.x += (mousePosition.current.x - targetPosition.current.x) * 0.3
      targetPosition.current.y += (mousePosition.current.y - targetPosition.current.y) * 0.3

      if (spotlight && revealLayer) {
        spotlight.style.left = `${targetPosition.current.x}px`
        spotlight.style.top = `${targetPosition.current.y}px`

        // Position the reveal layer at the same position
        revealLayer.style.left = `${targetPosition.current.x}px`
        revealLayer.style.top = `${targetPosition.current.y}px`
      }

      animationFrameId.current = requestAnimationFrame(animateSpotlight)
    }

    let fadeTimeout: number

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateSpotlightGradient()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", checkTouch)
    animationFrameId.current = requestAnimationFrame(animateSpotlight)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkTouch)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      clearTimeout(fadeTimeout)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main spotlight gradient - reduced opacity and size */}
      <div
        ref={spotlightRef}
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none z-0 opacity-10 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700"
        style={{
          left: "-100%", // Start off-screen
          top: "-100%", // Start off-screen
          filter: "blur(60px)", // More blur for softer effect
        }}
        aria-hidden="true"
      />

      {/* Pattern reveal spotlight - reduced opacity and size */}
      <div
        ref={revealRef}
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-1 opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700"
        style={{
          left: "-100%", // Start off-screen
          top: "-100%", // Start off-screen
          mixBlendMode: "screen",
          filter: "blur(40px)", // More blur for softer effect
        }}
        aria-hidden="true"
      />
    </>
  )
}
