
import { Wifi, Globe, Cloud, Database, Server, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Conectividade e Internet",
    items: [
      {
        title: "Internet Banda Larga Fibra",
        description: "Planos de internet com velocidades de 200Mbps, 500Mbps e 1Gbps, ideais para residências e empresas que buscam alta performance.",
        icon: Wifi,
      },
      {
        title: "Link de Internet Temporário",
        description: "Soluções de conectividade para eventos de qualquer porte, com diversas opções tecnológicas (incluindo Link´s de Rádio, Fibra Ótica, Mochilink 5G e Starlink) para garantir uma transmissão estável e de alta qualidade.",
        icon: Globe,
      },
      {
        title: "Link de Internet Recorrente",
        description: "Projetado para demandas corporativas, com dimensionamento de banda, rede Wi-Fi otimizada e relatórios de consumo.",
        icon: Server,
      },
    ],
  },
  {
    category: "Infraestrutura e Equipamentos para Eventos",
    items: [
      {
        title: "Redes Wi-Fi Indoor e Outdoor",
        description: "Dimensionamento e configuração de redes Wi-Fi sob medida para escritórios, parques, centros de distribuição, hospitais, escolas e eventos.",
        icon: Building,
      },
      {
        title: "Locação de Equipamentos",
        description: "Solução econômica para eventos e empresas, com locação de equipamentos por valor mensal ou custo único.",
        icon: Database,
      },
    ],
  },
  {
    category: "Soluções Corporativas",
    items: [
      {
        title: "Serviço de Backup em Nuvem",
        description: "Novo produto para proteger os dados da sua empresa, hospedado em dois Data Centers nacionais.",
        icon: Cloud,
      },
      {
        title: "Consultoria para Provedores",
        description: "Serviços de valuation, due diligence e intermediação para venda ou compra de blocos de IPs.",
        icon: Users,
      },
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600">
            Soluções completas em conectividade e infraestrutura para sua empresa
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, idx) => (
            <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <h3 className="text-2xl font-bold mb-8 text-primary">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, serviceIdx) => (
                  <div
                    key={serviceIdx}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" className="w-full">
                      Saiba mais
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
