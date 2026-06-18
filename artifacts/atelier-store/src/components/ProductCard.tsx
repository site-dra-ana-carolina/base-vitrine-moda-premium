import { Link } from "wouter";
import { formatPrice } from "@/lib/store";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    category: string;
  };
  imageSrc: string;
}

export function ProductCard({ product, imageSrc }: ProductCardProps) {
  return (
    <div className="group flex flex-col cursor-pointer">
      <Link href={`/produto/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
      </Link>
      
      <div className="flex flex-col flex-1">
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-serif text-lg leading-tight mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="text-sm font-medium mt-auto mb-4">
          {formatPrice(product.price)}
        </div>
        
        <Button 
          asChild 
          variant="outline" 
          className="w-full rounded-none border-border hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Link href={`/produto/${product.slug}`}>
            Ver Peça
          </Link>
        </Button>
      </div>
    </div>
  );
}
