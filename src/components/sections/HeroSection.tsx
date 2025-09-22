import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-library.jpg";
import { Printer } from "lucide-react";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-[#574c54f2] absolute inset-0 bg-gradient-to-r from-taupe/80 to-taupe/40"></div>
      </div>

      <div className="relative z-10 text-center text-isabelline px-6">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-isabelline/20 text-isabelline border-isabelline/30"
          >
            Portfólio de Arquitetura
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Larissa Arendt
            <br />
            <span className="text-melon">Lombardi Rodrigues</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-isabelline/90 max-w-2xl mx-auto leading-relaxed">
            Formanda em Arquitetura e Urbanismo, dedicada a criar espaços que
            inspiram e transformam vidas através do design consciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Projetos
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.print()}
              className="bg-transparent border-isabelline/30 text-isabelline hover:bg-isabelline/10"
            >
              <Printer className="w-4 h-4 mr-2" />
              Imprimir Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
