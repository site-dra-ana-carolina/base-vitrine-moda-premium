import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, ChevronLeft, Instagram, MapPin, Menu, MessageCircle, Ruler, X } from 'lucide-react'
import { BRL, brand, categories, getProduct, products, whatsappLink, type Product } from './data/store'

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash.replace(/^#\/?/, '')
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    ['Coleção', '#colecao'],
    ['Categorias', '#categorias'],
    ['Lookbook', '#lookbook'],
    ['Atendimento', '#atendimento'],
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="icon-button mobile-only" aria-label="Abrir menu" onClick={() => setOpen(true)}>
        <Menu />
      </button>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {nav.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>

      <a className="brand-mark" href="#top" aria-label="Página inicial">
        <span>{brand.name}</span>
        <small>{brand.tagline}</small>
      </a>

      <a className="whatsapp-pill" href={whatsappLink('Olá! Vim pelo site e gostaria de atendimento.')} target="_blank" rel="noreferrer">
        <MessageCircle />
        <span>WhatsApp</span>
      </a>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-top">
          <strong>{brand.name}</strong>
          <button className="icon-button" aria-label="Fechar menu" onClick={() => setOpen(false)}><X /></button>
        </div>
        {nav.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="mobile-cta" href={whatsappLink('Olá! Quero ver as novidades da loja.')} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1800&q=90" alt="Editorial de moda premium" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Nova coleção</p>
        <h1>Moda que veste presença</h1>
        <p className="hero-copy">Peças selecionadas para criar looks sofisticados, versáteis e atemporais.</p>
        <div className="hero-actions">
          <a className="button dark" href="#colecao">Ver coleção <ArrowRight /></a>
          <a className="button ghost" href={whatsappLink('Olá! Quero conhecer a coleção da Atelier Store.')} target="_blank" rel="noreferrer">
            <MessageCircle /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function CategorySection() {
  return (
    <section id="categorias" className="section light-section">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Escolha por estilo</p>
          <h2>Categorias da loja</h2>
        </div>
        <p>Uma estrutura pronta para vitrines de moda: coleção, provador, categorias fortes e compra assistida.</p>
      </div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <a key={category.slug} className={`category-card ${index === 0 ? 'featured' : ''}`} href="#colecao">
            <img src={category.image} alt={category.name} />
            <div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span>Ver peças</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <a className="product-image" href={`#produto/${product.slug}`}>
        <img src={product.image} alt={product.name} />
        <span>{product.category}</span>
      </a>
      <div className="product-info">
        <h3><a href={`#produto/${product.slug}`}>{product.name}</a></h3>
        <p>{BRL.format(product.price)}</p>
      </div>
      <a className="product-link" href={`#produto/${product.slug}`}>Ver peça</a>
    </article>
  )
}

function ProductGrid() {
  return (
    <section id="colecao" className="section warm-section">
      <div className="section-heading">
        <p className="eyebrow">Curadoria premium</p>
        <h2>Coleção em destaque</h2>
        <p>Peças escolhidas a dedo para compor produções modernas, vender melhor pelo WhatsApp e valorizar a vitrine da loja.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
  )
}

function Lookbook() {
  return (
    <section id="lookbook" className="lookbook-section">
      <div className="lookbook-copy">
        <p className="eyebrow">Lookbook</p>
        <h2>Campanha pronta para vender</h2>
        <p>Peças essenciais, cortes precisos e combinações pensadas para vestir presença em todos os momentos.</p>
        <a className="button light" href="#colecao">Explorar looks <ArrowRight /></a>
      </div>
      <div className="lookbook-image">
        <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1500&q=90" alt="Lookbook da temporada" />
      </div>
    </section>
  )
}

function ServiceSection() {
  return (
    <section id="atendimento" className="section service-section">
      <div className="service-card">
        <div>
          <p className="eyebrow">Compra assistida</p>
          <h2>Escolha a peça e finalize pelo WhatsApp</h2>
          <p>O cliente seleciona cor, tamanho e peça. A loja confirma disponibilidade, orienta medidas e fecha o atendimento direto no WhatsApp.</p>
        </div>
        <div className="service-actions">
          <a className="button dark" href={whatsappLink('Olá! Quero atendimento para escolher uma peça.')} target="_blank" rel="noreferrer">
            <MessageCircle /> Chamar no WhatsApp
          </a>
          <a className="button outline" href={brand.instagram} target="_blank" rel="noreferrer">
            <Instagram /> Ver Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h2>{brand.name}</h2>
        <p>{brand.tagline}. Base de vitrine premium para lojas de moda, boutiques e marcas que querem vender melhor.</p>
      </div>
      <div>
        <h3>Contato</h3>
        <p><MapPin /> {brand.address}</p>
        <p><Instagram /> {brand.instagramHandle}</p>
      </div>
      <div>
        <h3>Navegação</h3>
        <a href="#colecao">Coleção</a>
        <a href="#categorias">Categorias</a>
        <a href="#lookbook">Lookbook</a>
      </div>
    </footer>
  )
}

function ProductPage({ product }: { product: Product }) {
  const [active, setActive] = useState(product.gallery[0] ?? product.image)
  const [color, setColor] = useState(product.colors[0]?.name ?? '')
  const [size, setSize] = useState(product.sizes[0] ?? '')

  const message = `Olá! Tenho interesse na peça ${product.name}. Cor: ${color}. Tamanho: ${size}. Pode confirmar disponibilidade?`

  return (
    <>
      <SiteHeader />
      <main className="product-page">
        <a className="back-link" href="#colecao"><ChevronLeft /> Voltar à coleção</a>
        <section className="product-detail">
          <div className="detail-gallery">
            <div className="main-image"><img src={active} alt={product.name} /></div>
            <div className="thumbs">
              {product.gallery.map((image) => (
                <button key={image} className={active === image ? 'active' : ''} onClick={() => setActive(image)}>
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="detail-info">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="detail-price">{BRL.format(product.price)}</p>
            <p className="detail-description">{product.description}</p>
            <div className="styling-tip"><strong>Dica de look:</strong> {product.stylingTip}</div>

            <div className="selector-block">
              <div className="selector-top"><span>Cor</span><small>{color}</small></div>
              <div className="color-options">
                {product.colors.map((item) => (
                  <button key={item.name} className={color === item.name ? 'active' : ''} style={{ backgroundColor: item.hex }} aria-label={item.name} onClick={() => setColor(item.name)} />
                ))}
              </div>
            </div>

            <div className="selector-block">
              <div className="selector-top"><span>Tamanho</span><small><Ruler /> Consulte medidas</small></div>
              <div className="size-options">
                {product.sizes.map((item) => (
                  <button key={item} className={size === item ? 'active' : ''} onClick={() => setSize(item)}>{item}</button>
                ))}
              </div>
            </div>

            <a className="button dark full" href={whatsappLink(message)} target="_blank" rel="noreferrer">
              <MessageCircle /> Comprar pelo WhatsApp
            </a>
            <p className="assist-copy">Atendimento personalizado • Envio a combinar</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CategorySection />
        <ProductGrid />
        <Lookbook />
        <ServiceSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const route = useHashRoute()
  const product = useMemo(() => {
    if (!route.startsWith('produto/')) return null
    return getProduct(route.replace('produto/', '')) ?? null
  }, [route])

  if (product) return <ProductPage product={product} />
  return <Home />
}
