import React from "react";
import { Building2, Calendar, GraduationCap, Award } from "lucide-react";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou uma estudante apaixonada por arquitetura e urbanismo, em
              processo de formação acadêmica. Meu foco está em desenvolver
              projetos que equilibrem funcionalidade, sustentabilidade e beleza
              estética, sempre considerando o impacto social e ambiental das
              construções.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-accent" />
                <span className="text-sm">Arquitetura e Urbanismo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-sm">Formanda 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm">8º Semestre</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-sm">15+ Projetos</span>
              </div>
            </div>
          </div>

          <div
            className="relative h-96 rounded-2xl bg-cover bg-center shadow-elevation"
            style={{ backgroundImage: `url(${portfolioBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-soft">
                  <Building2 className="w-12 h-12 text-accent-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Criando espaços que inspiram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
