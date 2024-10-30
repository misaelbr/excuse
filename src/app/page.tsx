'use client'
import { AlertCircle, MessageSquare, Zap } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const razoesPrincipais = [
  'estou com uma dor nas costas e preciso descansar',
  'meu avô precisou de ajuda urgente',
  'minha avó está passando mal e preciso ajudar',
  'houve um problema elétrico em casa',
  'minha vizinha idosa está precisando de apoio',
  'preciso resolver uma questão com o encanamento',
  'estou sentindo um desconforto persistente',
  'meu tio teve uma emergência e estou ajudando',
  'meu pai está com problemas de saúde e precisa de acompanhamento',
  'uma encomenda importante precisa de assinatura',
]

const niveisGravidade = [
  'a situação é mais complicada do que parece',
  'não sei quanto tempo vai levar',
  'preciso de um tempo para resolver tudo',
  'não quero apressar e piorar a situação',
  'vou precisar de mais de algumas horas para resolver',
  'estou esperando uma resposta definitiva',
  'a situação é delicada e preciso estar presente',
  'está mais sério do que eu esperava',
  'vou precisar resolver antes de voltar ao trabalho',
  'infelizmente, não tenho como resolver rapidamente',
]

const contextoAdicional = [
  'tenho que monitorar a situação com mais atenção',
  'não consigo deixar tudo para depois',
  'é uma situação sensível, então preciso estar presente',
  'estou aguardando assistência especializada',
  'estou verificando as soluções disponíveis',
  'tenho que resolver para evitar problemas futuros',
  'a situação ainda está se desenrolando',
  'a situação é um pouco mais complexa do que parecia',
  'a família está preocupada e eu também',
  'estou tentando gerenciar tudo o mais rápido possível',
]

export default function HomePage() {
  const [razao, setRazao] = useState('')
  const [gravidade, setGravidade] = useState('')
  const [contexto, setContexto] = useState('')

  const gerarRazao = () => {
    const randomRazao =
      razoesPrincipais[Math.floor(Math.random() * razoesPrincipais.length)]
    setRazao(randomRazao)
  }

  const gerarGravidade = () => {
    const randomGravidade =
      niveisGravidade[Math.floor(Math.random() * niveisGravidade.length)]
    setGravidade(randomGravidade)
  }

  const gerarContexto = () => {
    const randomContexto =
      contextoAdicional[Math.floor(Math.random() * contextoAdicional.length)]
    setContexto(randomContexto)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Gere uma desculpa aleatória para faltar ao trabalho
      </h1>

      <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
        <Card className="flex h-80 w-full flex-col items-center justify-between border-slate-600 shadow-md shadow-cyan-500/50 sm:h-60 sm:w-60 md:w-72 lg:w-80">
          <CardHeader>
            <CardTitle className="font-bold">Razão Principal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-center text-slate-300">
              {razao || 'Clique para gerar uma razão'}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={gerarRazao}
              className="items-center bg-indigo-300 shadow-lg shadow-indigo-500/50 hover:bg-indigo-200 hover:shadow-indigo-200/50"
            >
              <AlertCircle className="mr-1 h-6 w-6" />
              Gerar Razão
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex h-80 w-full flex-col items-center justify-between border-slate-600 shadow-md shadow-cyan-500/50 sm:h-60 sm:w-60 md:w-72 lg:w-80">
          <CardHeader>
            <CardTitle className="font-bold">Nível de Gravidade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-center text-slate-300">
              {gravidade || 'Clique para gerar uma gravidade'}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={gerarGravidade}
              className="items-center bg-indigo-300 shadow-lg shadow-indigo-500/50 hover:bg-indigo-200 hover:shadow-indigo-200/50"
            >
              <Zap className="mr-1 h-6 w-6" />
              Gerar Gravidade
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex h-80 w-full flex-col items-center justify-between border-slate-600 shadow-md shadow-cyan-500/50 sm:h-60 sm:w-60 md:w-72 lg:w-80">
          <CardHeader>
            <CardTitle className="font-bold">Contexto Adicional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-center text-slate-300">
              {contexto || 'Clique para gerar um contexto'}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={gerarContexto}
              className="items-center bg-indigo-300 shadow-lg shadow-indigo-500/50 hover:bg-indigo-200 hover:shadow-indigo-200/50"
            >
              <MessageSquare className="mr-1 h-6 w-6" />
              Gerar Contexto
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 w-full rounded-lg p-4 text-center sm:w-3/4 lg:w-1/2">
        <p>
          <strong>Desculpa Completa:</strong>{' '}
          {razao && gravidade && contexto
            ? `Hoje não poderei ir trabalhar, ${razao}. ${gravidade.charAt(0).toUpperCase() + gravidade.slice(1)}, ${contexto}.`
            : 'Clique nos botões para gerar sua desculpa.'}
        </p>
      </div>
    </div>
  )
}
