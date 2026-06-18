import { Link } from "wouter";
import { brand } from "@/lib/store";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-4">
              Atelier
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              {brand.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><a href="/#novidades" className="hover:text-white transition-colors">Novidades</a></li>
              <li><a href="/#categorias" className="hover:text-white transition-colors">Categorias</a></li>
              <li><a href="/#colecao" className="hover:text-white transition-colors">Coleção</a></li>
              <li><a href="/#lookbook" className="hover:text-white transition-colors">Lookbook</a></li>
              <li><a href="/#sobre" className="hover:text-white transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Atendimento</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Endereço</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>{brand.address}</li>
              <li className="pt-2">{brand.hours.split(' | ')[0]}</li>
              <li>{brand.hours.split(' | ')[1]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com cuidado no Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
