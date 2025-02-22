
import { Button } from "@/components/ui/button";

export function CTA() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947094934', '_blank');
  };

  const buttonClass = "relative group overflow-hidden hover:scale-105 transition-transform duration-300";
  const pulseClass = "after:content-[''] after:absolute after:inset-0 after:rounded-lg after:border-2 after:border-primary/50 after:animate-ping after:opacity-75";

  return (
    <section id="cta" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-down">
            Pronto para levar sua conectividade a outro nível?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-down" style={{ animationDelay: "200ms" }}>
            Entre em contato e descubra como podemos transformar a sua infraestrutura!
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsApp}
            className={`bg-white text-primary hover:bg-white/90 animate-fade-up ${buttonClass} ${pulseClass}`}
            style={{ animationDelay: "400ms" }}
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>
  );
}
