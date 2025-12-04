import { Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-primary" />
            <span className="font-display text-3xl">
              <span className="text-foreground">BURGUER</span>
              <span className="text-primary">PLUS</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-muted-foreground">
            <a href="#builder" className="hover:text-primary transition-colors">Monte seu Burger</a>
            <a href="#combos" className="hover:text-primary transition-colors">Combos</a>
            <a href="#promotions" className="hover:text-primary transition-colors">Promoções</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Galeria</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 Burguer Plus. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
