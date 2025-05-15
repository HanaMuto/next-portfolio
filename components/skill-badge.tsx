"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInView(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="text-center mb-2 font-medium">{name}</div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${level}%` : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="text-right text-xs text-muted-foreground mt-1">{level}%</div>
      </CardContent>
    </Card>
  )
}
