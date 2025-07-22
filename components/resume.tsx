"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeButtonProps {
  resumePath?: string
  className?: string
}

export function ResumeButton({ resumePath = "/resume/arjun-resume.pdf", className = "" }: ResumeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      variant="outline"
      className={`border-cyan-500 text-cyan-500 dark:text-cyan-400 hover:bg-cyan-500/10 ${className}`}
      asChild
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={resumePath} target="_blank" rel="noopener noreferrer">
        {isHovered ? <Download className="mr-2 h-4 w-4" /> : null}
        Resume
      </Link>
    </Button>
  )
}
