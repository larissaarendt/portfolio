import React, { useState } from "react";
import {
  Building2,
  Home,
  TreePine,
  Filter,
  Grid3X3,
  Grid2X2,
  List,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Obter categorias únicas dinamicamente
  const categories = [...new Set(projects.map((p) => p.category))];

  // Mapear ícones para cada categoria
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Projeto Arquitetônico":
        return Building2;
      case "Urbanismo e Estudos Urbanos":
        return TreePine;
      case "Projeto de Interior":
        return Home;
      default:
        return Building2;
    }
  };

  // Filtrar projetos por categoria
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header com animação */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Portfólio de Projetos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Trabalhos Desenvolvidos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos principais projetos desenvolvidos durante minha
            formação acadêmica, demonstrando evolução técnica, criativa e
            conceitual em diferentes escalas e tipologias arquitetônicas.
          </p>
        </div>

        {/* Filtros e controles */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              Todos ({projects.length})
            </Button>
            {categories.map((category) => {
              const CategoryIcon = getCategoryIcon(category);
              const count = projects.filter(
                (p) => p.category === category
              ).length;
              return (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  <CategoryIcon className="w-4 h-4 mr-2" />
                  {category} ({count})
                </Button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-accent mb-1">
              {projects.length}
            </div>
            <div className="text-sm text-muted-foreground">Projetos Totais</div>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-accent mb-1">
              {categories.length}
            </div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-accent mb-1">5</div>
            <div className="text-sm text-muted-foreground">Anos de Estudo</div>
          </Card>
          <Card className="p-4 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-accent mb-1">2025</div>
            <div className="text-sm text-muted-foreground">Formatura</div>
          </Card>
        </div>

        {/* Grid de projetos com animação */}
        <div
          className={`
          transition-all duration-500 ease-in-out
          ${
            viewMode === "grid"
              ? "grid lg:grid-cols-2 xl:grid-cols-2 gap-8"
              : "space-y-6"
          }
        `}
        >
          {filteredProjects.map((project, index) => (
            <div key={`${project.title}-${index}`}>
              <ProjectCard {...project} viewMode={viewMode} index={index} />
            </div>
          ))}
        </div>

        {/* Mensagem quando não há projetos */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Nenhum projeto encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente selecionar uma categoria diferente ou visualizar todos os
              projetos.
            </p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
          <h3 className="text-2xl font-bold mb-4">Interessado em colaborar?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estou sempre aberta a novos desafios e oportunidades de aprendizado.
            Entre em contato para discutirmos projetos futuros.
          </p>
          <Button
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#contact" className="flex items-center gap-2">
              Entrar em Contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
