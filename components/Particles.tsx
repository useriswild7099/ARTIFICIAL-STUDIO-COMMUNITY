'use client'

import { useEffect, useRef } from 'react'

export default function Particles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Handle responsive resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // Particle settings & initialization
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 3500) // Increased density

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      twinkleSpeed: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 1.8 + 0.1 // More varied star sizes
        this.speedX = (Math.random() - 0.5) * 0.1 // Slightly slower drift
        this.speedY = (Math.random() - 0.5) * 0.1
        this.opacity = Math.random() * 0.8 + 0.1
        this.twinkleSpeed = (Math.random() * 0.02) + 0.005
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY
        
        // Twinkle effect
        this.opacity += this.twinkleSpeed
        if (this.opacity >= 1 || this.opacity <= 0.1) {
          this.twinkleSpeed *= -1
        }

        // Seamless wrap around edges
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < 0) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = 0
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height)
        particlesArray[i].draw(ctx)
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Sits above the nebula image but below content
        pointerEvents: 'none', // Allows clicks to pass through
      }}
    />
  )
}
