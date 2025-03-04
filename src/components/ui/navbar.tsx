
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511947094934', '_blank');
  };

  const buttonClass = "relative group overflow-hidden hover:scale-105 transition-transform duration-300";
  const pulseClass = "after:content-[''] after:absolute after:inset-0 after:rounded-lg after:border-2 after:border-primary/50 after:animate-ping after:opacity-75";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/3b92ab79-ab6a-47ca-a790-be2f9f8a8305.png" 
                alt="Inovação Telecom" 
                className="h-8"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Casos de Sucesso
            </a>
            <a
              href="#cta"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </a>
            <Button 
              variant="default"
              onClick={handleWhatsApp}
              className={`${buttonClass} ${pulseClass}`}
            >
              Falar com Consultor
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-down">
            <a
              href="#servicos"
              className="block py-2 text-gray-300 hover:text-white"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="block py-2 text-gray-300 hover:text-white"
            >
              Casos de Sucesso
            </a>
            <a
              href="#cta"
              className="block py-2 text-gray-300 hover:text-white"
            >
              Contato
            </a>
            <Button 
              variant="default" 
              onClick={handleWhatsApp}
              className={`w-full mt-4 ${buttonClass} ${pulseClass}`}
            >
              Falar com Consultor
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
