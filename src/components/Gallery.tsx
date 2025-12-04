import { useState } from "react";

const galleryImages = [
  { emoji: "🍔", label: "Smash Burger" },
  { emoji: "🍟", label: "Batata Frita" },
  { emoji: "🥤", label: "Milk Shake" },
  { emoji: "🧀", label: "Cheese Burger" },
  { emoji: "🥓", label: "Bacon Burger" },
  { emoji: "🌶️", label: "Spicy Burger" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            GALERIA
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça nossas delícias
          </p>
        </div>

        {/* Main Display */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-card rounded-full flex items-center justify-center shadow-glow border-4 border-primary/30">
            <span className="text-[120px] md:text-[160px] animate-float">
              {galleryImages[activeIndex].emoji}
            </span>
            <div className="absolute -bottom-4 bg-primary text-primary-foreground font-display text-xl px-6 py-2 rounded-full">
              {galleryImages[activeIndex].label}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 flex-wrap">
          {galleryImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-4xl md:text-5xl transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary/20 ring-2 ring-primary scale-110"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {item.emoji}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
