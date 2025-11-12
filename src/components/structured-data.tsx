export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Excuse Boss',
    applicationCategory: 'EntertainmentApplication',
    description:
      'Gerador de desculpas criativas e aleatórias para faltar ao trabalho. Combine razões, níveis de gravidade e contextos para criar a desculpa perfeita.',
    url: 'https://excuse.misael.dev.br',
    image: 'https://excuse.misael.dev.br/excuse.png',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    inLanguage: 'pt-BR',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    featureList: [
      'Geração aleatória de desculpas',
      'Sistema de cartas interativas com animações',
      'Compartilhamento direto no WhatsApp',
      'Interface responsiva para mobile e desktop',
      'Modo claro e escuro',
      '8.000 combinações únicas de desculpas',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
