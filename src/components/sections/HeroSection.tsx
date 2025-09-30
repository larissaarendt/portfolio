import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-library.jpg";
import { Printer } from "lucide-react";

// Componente de animação arquitetônica
const ArchitecturalAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="architectural-animation">
        {/* Large background rectangles */}
        <div className="floating-shape rect-1 bg-bone/10"></div>
        <div className="floating-shape rect-2 bg-isabelline/15"></div>
        <div className="floating-shape rect-3 bg-wenge/8"></div>

        {/* Medium triangular shapes */}
        <div className="floating-triangle tri-1 border-bone/20"></div>
        <div className="floating-triangle tri-2 border-isabelline/25"></div>
        <div className="floating-triangle tri-3 border-wenge/15"></div>

        {/* Small accent lines */}
        <div className="floating-line line-1 bg-bone/30"></div>
        <div className="floating-line line-2 bg-isabelline/40"></div>
        <div className="floating-line line-3 bg-wenge/20"></div>
        <div className="floating-line line-4 bg-onyx/10"></div>

        {/* Circular elements for contrast */}
        <div className="floating-circle circle-1 bg-bone/12"></div>
        <div className="floating-circle circle-2 bg-isabelline/18"></div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="bg-[#574c54f2] absolute inset-0 bg-gradient-to-r from-taupe/80 to-taupe/40"></div>
      </div>

      {/* Animação arquitetônica abstrata */}
      <ArchitecturalAnimation />

      <div className="relative z-10 text-center text-isabelline px-6">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-isabelline/20 text-isabelline border-isabelline/30"
          >
            Portfólio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Larissa Arendt
            <br />
            <span className="text-melon">Lombardi Rodrigues</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-isabelline/90 max-w-2xl mx-auto leading-relaxed">
            Formanda em Arquitetura e Urbanismo, dedicada a criar espaços que
            inspiram e transformam vidas.
          </p>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="text-isabelline"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector("#about");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 animate-bounce"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
