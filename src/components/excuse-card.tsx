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

interface CardState {
  id: number
  excuse: string
  flipped: boolean
  isExiting: boolean
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
  const [cards, setCards] = useState<CardState[]>([
    { id: 0, excuse: '', flipped: false, isExiting: false },
  ])
  const [nextId, setNextId] = useState(1)
  const [usedExcuses, setUsedExcuses] = useState<string[]>([])

  const handleCardClick = () => {
    const topCard = cards[cards.length - 1]

    // Se está saindo, não faz nada
    if (topCard.isExiting) return

    // Se já está virado (mostrando a desculpa), inicia animação de saída
    if (topCard.flipped) {
      // Marca o card do topo como saindo
      setCards((prev) =>
        prev.map((card, idx) =>
          idx === prev.length - 1 ? { ...card, isExiting: true } : card,
        ),
      )

      // Após a animação, remove o card e adiciona um novo
      setTimeout(() => {
        setCards((prev) => {
          const newCards = prev.filter((_, idx) => idx !== prev.length - 1)
          return [
            ...newCards,
            { id: nextId, excuse: '', flipped: false, isExiting: false },
          ]
        })
        setNextId((prev) => prev + 1)
      }, 800)

      return
    }

    // Filtra desculpas não usadas
    const availableExcuses = excuses.filter((exc) => !usedExcuses.includes(exc))

    // Se todas foram usadas, reseta
    const excusesToUse =
      availableExcuses.length > 0 ? availableExcuses : excuses

    // Gera nova desculpa
    const randomExcuse =
      excusesToUse[Math.floor(Math.random() * excusesToUse.length)]

    // Atualiza o card do topo
    setCards((prev) =>
      prev.map((card, idx) =>
        idx === prev.length - 1
          ? { ...card, excuse: randomExcuse, flipped: true }
          : card,
      ),
    )

    onGenerate(randomExcuse)

    // Adiciona à lista de usadas
    setUsedExcuses((prev) => {
      if (availableExcuses.length === 0) return [randomExcuse]
      return [...prev, randomExcuse]
    })
  }

  const getExitAnimation = () => {
    const directions = [
      'translate-x-[-150vw] rotate-[720deg]', // Esquerda com rotação
      'translate-x-[150vw] rotate-[-720deg]', // Direita com rotação
      'translate-y-[-150vh] rotate-[360deg]', // Cima com rotação
      'translate-y-[150vh] rotate-[-360deg]', // Baixo com rotação
    ]
    return directions[Math.floor(Math.random() * directions.length)]
  }

  return (
    <div
      className={`card-container relative h-80 w-full max-w-sm cursor-pointer sm:w-60 md:w-72 lg:w-80 ${className}`}
      onClick={handleCardClick}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute inset-0 ${
            card.isExiting ? getExitAnimation() : ''
          } transition-all duration-700 ease-in-out ${
            index < cards.length - 1 ? 'pointer-events-none' : ''
          }`}
          style={{
            zIndex: index,
          }}
        >
          <div
            className="card-flipper h-full w-full"
            style={{
              transform: card.flipped ? 'rotateY(180deg)' : 'none',
            }}
          >
            <div className="card-front absolute h-full w-full">
              <Card className="flex h-full w-full flex-col items-center justify-between border-purple-400/50 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg shadow-purple-500/30 transition-shadow hover:shadow-xl hover:shadow-purple-500/50 dark:border-purple-500/50 dark:from-slate-800 dark:to-slate-900">
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
              <Card className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-purple-400/50 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 shadow-lg shadow-purple-500/50 transition-shadow hover:shadow-xl hover:shadow-purple-500/70">
                {/* Gradiente de fundo decorativo */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20`}
                />
                {/* Emoji decorativo grande */}
                <div className="absolute right-4 top-4 text-6xl opacity-30">
                  {emoji}
                </div>
                {/* Indicador visual de "clique para descartar" */}
                <div className="absolute left-4 top-4 text-xs text-white/50">
                  Clique para próximo
                </div>
                <CardContent className="relative z-10">
                  <p className="text-center text-lg font-medium text-white drop-shadow-lg">
                    {card.excuse}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
