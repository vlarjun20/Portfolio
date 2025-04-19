"use client"

import { useEffect, useState } from "react"
import { Brain, Code, Database, Cpu, Server, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

interface FloatingIcon {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  direction: number
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const iconComponents = [Brain, Code, Database, Cpu, Server, Sparkles]
    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 8; i++) {
      newIcons.push({
        id: i,
        Icon: iconComponents[i % iconComponents.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 1,
        rotation: Math.random() * 360,
        speed: Math.random() * 0.2 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
      })
    }

    setIcons(newIcons)

    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          y: icon.y + icon.speed * icon.direction,
          rotation: icon.rotation + 0.2,
          direction: icon.y <= 0 ? 1 : icon.y >= 100 ? -1 : icon.direction,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute transition-transform duration-1000"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
            opacity: 0.15,
          }}
        >
          <icon.Icon size={icon.size * 24} className={theme === "dark" ? "text-purple-400" : "text-purple-600"} />
        </div>
      ))}
    </div>
  )
}
