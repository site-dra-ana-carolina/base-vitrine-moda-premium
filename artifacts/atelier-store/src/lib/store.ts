export const brand = {
  name: "Atelier Store",
  tagline: "Moda premium para todos os dias",
  whatsapp: "5511999999999",
  instagram: "https://instagram.com/atelierstore",
  instagramHandle: "@atelierstore",
  address: "Rua da Moda, 100 - São Paulo/SP",
  hours: "Seg–Sex: 9h–18h | Sáb: 10h–15h",
};

export const categories = [
  { slug: "novidades", name: "Novidades", description: "As peças mais recentes da coleção" },
  { slug: "vestidos", name: "Vestidos", description: "Do casual ao sofisticado" },
  { slug: "blusas", name: "Blusas", description: "Tops e camisas para todo look" },
  { slug: "calcas", name: "Calças", description: "Cortes modernos e atemporais" },
  { slug: "acessorios", name: "Acessórios", description: "Finalização perfeita" },
  { slug: "looks-completos", name: "Looks Completos", description: "Combinações prontas" },
];

export const products = [
  {
    slug: "vestido-midi-acetinado",
    name: "Vestido Midi Acetinado",
    category: "Vestidos",
    categorySlug: "vestidos",
    price: 289,
    colors: ["Preto", "Champagne", "Terracota"],
    sizes: ["PP", "P", "M", "G"],
    description: "Vestido elegante com caimento fluido e tecido acetinado de alta qualidade. Corte midi que valoriza a silhueta com sofisticação.",
    stylingTip: "Use com scarpin nude e bolsa estruturada para um look completo.",
  },
  {
    slug: "camisa-oversized-off-white",
    name: "Camisa Oversized Off White",
    category: "Blusas",
    categorySlug: "blusas",
    price: 219,
    colors: ["Off-white", "Preto", "Areia"],
    sizes: ["P", "M", "G", "GG"],
    description: "Camisa ampla e sofisticada para looks modernos. Caimento oversized com acabamento refinado.",
    stylingTip: "Combine com calça wide leg e sandália de salto para look editorial.",
  },
  {
    slug: "calca-wide-leg-alfaiataria",
    name: "Calça Wide Leg Alfaiataria",
    category: "Calças",
    categorySlug: "calcas",
    price: 349,
    colors: ["Preto", "Bege", "Marrom"],
    sizes: ["36", "38", "40", "42", "44"],
    description: "Calça de alfaiataria com cintura alta e corte alongado. Tecido de alta gramatura com queda perfeita.",
    stylingTip: "Pareie com top canelado ou blazer para look completo e elegante.",
  },
  {
    slug: "blazer-estruturado-premium",
    name: "Blazer Estruturado Premium",
    category: "Novidades",
    categorySlug: "novidades",
    price: 459,
    colors: ["Preto", "Areia", "Chocolate"],
    sizes: ["P", "M", "G"],
    description: "Blazer elegante para composições sofisticadas. Estrutura impecável com forro premium.",
    stylingTip: "Use aberto com top e calça wide leg para look poderoso.",
  },
  {
    slug: "top-canelado-minimal",
    name: "Top Canelado Minimal",
    category: "Blusas",
    categorySlug: "blusas",
    price: 139,
    colors: ["Preto", "Branco", "Marrom"],
    sizes: ["PP", "P", "M", "G"],
    description: "Top versátil para sobreposições e looks casuais. Tecido canelado de alta qualidade.",
    stylingTip: "Combine com calça de alfaiataria e sobretudo para look layering.",
  },
  {
    slug: "saia-curta-alfaiataria",
    name: "Saia Curta Alfaiataria",
    category: "Looks Completos",
    categorySlug: "looks-completos",
    price: 199,
    colors: ["Preto", "Bege", "Caramelo"],
    sizes: ["PP", "P", "M", "G"],
    description: "Saia moderna com acabamento refinado em tecido alfaiataria. Corte reto e elegante.",
    stylingTip: "Use com camisa tucked-in e mule de couro para look sofisticado.",
  },
  {
    slug: "bolsa-mini-couro",
    name: "Bolsa Mini Couro",
    category: "Acessórios",
    categorySlug: "acessorios",
    price: 299,
    colors: ["Preto", "Caramelo", "Off-white"],
    sizes: ["Único"],
    description: "Bolsa compacta para finalizar produções elegantes. Couro legítimo com ferragens douradas.",
    stylingTip: "Ideal para ocasiões especiais. Combina com qualquer look da coleção.",
  },
  {
    slug: "look-urbano-completo",
    name: "Look Urbano Completo",
    category: "Looks Completos",
    categorySlug: "looks-completos",
    price: 599,
    colors: ["Preto", "Off-white"],
    sizes: ["P", "M", "G"],
    description: "Combinação pronta com peças versáteis e modernas. Kit completo com peças curadas para um look inteiro.",
    stylingTip: "Já pensado para ser usado junto — peças que se complementam perfeitamente.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export function buildWhatsAppLink(productName: string, color: string, size: string): string {
  const msg = `Olá! Tenho interesse na peça ${productName}. Cor: ${color}. Tamanho: ${size}. Pode confirmar disponibilidade?`;
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;
}