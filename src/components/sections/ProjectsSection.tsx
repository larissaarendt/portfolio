import React from "react";
import { Building2, Home, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabalhos Desenvolvidos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos principais projetos desenvolvidos durante minha
            formação acadêmica, demonstrando evolução técnica e criativa.
          </p>
        </div>

        {categories.map((category, categoryIndex) => {
          const CategoryIcon = getCategoryIcon(category);
          const categoryProjects = projects.filter(
            (p) => p.category === category
          );

          return (
            <div
              key={category}
              className={categoryIndex < categories.length - 1 ? "mb-12" : ""}
            >
              <div className="flex items-center space-x-3 mb-6">
                <CategoryIcon className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold">{category}</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
