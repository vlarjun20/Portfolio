"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  resumePath?: string
  className?: string
}

export function ResumeButton({ resumePath = "/resume/arjun_resume.pdf", className = "" }: ResumeButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      variant="outline"
      className={`border-purple-500 text-purple-500 dark:text-purple-400 hover:bg-purple-500/10 ${className}`}
      asChild
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  
    >
      <Link href={resumePath} target="_blank" rel="noopener noreferrer" >
        Resume
      </Link>
    </Button>
  )
}
