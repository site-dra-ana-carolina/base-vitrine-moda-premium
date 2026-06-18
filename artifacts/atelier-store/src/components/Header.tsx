import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Novidades", href: "/#novidades" },
    { label: "Categorias", href: "/#categorias" },
    { label: "Coleção", href: "/#colecao" },
    { label: "Lookbook", href: "/#lookbook" },
    { label: "Sobre", href: "/#sobre" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className={`font-serif text-2xl tracking-widest uppercase font-semibold cursor-pointer ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
            Atelier
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm tracking-wide transition-colors ${
                isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            variant={isScrolled ? "default" : "secondary"}
            className="rounded-none tracking-wide"
          >
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg py-2 border-b border-border text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full rounded-none mt-4">
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
