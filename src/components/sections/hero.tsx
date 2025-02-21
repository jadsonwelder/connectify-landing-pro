
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-down">
            Soluções em Telecomunicações
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-down" style={{ animationDelay: "200ms" }}>
            Conectando você ao futuro com soluções inovadoras
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 animate-fade-down" style={{ animationDelay: "400ms" }}>
            Na Inovação Telecom, oferecemos uma gama completa de serviços para atender tanto o mercado corporativo quanto eventos, garantindo performance, segurança e inovação em cada solução.
          </p>
          
          <div className="space-x-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Button size="lg" variant="default">
              Solicite uma Consultoria Gratuita
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
