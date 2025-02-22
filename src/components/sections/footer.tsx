
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/3b92ab79-ab6a-47ca-a790-be2f9f8a8305.png" 
                alt="Inovação Telecom" 
                className="h-8"
              />
            </div>
            <p className="text-sm">
              Soluções inovadoras em telecomunicações para sua empresa.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>Rua da Inovação, 123</li>
              <li>São Paulo - SP</li>
              <li>contato@inovacaotelecom.com.br</li>
              <li>(11) 9999-9999</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 Inovação Telecom. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
