"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface CodeDrop {
  x: number
  y: number
  speed: number
  char: string
  opacity: number
  color: string
  fontSize: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Determine the current theme, with proper fallback
  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark"

  useEffect(() => {
    setMounted(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let drops: CodeDrop[] = []

    // AI/ML specific code characters and keywords
    const aiCodeChars = [
      // Python ML keywords
      "import",
      "tensorflow",
      "pytorch",
      "sklearn",
      "numpy",
      "pandas",
      "model",
      "train",
      "predict",
      "fit",
      "transform",
      "accuracy",
      "neural",
      "network",
      "deep",
      "learning",
      "ai",
      "ml",
      "conv2d",
      "dense",
      "lstm",
      "gru",
      "attention",
      "transformer",
      "relu",
      "sigmoid",
      "softmax",
      "adam",
      "sgd",
      "rmsprop",
      "loss",
      "optimizer",
      "epoch",
      "batch",
      "gradient",
      "backprop",

      // Code symbols and operators
      "def",
      "class",
      "if",
      "else",
      "for",
      "while",
      "return",
      "import",
      "from",
      "as",
      "with",
      "try",
      "except",
      "==",
      "!=",
      "<=",
      ">=",
      "->",
      "lambda",
      "yield",

      // Mathematical symbols
      "∑",
      "∆",
      "∇",
      "∂",
      "∞",
      "α",
      "β",
      "γ",
      "θ",
      "λ",
      "μ",
      "σ",

      // Numbers and brackets
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "<",
      ">",
      "/",
      "*",
      "+",
      "-",
      "=",

      // AI model names and concepts
      "GPT",
      "BERT",
      "CNN",
      "RNN",
      "GAN",
      "VAE",
      "SVM",
      "KNN",
      "ResNet",
      "VGG",
      "YOLO",
      "R-CNN",
      "U-Net",
      "AlexNet",
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDrops()
    }

    const initDrops = () => {
      drops = []
      const dropCount = Math.floor(canvas.width / 25)

      for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: i * 25 + Math.random() * 10,
          y: Math.random() * canvas.height,
          speed: Math.random() * 2 + 0.5,
          char: aiCodeChars[Math.floor(Math.random() * aiCodeChars.length)],
          opacity: Math.random() * 0.8 + 0.2,
          fontSize: Math.random() * 8 + 10,
          color:
            currentTheme === "dark"
              ? `rgba(34, 211, 238, ${Math.random() * 0.8 + 0.2})`
              : `rgba(8, 145, 178, ${Math.random() * 0.6 + 0.2})`,
        })
      }
    }

    const drawDrops = () => {
      // Create trailing effect with more transparency for smoother look
      ctx.fillStyle = currentTheme === "dark" ? "rgba(2, 6, 23, 0.03)" : "rgba(248, 250, 252, 0.03)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, i) => {
        // Update position
        drop.y += drop.speed

        // Reset drop when it goes off screen
        if (drop.y > canvas.height + 50) {
          drop.y = -50
          drop.char = aiCodeChars[Math.floor(Math.random() * aiCodeChars.length)]
          drop.opacity = Math.random() * 0.8 + 0.2
          drop.fontSize = Math.random() * 8 + 10
          drop.speed = Math.random() * 2 + 0.5
        }

        // Draw character with glow effect
        ctx.font = `${drop.fontSize}px "Fira Code", "JetBrains Mono", "Courier New", monospace`
        ctx.fillStyle = drop.color
        ctx.globalAlpha = drop.opacity

        // Add glow effect for dark theme
        if (currentTheme === "dark") {
          ctx.shadowColor = "#22d3ee"
          ctx.shadowBlur = 3
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillText(drop.char, drop.x, drop.y)

        // Occasionally change character (less frequent for readability)
        if (Math.random() < 0.005) {
          drop.char = aiCodeChars[Math.floor(Math.random() * aiCodeChars.length)]
        }

        // Add slight horizontal drift
        drop.x += Math.sin(drop.y * 0.01) * 0.1
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      animationFrameId = requestAnimationFrame(drawDrops)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawDrops()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentTheme, mounted])

  // Return an empty canvas initially to avoid hydration mismatch
  if (!mounted) {
    return <canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-0" />
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-25"
      style={{ pointerEvents: "none" }}
    />
  )
}
