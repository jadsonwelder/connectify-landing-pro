export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor de TI",
      company: "Tech Solutions",
      content: "A Inovação Telecom transformou completamente nossa infraestrutura de rede. O suporte e a qualidade do serviço são excepcionais.",
    },
    {
      name: "Ana Paula",
      role: "Gerente de Eventos",
      company: "EventPro",
      content: "Realizamos diversos eventos corporativos e sempre contamos com os serviços da Inovação Telecom. A conectividade é sempre perfeita.",
    },
    {
      name: "Roberto Santos",
      role: "CEO",
      company: "DataCloud",
      content: "As soluções de backup em nuvem nos proporcionaram mais segurança e tranquilidade. Recomendo fortemente.",
    },
  ];

  return (
    <section id="depoimentos" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${"/lovable-uploads/9f241114-f30c-4d98-a080-d1ae1a1ea87e.png"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)',
            animation: 'wave 8s infinite linear'
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          O Que Nossos Clientes Dizem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
