'use client'
import { AlertCircle, MessageSquare, Zap } from 'lucide-react'
import { useState } from 'react'

import { ExcuseCard } from '@/components/excuse-card'
import { WhatsAppShare } from '@/components/whatsapp-share'

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
  'meu gato está com um comportamento estranho e preciso levá-lo ao veterinário',
  'acordei com uma alergia misteriosa e preciso ir ao médico',
  'meu carro quebrou no meio do caminho',
  'estou preso em casa porque a fechadura emperrou',
  'preciso ajudar minha mãe com uma situação urgente',
  'meu cachorro engoliu algo que não deveria',
  'tive um problema com documentos importantes',
  'minha geladeira parou de funcionar durante a madrugada',
  'a torneira estourou e alaguei o banheiro',
  'recebi uma ligação urgente da escola do meu filho',
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
  'é algo que requer minha atenção imediata',
  'estou lidando com algo totalmente inesperado',
  'preciso estar 100% focado nisso agora',
  'não há como adiar para outro momento',
  'a urgência da situação me pegou de surpresa',
  'isso pode se tornar um problema maior se eu não agir agora',
  'estou tentando evitar consequências piores',
  'não posso ignorar isso por mais tempo',
  'a situação exige que eu fique disponível o dia todo',
  'tudo indica que vai demorar mais do que imaginei',
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
  'preciso me certificar de que tudo será resolvido adequadamente',
  'qualquer descuido pode agravar ainda mais a situação',
  'já entrei em contato com quem pode ajudar, mas leva tempo',
  'estou fazendo o possível para normalizar tudo',
  'não quero que isso vire uma bola de neve',
  'vou manter você informado sobre os desdobramentos',
  'assim que resolver, retorno às atividades normalmente',
  'agradeço a compreensão neste momento delicado',
  'sei que é inconveniente, mas é realmente necessário',
  'prometo compensar assim que tudo se acalmar',
]

export default function HomePage() {
  const [razao, setRazao] = useState('')
  const [gravidade, setGravidade] = useState('')
  const [contexto, setContexto] = useState('')

  const desculpaCompleta =
    razao && gravidade && contexto
      ? `Hoje não poderei ir trabalhar, ${razao}. ${
          gravidade.charAt(0).toUpperCase() + gravidade.slice(1)
        }, ${contexto}.`
      : ''

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
      <h1 className="mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
        Gere uma desculpa aleatória para faltar ao trabalho
      </h1>{' '}
      <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-6 md:gap-8">
        <ExcuseCard
          title="Razão Principal"
          icon={<AlertCircle className="mr-1 h-6 w-6" />}
          defaultText="Clique para gerar uma razão"
          buttonText="Gerar Razão"
          excuses={razoesPrincipais}
          onGenerate={setRazao}
          emoji="🤒"
          gradientFrom="from-pink-500"
          gradientTo="to-rose-500"
        />
        <ExcuseCard
          title="Nível de Gravidade"
          icon={<Zap className="mr-1 h-6 w-6" />}
          defaultText="Clique para gerar uma gravidade"
          buttonText="Gerar Gravidade"
          excuses={niveisGravidade}
          onGenerate={setGravidade}
          emoji="⚡"
          gradientFrom="from-amber-500"
          gradientTo="to-orange-500"
        />
        <ExcuseCard
          title="Contexto Adicional"
          icon={<MessageSquare className="mr-1 h-6 w-6" />}
          defaultText="Clique para gerar um contexto"
          buttonText="Gerar Contexto"
          excuses={contextoAdicional}
          onGenerate={setContexto}
          emoji="💬"
          gradientFrom="from-cyan-500"
          gradientTo="to-blue-500"
        />
      </div>
      <div className="mt-12 w-full rounded-xl border-2 border-purple-300/50 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-6 text-center shadow-lg dark:border-purple-500/50 dark:from-slate-800 dark:via-purple-900 dark:to-slate-800 sm:w-3/4 lg:w-1/2">
        <p className="mb-4 text-slate-800 dark:text-slate-100">
          <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-transparent dark:from-purple-400 dark:to-pink-400">
            Desculpa Completa:
          </strong>{' '}
          {desculpaCompleta || 'Vire as cartas para gerar sua desculpa.'}
        </p>
        {desculpaCompleta && (
          <div className="mt-4 flex justify-center">
            <WhatsAppShare message={desculpaCompleta} />
          </div>
        )}
      </div>
    </div>
  )
}
