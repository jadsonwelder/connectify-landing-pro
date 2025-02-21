
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Inovação Telecom
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicos"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </a>
            <Button variant="default">Solicite uma Consultoria</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-down">
            <a
              href="#servicos"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Contato
            </a>
            <Button variant="default" className="w-full mt-4">
              Solicite uma Consultoria
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
