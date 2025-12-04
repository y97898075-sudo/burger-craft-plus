import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function Hero() {
  const scrollToBuilder = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-8xl opacity-20 animate-float">🍔</div>
      <div className="absolute bottom-32 right-16 text-6xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🍟</div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: "0.5s" }}>🧀</div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Flame className="w-4 h-4 text-primary animate-flame" />
            <span className="text-sm font-medium text-primary">O melhor burger da cidade</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">BURGUER</span>
            <br />
            <span className="text-gradient-fire">PLUS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Monte seu hambúrguer do jeito que você sempre sonhou. 
            Ingredientes premium, sabor incomparável.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="fire" size="xl" onClick={scrollToBuilder}>
              <Flame className="w-5 h-5" />
              Monte seu Burger
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("combos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Cardápio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">+50</div>
              <div className="text-sm text-muted-foreground">Ingredientes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary">+10k</div>
              <div className="text-sm text-muted-foreground">Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
