import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, products, brand } from "@/lib/store";
import { Button } from "@/components/ui/button";

// Images
import heroImg from "@assets/images/hero.png";
import catNovidades from "@assets/images/cat-novidades.png";
import catVestidos from "@assets/images/cat-vestidos.png";
import catBlusas from "@assets/images/cat-blusas.png";
import catCalcas from "@assets/images/cat-calcas.png";
import catAcessorios from "@assets/images/cat-acessorios.png";
import catLooks from "@assets/images/cat-looks.png";

// Product fallbacks
import prodVestido from "@assets/images/prod-vestido.png";
import prodCamisa from "@assets/images/prod-camisa.png";
import prodCalca from "@assets/images/prod-calca.png";

const categoryImages: Record<string, string> = {
  novidades: catNovidades,
  vestidos: catVestidos,
  blusas: catBlusas,
  calcas: catCalcas,
  acessorios: catAcessorios,
  "looks-completos": catLooks,
};

const productImages: Record<string, string> = {
  "vestido-midi-acetinado": prodVestido,
  "camisa-oversized-off-white": prodCamisa,
  "calca-wide-leg-alfaiataria": prodCalca,
  "blazer-estruturado-premium": prodVestido, // fallback since I couldn't generate all 10
  "top-canelado-minimal": prodCamisa, // fallback
  "saia-curta-alfaiataria": prodCalca, // fallback
  "bolsa-mini-couro": prodVestido, // fallback
  "look-urbano-completo": prodCamisa, // fallback
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 2. Hero */}
        <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={heroImg} 
              alt="Nova Coleção" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto flex flex-col items-center mt-16">
            <span className="text-xs uppercase tracking-[0.2em] mb-4 text-white/90">Nova Coleção</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-md">
              Moda que veste<br/><span className="italic">presença</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-white/90 mb-10 max-w-xl drop-shadow-sm">
              Peças selecionadas para criar looks sofisticados, versáteis e atemporais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-none px-8 tracking-wider bg-white text-black hover:bg-white/90">
                <a href="#colecao">Ver Coleção</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 tracking-wider border-white text-white hover:bg-white/10 hover:text-white bg-transparent">
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Categories Grid */}
        <section id="categorias" className="py-24 px-4 md:px-6 container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Descubra</h2>
            <h3 className="font-serif text-4xl">Categorias</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.slug} 
                category={category} 
                imageSrc={categoryImages[category.slug]} 
              />
            ))}
          </div>
        </section>

        {/* 4. Featured Collection */}
        <section id="colecao" className="py-24 px-4 md:px-6 bg-secondary/30">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Shop</h2>
                <h3 className="font-serif text-4xl">Coleção em Destaque</h3>
              </div>
              <a href={`https://wa.me/${brand.whatsapp}`} className="hidden md:inline-flex text-sm uppercase tracking-wider border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                Ver catálogo completo
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
              {products.map(product => (
                <ProductCard 
                  key={product.slug}
                  product={product}
                  imageSrc={productImages[product.slug]}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center md:hidden">
               <a href={`https://wa.me/${brand.whatsapp}`} className="inline-flex text-sm uppercase tracking-wider border-b border-primary pb-1">
                Ver catálogo completo
              </a>
            </div>
          </div>
        </section>

        {/* 5. Lookbook / Editorial */}
        <section id="lookbook" className="py-24 px-4 md:px-6 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Editorial</h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Lookbook da <br/><span className="italic">Temporada</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Combinações pensadas para transformar peças essenciais em produções marcantes. Inspire-se nas nossas curadorias.
              </p>
              <Button asChild size="lg" className="rounded-none tracking-wider uppercase">
                <a href="#colecao">Explorar Looks</a>
              </Button>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] md:aspect-square overflow-hidden bg-muted">
              {/* Fallback to hero image for lookbook if not generated */}
              <img src={heroImg} alt="Lookbook da Temporada" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </section>

        {/* 6 & 7. About & Contact */}
        <section id="sobre" className="py-24 bg-primary text-primary-foreground text-center px-4">
          <div className="container mx-auto max-w-3xl">
            <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              "Uma vitrine feita para marcas que querem vender melhor"
            </h3>
            <p className="text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              O Atelier Store nasceu do desejo de trazer o atendimento personalizado e a exclusividade das boutiques de bairro para o ambiente digital. Cada peça é selecionada com rigor, e nosso atendimento está sempre disponível para ajudar você a encontrar o caimento perfeito.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-white/90 uppercase tracking-wider">
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                  Atendimento via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white/10 bg-transparent uppercase tracking-wider">
                <a href={brand.instagram} target="_blank" rel="noreferrer">
                  Siga no Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
