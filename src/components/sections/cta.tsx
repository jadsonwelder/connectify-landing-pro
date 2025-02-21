
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-primary">
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
            className="bg-white text-primary hover:bg-white/90 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Agende uma Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
}
