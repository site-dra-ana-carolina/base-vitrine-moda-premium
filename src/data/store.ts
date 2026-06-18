export type Brand = {
  name: string
  tagline: string
  whatsapp: string
  instagram: string
  instagramHandle: string
  address: string
  city: string
}

export type Category = {
  slug: string
  name: string
  description: string
  image: string
}

export type Product = {
  slug: string
  name: string
  category: string
  price: number
  image: string
  gallery: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  description: string
  stylingTip: string
}

export const brand: Brand = {
  name: 'Atelier Store',
  tagline: 'Moda premium para todos os dias',
  whatsapp: '5511999999999',
  instagram: 'https://instagram.com/atelierstore',
  instagramHandle: '@atelierstore',
  address: 'Rua da Moda, 100 - São Paulo/SP',
  city: 'São Paulo / SP',
}

export const categories: Category[] = [
  {
    slug: 'novidades',
    name: 'Novidades',
    description: 'As últimas chegadas da temporada.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'vestidos',
    name: 'Vestidos',
    description: 'Peças leves, elegantes e femininas.',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'blusas',
    name: 'Blusas',
    description: 'Camisas, tops e bases sofisticadas.',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'calcas',
    name: 'Calças',
    description: 'Alfaiataria e cortes contemporâneos.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'acessorios',
    name: 'Acessórios',
    description: 'Detalhes que finalizam o look.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'looks-completos',
    name: 'Looks completos',
    description: 'Combinações prontas para vender melhor.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
  },
]

export const products: Product[] = [
  {
    slug: 'vestido-midi-acetinado',
    name: 'Vestido Midi Acetinado',
    category: 'Vestidos',
    price: 289,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Champagne', hex: '#D9BE9E' },
      { name: 'Terracota', hex: '#A8563E' },
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    description: 'Vestido elegante com caimento fluido, brilho sutil e presença imediata.',
    stylingTip: 'Use com sandália minimalista e acessórios dourados para uma produção refinada.',
  },
  {
    slug: 'camisa-oversized-off-white',
    name: 'Camisa Oversized Off White',
    category: 'Blusas',
    price: 219,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Off-white', hex: '#F7F3ED' },
      { name: 'Preto', hex: '#111111' },
      { name: 'Areia', hex: '#C9B79D' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Camisa ampla e sofisticada para looks modernos, versáteis e atemporais.',
    stylingTip: 'Combine com wide leg, short alfaiataria ou saia curta para variar a proposta.',
  },
  {
    slug: 'calca-wide-leg-alfaiataria',
    name: 'Calça Wide Leg Alfaiataria',
    category: 'Calças',
    price: 349,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506629905607-d9f297d71896?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Bege', hex: '#D9C7AD' },
      { name: 'Marrom', hex: '#6B432D' },
    ],
    sizes: ['36', '38', '40', '42', '44'],
    description: 'Calça de alfaiataria com cintura alta, corte alongado e acabamento premium.',
    stylingTip: 'Funciona com camisa aberta, blazer estruturado ou top minimalista.',
  },
  {
    slug: 'blazer-estruturado-premium',
    name: 'Blazer Estruturado Premium',
    category: 'Novidades',
    price: 459,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Areia', hex: '#C9B79D' },
      { name: 'Chocolate', hex: '#4E2F21' },
    ],
    sizes: ['P', 'M', 'G'],
    description: 'Blazer elegante para composições sofisticadas com acabamento de boutique.',
    stylingTip: 'Use fechado como peça principal ou aberto com top canelado.',
  },
  {
    slug: 'top-canelado-minimal',
    name: 'Top Canelado Minimal',
    category: 'Blusas',
    price: 139,
    image: 'https://images.unsplash.com/photo-1520975682031-a1c4f3bd6514?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1520975682031-a1c4f3bd6514?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Branco', hex: '#FFFFFF' },
      { name: 'Marrom', hex: '#6B432D' },
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    description: 'Top versátil para sobreposições, composições casuais e looks de provador.',
    stylingTip: 'Combine com alfaiataria para um contraste elegante.',
  },
  {
    slug: 'saia-curta-alfaiataria',
    name: 'Saia Curta Alfaiataria',
    category: 'Looks completos',
    price: 199,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Bege', hex: '#D9C7AD' },
      { name: 'Caramelo', hex: '#B67636' },
    ],
    sizes: ['PP', 'P', 'M', 'G'],
    description: 'Saia moderna com acabamento refinado e proposta feminina.',
    stylingTip: 'Monte com camisa oversized para equilibrar proporções.',
  },
  {
    slug: 'bolsa-mini-couro',
    name: 'Bolsa Mini Couro',
    category: 'Acessórios',
    price: 299,
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Caramelo', hex: '#B67636' },
      { name: 'Off-white', hex: '#F7F3ED' },
    ],
    sizes: ['Único'],
    description: 'Bolsa compacta para finalizar produções elegantes com presença.',
    stylingTip: 'Use como ponto de destaque em looks neutros.',
  },
  {
    slug: 'look-urbano-completo',
    name: 'Look Urbano Completo',
    category: 'Looks completos',
    price: 599,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85',
    ],
    colors: [
      { name: 'Preto', hex: '#111111' },
      { name: 'Off-white', hex: '#F7F3ED' },
    ],
    sizes: ['P', 'M', 'G'],
    description: 'Combinação pronta com peças versáteis, modernas e fáceis de vender.',
    stylingTip: 'Perfeito para vitrine, provador e campanhas semanais.',
  },
]

export const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function whatsappLink(message: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`
}
