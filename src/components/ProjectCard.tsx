import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, ExternalLink, Heart, Share2 } from "lucide-react";
import ProjectGallery from "./ProjectGallery";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  description_complete?: string[];
  year: string;
  images?: string[];
  featured?: boolean;
  viewMode?: "grid" | "list";
  index?: number;
  highlights?: string[];
}

const ProjectCard = ({
  title,
  category,
  description,
  description_complete,
  year,
  images = [],
  featured = false,
  viewMode = "grid",
  index = 0,
  highlights = [],
}: ProjectCardProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      });
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (viewMode === "list") {
    return (
      <Card className="group overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-r from-background to-muted/30">
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {/* Galeria compacta */}
          <div className="relative">
            <ProjectGallery
              featured={false}
              images={images}
              title={title}
              forceOpen={galleryOpen}
              description_complete={description_complete}
              onCloseGallery={() => setGalleryOpen(false)}
            />
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="backdrop-blur-sm">
                {category}
              </Badge>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {year}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                className="group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                onClick={() => setGalleryOpen(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background to-muted/20 hover:-translate-y-2 ${
        featured ? "" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${featured ? "" : ""}`}>
        {/* Galeria de imagens */}
        <div className={`relative ${featured ? "" : ""}`}>
          <ProjectGallery
            featured={featured}
            images={images}
            title={title}
            forceOpen={galleryOpen}
            onCloseGallery={() => setGalleryOpen(false)}
            onRequestOpenGallery={() => setGalleryOpen(true)}
            description_complete={description_complete}
          />

          {/* Overlay com informações */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className=" backdrop-blur-sm">
                  {category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Indicador de imagens */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {images.length} fotos
              </div>
            </div>
          )}

          {/* Hover overlay com botão Ver Galeria */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <button
              type="button"
              className="bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(true);
              }}
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Ver Galeria
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <CardContent className={`p-6`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {year}
            </div>
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          </div>

          <h3
            className={`font-bold mb-4 group-hover:text-accent transition-colors text-3xl`}
          >
            {title}
          </h3>

          <p className={`text-muted-foreground leading-relaxed mb-6 text-lg`}>
            {description}
          </p>

          {/* Destaques do projeto (dinâmico) */}
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-dashed border-muted-foreground/30">
            <h4 className="font-semibold mb-3 text-sm text-accent">
              Destaques do Projeto:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {(highlights && highlights.length > 0
                ? highlights
                : [
                    "Integração com o entorno urbano e natural",
                    "Soluções inovadoras e funcionais",
                    "Valorização da experiência do usuário",
                    "Compromisso com sustentabilidade e acessibilidade",
                  ]
              ).map((item, idx) => (
                <div className="flex items-center gap-2" key={idx}>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Para projetos sem imagens */}
          {!images.length && !featured && (
            <div className="mb-6 p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-accent text-lg">📋</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Documentação técnica disponível na versão impressa
                </p>
              </div>
            </div>
          )}

          {/* Ações */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"></div>
            <Button
              variant={featured ? "default" : "outline"}
              size="sm"
              className={`transition-all duration-300 ${
                isHovered ? "shadow-lg scale-105" : ""
              }`}
              onClick={() => setGalleryOpen(true)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {featured ? "Ver Projeto Completo" : "Ver Detalhes"}
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
