import React from "react";
import { Building2, Home, TreePine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabalhos Desenvolvidos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos principais projetos desenvolvidos durante minha
            formação acadêmica, demonstrando evolução técnica e criativa.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Building2 className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Projetos Arquitetônicos</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.category === "Projeto Arquitetônico")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Home className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Projetos de Interior</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.category === "Projeto de Interior")
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-6">
            <TreePine className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Projetos Urbanos</h3>
          </div>
          <Card className="p-8 text-center">
            <CardContent className="p-0">
              <TreePine className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-medium mb-2">
                Projetos Urbanos em Desenvolvimento
              </h4>
              <p className="text-muted-foreground">
                Colaborando com a prefeitura local no desenvolvimento de
                projetos urbanos que impactem positivamente a comunidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
