import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { promotions } from "@/data/combos";
import { Copy, Check, Flame, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function Promotions() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast({
      title: "Código copiado!",
      description: `Use o código ${code} no seu pedido`,
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="promotions" className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            PROMOÇÕES
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofertas exclusivas para você
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <Card
              key={promo.id}
              className={`p-6 ${promo.bgColor} border-none overflow-hidden relative animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 text-6xl opacity-20">🔥</div>
              
              <div className="relative z-10">
                {/* Discount Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Flame className="w-5 h-5 text-primary-foreground animate-flame" />
                  <Badge className="bg-primary-foreground/20 text-primary-foreground text-lg font-display px-3 py-1">
                    {promo.discount}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl text-primary-foreground mb-2">
                  {promo.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/80 mb-4">
                  {promo.description}
                </p>

                {/* Validity */}
                <div className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4">
                  <Clock className="w-4 h-4" />
                  {promo.validUntil}
                </div>

                {/* Code */}
                {promo.code && (
                  <button
                    onClick={() => copyCode(promo.code!)}
                    className="flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors rounded-lg px-4 py-2 w-full justify-center"
                  >
                    <span className="font-mono font-bold text-primary-foreground">
                      {promo.code}
                    </span>
                    {copiedCode === promo.code ? (
                      <Check className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <Copy className="w-4 h-4 text-primary-foreground" />
                    )}
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
