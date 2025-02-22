
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  const features = [
    "Internet rápida e estável",
    "Planos para todos os perfis",
    "Suporte técnico eficiente",
    "Conexão que cabe no seu orçamento"
  ];

  const slides = [
    {
      title: "Conexão de Alta Performance",
      description: "Internet fibra ótica com velocidade e estabilidade",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop"
    },
    {
      title: "Link de Internet Temporário",
      description: "Soluções de conectividade para eventos com diversas opções: Rádio, Fibra Ótica, Mochilink 5G e Starlink",
      image: "https://images.unsplash.com/photo-1521919419609-24374583f83b?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Serviço de Backup em Nuvem",
      description: "Proteção de dados em dois Data Centers nacionais",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop"
    },
    {
      title: "Locação de Equipamentos",
      description: "Tablets, notebooks, impressoras, painéis LED e geradores para seus eventos",
      image: "https://images.unsplash.com/photo-1595750462190-da85c3e1c0a4?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Soluções Empresariais",
      description: "Infraestrutura completa para sua empresa",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1740&auto=format&fit=crop"
    },
    {
      title: "Suporte Especializado",
      description: "Equipe técnica disponível 24/7",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1740&auto=format&fit=crop"
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947094934', '_blank');
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Carrossel */}
          <div className="mb-16">
            <Carousel 
              opts={{
                align: "start",
                loop: true
              }}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-lg text-gray-200">{slide.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
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
