import React, { useState } from "react";
import { Menu, X, FileText, User, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">
                LA
              </span>
            </div>
            <span className="font-semibold text-foreground">
              Larissa Arendt
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("studies")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Estudos
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center space-x-3 w-full px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
              >
                <FileText className="w-4 h-4" />
                <span>Início</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center space-x-3 w-full px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
              >
                <User className="w-4 h-4" />
                <span>Sobre</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center space-x-3 w-full px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
              >
                <Briefcase className="w-4 h-4" />
                <span>Projetos</span>
              </button>
              <button
                onClick={() => scrollToSection("studies")}
                className="flex items-center space-x-3 w-full px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
              >
                <FileText className="w-4 h-4" />
                <span>Estudos</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center space-x-3 w-full px-4 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
              >
                <Mail className="w-4 h-4" />
                <span>Contato</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
