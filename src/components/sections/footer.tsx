
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Inovação Telecom
            </h3>
            <p className="text-sm">
              Soluções inovadoras em telecomunicações para sua empresa.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
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
                <a href="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-white transition-colors">
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
