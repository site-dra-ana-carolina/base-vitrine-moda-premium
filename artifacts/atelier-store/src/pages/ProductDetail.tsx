import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getProductBySlug, formatPrice, buildWhatsAppLink, products } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

// Images
import prodVestido from "@assets/images/prod-vestido.png";
import prodCamisa from "@assets/images/prod-camisa.png";
import prodCalca from "@assets/images/prod-calca.png";

const productImages: Record<string, string> = {
  "vestido-midi-acetinado": prodVestido,
  "camisa-oversized-off-white": prodCamisa,
  "calca-wide-leg-alfaiataria": prodCalca,
  "blazer-estruturado-premium": prodVestido, 
  "top-canelado-minimal": prodCamisa, 
  "saia-curta-alfaiataria": prodCalca, 
  "bolsa-mini-couro": prodVestido, 
  "look-urbano-completo": prodCamisa, 
};

export default function ProductDetail() {
  const [, params] = useRoute("/produto/:slug");
  const slug = params?.slug;
  const product = slug ? getProductBySlug(slug) : null;
  
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Produto não encontrado</h1>
        <Link href="/" className="underline text-accent">Voltar para a loja</Link>
      </div>
    );
  }

  const imageSrc = productImages[product.slug] || prodVestido;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Light header specifically for product page */}
      <div className="border-b border-border bg-background sticky top-0 z-40 h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <div className="font-serif text-xl tracking-widest uppercase font-semibold cursor-pointer text-primary">
              Atelier
            </div>
          </Link>
          <Link href="/#colecao" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <ChevronLeft size={16} /> Voltar à coleção
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-muted w-full overflow-hidden">
              <img 
                src={imageSrc} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Gallery thumbnails - using same image for mockup */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`aspect-[3/4] bg-muted cursor-pointer border-2 ${i === 1 ? 'border-primary' : 'border-transparent'}`}>
                  <img src={imageSrc} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
              {product.category}
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="text-2xl mb-8">
              {formatPrice(product.price)}
            </div>
            
            <div className="prose prose-sm text-muted-foreground mb-8">
              <p>{product.description}</p>
              {product.stylingTip && (
                <p className="mt-4 italic text-foreground">
                  <strong className="not-italic font-medium">Dica de look:</strong> {product.stylingTip}
                </p>
              )}
            </div>

            {/* Selectors */}
            <div className="space-y-6 mb-10">
              {/* Color */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium uppercase tracking-wider">Cor</span>
                  <span className="text-sm text-muted-foreground">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 w-full border text-sm transition-colors ${
                        selectedColor === color 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-border bg-transparent hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium uppercase tracking-wider">Tamanho</span>
                  <span className="text-sm underline text-muted-foreground cursor-pointer hover:text-primary">Guia de medidas</span>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 min-w-[3rem] px-4 border text-sm transition-colors ${
                        selectedSize === size 
                          ? 'border-primary bg-primary text-primary-foreground' 
                          : 'border-border bg-transparent hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button 
              asChild 
              size="lg" 
              className="w-full rounded-none h-14 text-base uppercase tracking-wider mb-4"
            >
              <a 
                href={buildWhatsAppLink(product.name, selectedColor, selectedSize)} 
                target="_blank" 
                rel="noreferrer"
              >
                Comprar pelo WhatsApp
              </a>
            </Button>
            
            <div className="text-center text-sm text-muted-foreground flex justify-center items-center gap-2">
              <span>Atendimento personalizado</span>
              <span>•</span>
              <span>Envio a combinar</span>
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
