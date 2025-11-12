'use client'

import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface WhatsAppShareProps {
  message: string
  disabled?: boolean
}

export function WhatsAppShare({
  message,
  disabled = false,
}: WhatsAppShareProps) {
  const handleShare = () => {
    if (!message) return

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      onClick={handleShare}
      disabled={disabled}
      className="items-center gap-2 border-2 border-white/30 bg-gradient-to-r from-green-500 to-emerald-600 font-semibold text-white shadow-lg shadow-green-500/50 transition-all hover:scale-105 hover:from-green-600 hover:to-emerald-700 hover:shadow-xl hover:shadow-green-500/50 disabled:opacity-50 disabled:hover:scale-100"
    >
      <MessageCircle className="h-5 w-5" />
      Compartilhar no WhatsApp
    </Button>
  )
}
