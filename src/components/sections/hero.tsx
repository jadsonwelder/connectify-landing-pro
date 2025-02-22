
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const features = [
    "Internet rápida e estável",
    "Planos para todos os perfis",
    "Suporte técnico eficiente",
    "Conexão que cabe no seu orçamento"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1/2 bg-gradient-to-b from-neon-blue/10 to-transparent" />
      </div>
      
      {/* Curved blue line */}
      <div className="absolute w-full h-32 top-1/2 -translate-y-1/2">
        <div className="absolute w-[200%] h-full bg-primary/20 rounded-[100%] blur-xl transform -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/ea88266a-a307-4b60-a9bb-3ac9d02bd13a.png" 
              alt="Inovação Telecom" 
              className="w-48 mx-auto mb-8"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Por que escolher a{" "}
            <span className="text-primary">Inovação Telecom?</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-white"
              >
                <ChevronRight className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              Descubra o que nos torna únicos.{" "}
              <span className="text-primary font-bold">
                Conecte-se agora!
              </span>
            </h2>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
