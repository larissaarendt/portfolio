import React, { useState, useEffect } from "react";
import {
  Building2,
  Calendar,
  GraduationCap,
  Award,
  MapPin,
  Heart,
  Lightbulb,
  Target,
  Users,
  User,
  Palette,
  Ruler,
  TreePine,
  Download,
  Mail,
  Linkedin,
  Github,
  Globe,
  FileText,
  Construction,
  BookCheck,
  Landmark,
  LampFloor,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("sobre");
  const [isVisible, setIsVisible] = useState(false);
  const Idade = new Date().getFullYear() - new Date("2003-06-16").getFullYear();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "AutoCAD", level: 95, icon: Ruler },
    { name: "SketchUp", level: 80, icon: Building2 },
    { name: "Revit", level: 50, icon: Building2 },
    { name: "Render", level: 50, icon: Building2 },
    { name: "Canva", level: 90, icon: Palette },
    { name: "QGIS / ArcGIS", level: 70, icon: MapPin },
    { name: "Google Earth Pro", level: 90, icon: Globe },
    { name: "Pacote Office", level: 90, icon: FileText },
  ];

  const interests = [
    {
      name: "Arquitetura residencial, comercial e institucional",
      icon: Landmark,
      color: "text-purple-500",
    },
    {
      name: "Projeto de interiores e corportativos",
      icon: LampFloor,
      color: "text-pink-500",
    },
    { name: "Gestão de obras", icon: Construction, color: "text-red-500" },
    { name: "Planejamento Urbano", icon: Building2, color: "text-blue-500" },
    {
      name: "Aprovação de projetos",
      icon: BookCheck,
      color: "text-green-500",
    },
    { name: "Licenciamento", icon: Award, color: "text-amber-500" },
  ];

  const achievements = [
    { title: "Projetos Desenvolvidos", value: "30+", icon: Building2 },
    { title: "Semestres Concluídos", value: "10", icon: GraduationCap },
    { title: "Horas de Estágio", value: "400+", icon: Calendar },
    { title: "Certificações", value: "5", icon: Award },
  ];

  const tabs = [
    { id: "sobre", label: "Sobre", icon: Users },
    { id: "habilidades", label: "Habilidades", icon: Lightbulb },
    { id: "objetivos", label: "Objetivos", icon: Target },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Conheça Mais
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-muted/30">
              <div
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: `url("/images/eu.jpeg")` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold text-center">
                    Estudante de Arquitetura
                  </h3>
                  <p className="text-white/80 text-center text-sm">
                    Formanda 2025
                  </p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm">Valinhos, SP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <span className="text-sm">Arquitetura e Urbanismo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-sm">10º Semestre - 2025</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.print()}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      CV
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href =
                          "mailto:larissaarendt.rodrigues@gmail.com";
                      }}
                      variant="outline"
                      size="sm"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/larissa-arendt/",
                          "_blank"
                        )
                      }
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className={`p-4 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 ${
                    isVisible
                      ? "animate-in slide-in-from-bottom-4"
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <achievement.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.title}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  onClick={() => setActiveTab(tab.id)}
                  className="transition-all duration-300"
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "sobre" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <Card className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <User className="w-6 h-6 text-accent" />
                      Sobre
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Tenho {Idade} anos e sou estudante de Arquitetura e
                      Urbanismo. Iniciei minha trajetória profissional no setor
                      de móveis corporativos, onde aprendi sobre funcionalidade
                      e organização dos espaços. Em 2023, ingressei como
                      estagiária na Prefeitura Municipal de Valinhos, onde tive
                      meu primeiro contato com estudos urbanos e projetos de
                      sinalização viária. Hoje, atuo em uma empresa
                      especializada em estudos de impacto e licenciamento,
                      vivenciando o outro lado: o de avaliar, redigir e conduzir
                      processos técnicos.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Meu trabalho é focado em licenciamento ambiental, estudos
                      de impacto urbano e acompanhamento ambiental de obras,
                      sempre buscando soluções que conciliem desenvolvimento,
                      responsabilidade socioambiental e viabilidade legal.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Acredito que o urbanismo tem o poder de estruturar cidades
                      mais justas e funcionais, onde cada estudo e projeto
                      contribui para melhorar a relação entre espaço construído,
                      meio ambiente e qualidade de vida da população. O que me
                      move é justamente essa capacidade do urbanismo de
                      transformar territórios e, através deles, transformar
                      vidas.
                    </p>
                  </Card>

                  <Card className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                    <h3 className="text-xl font-bold mb-4">
                      Áreas de Interesse
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                        <div
                          key={interest.name}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300"
                        >
                          <interest.icon
                            className={`w-5 h-5 ${interest.color}`}
                          />
                          <span className="text-sm font-medium">
                            {interest.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === "habilidades" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <Card className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-accent" />
                      Habilidades Técnicas
                    </h3>
                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <skill.icon className="w-4 h-4 text-accent" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <Badge variant="secondary">{skill.level}%</Badge>
                          </div>
                          <Progress
                            value={isVisible ? skill.level : 0}
                            className="h-2"
                            style={{
                              transition: `all 1s ease-in-out ${index * 200}ms`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                    <h3 className="text-xl font-bold mb-4">Competências</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Desenho Técnico",
                        "Modelagem 3D",
                        "Renderização",
                        "Planejamento Urbano",
                        "Gestão de Projetos",
                        "Estudos Urbanos",
                        "Licenciamento Ambiental",
                        "Comunicação Institucional",
                        "Trabalho em Equipe",
                        "Acompanhamento de Obras",
                        "Diagnóstico Urbanístico",
                        "Projeto de Interiores",
                      ].map((competencia) => (
                        <Badge
                          key={competencia}
                          variant="outline"
                          className="justify-center py-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        >
                          {competencia}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === "objetivos" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <Card className="p-6 border-0 bg-gradient-to-br from-background to-muted/20">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Target className="w-6 h-6 text-accent" />
                      Objetivos Profissionais
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            Curto Prazo (2025-2026)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Concluir a graduação em Arquitetura e Urbanismo,
                            aprofundar experiência em planejamento e estudos
                            urbanos, licenciamento, aprovação de projetos, e
                            desenvolver um TCC com excelência.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            Médio Prazo (2026-2028)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Obter registro no CAU, especializar-me em estudos
                            urbanos.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold mb-1">
                            Longo Prazo (2028+)
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Atuar em posição de destaque em empresas ou órgãos
                            públicos na área de urbanismo, contribuir para
                            políticas públicas urbanas, implementar projetos que
                            integrem desenvolvimento, sustentabilidade e
                            qualidade de vida, e mentorar novos profissionais na
                            área.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-0 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                    <h3 className="text-xl font-bold mb-4 text-accent">
                      Visão Pessoal
                    </h3>
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      "Acredito que a arquitetura deve ser uma força positiva no
                      mundo, criando espaços que não apenas atendam às
                      necessidades humanas, mas também respeitem e preservem
                      nosso planeta para as futuras gerações."
                    </blockquote>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
          <h3 className="text-2xl font-bold mb-4">Vamos Conversar?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estou sempre interessada em conhecer novos projetos e oportunidades
            de aprendizado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => {
                window.location.href =
                  "mailto:larissaarendt.rodrigues@gmail.com";
              }}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Entrar em Contato
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.print()}>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
