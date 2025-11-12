'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface ExcuseCardProps {
  title: string
  icon: React.ReactNode
  defaultText: string
  buttonText: string
  excuses: string[]
  onGenerate: (excuse: string) => void
  className?: string
  emoji?: string
  gradientFrom?: string
  gradientTo?: string
}

export function ExcuseCard({
  title,
  icon,
  defaultText,
  buttonText,
  excuses,
  onGenerate,
  className,
  emoji = '🎴',
  gradientFrom = 'from-indigo-500',
  gradientTo = 'to-purple-500',
}: ExcuseCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [excuse, setExcuse] = useState('')

  const generateExcuse = () => {
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)]
    setExcuse(randomExcuse)
    onGenerate(randomExcuse)
    setFlipped(!flipped)
  }

  return (
    <div
      className={`card-container relative h-80 w-full max-w-sm sm:w-60 md:w-72 lg:w-80 ${className}`}
      onClick={generateExcuse}
    >
      <div
        className="card-flipper h-full w-full"
        style={{
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div className="card-front absolute h-full w-full">
          <Card className="flex h-full w-full flex-col items-center justify-between border-purple-400/50 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg shadow-purple-500/30 dark:border-purple-500/50 dark:from-slate-800 dark:to-slate-900">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-transparent dark:from-purple-400 dark:to-pink-400">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-center text-slate-700 dark:text-slate-300">
                {defaultText}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="items-center border-2 border-white/30 bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-pink-500/50">
                {icon}
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="card-back absolute h-full w-full">
          <Card className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-purple-400/50 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 shadow-lg shadow-purple-500/50">
            {/* Gradiente de fundo decorativo */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20`}
            />
            {/* Emoji decorativo grande */}
            <div className="absolute right-4 top-4 text-6xl opacity-30">
              {emoji}
            </div>
            <CardContent className="relative z-10">
              <p className="text-center text-lg font-medium text-white drop-shadow-lg">
                {excuse}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
