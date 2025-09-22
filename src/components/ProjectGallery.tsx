import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ProjectGalleryProps {
  featured: boolean;
  images: string[];
  title: string;
}

const ProjectGallery = ({ featured, images, title }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Bloquear scroll da página quando modal abrir
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
    setZoomLevel(1); // Reset zoom when opening
    setDragOffset({ x: 0, y: 0 }); // Reset drag offset
  };

  const closeGallery = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1); // Reset zoom when changing image
    setDragOffset({ x: 0, y: 0 }); // Reset drag offset
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1); // Reset zoom when changing image
    setDragOffset({ x: 0, y: 0 }); // Reset drag offset
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3)); // Máximo 3x
  };

  const zoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 0.5, 0.5);
    setZoomLevel(newZoomLevel);

    // Se chegou a 100% (1x), sempre centraliza a imagem
    if (newZoomLevel === 1) {
      setDragOffset({ x: 0, y: 0 });
    } else if (newZoomLevel < 1) {
      // Para zoom menor que 100%, também centraliza
      setDragOffset({ x: 0, y: 0 });
    } else {
      // Para zoom maior que 100%, ajusta o offset proporcionalmente
      const zoomRatio = newZoomLevel / zoomLevel;
      setDragOffset({
        x: dragOffset.x * zoomRatio,
        y: dragOffset.y * zoomRatio,
      });
    }
  };

  // Funções para arrastar
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setDragOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={`relative h-[240px] bg-muted overflow-hidden cursor-pointer group shadow-soft hover:shadow-elevation transition-smooth ${
          featured ? "rounded-lg" : ""
        }`}
        onClick={() => openGallery(0)}
      >
        {/* Main image */}
        {images[0] ? (
          <img
            src={images[0]}
            alt={`${title} - Imagem principal`}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth transition-all"
            onError={(e) => {
              console.error(`Erro ao carregar imagem: ${images[0]}`);
              e.currentTarget.style.display = "none";
              const sibling = e.currentTarget.nextElementSibling as HTMLElement;
              if (sibling) sibling.style.display = "flex";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-melon/20 to-silver/30 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">
                  📐
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Imagem principal do projeto
              </p>
            </div>
          </div>
        )}

        {/* Overlay com contador de imagens */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full pointer-events-none">
            +{images.length - 1} foto{images.length > 2 ? "s" : ""}
          </div>
        )}

        {/* Overlay com botão de visualizar */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium">
            Ver galeria
          </div>
        </div>
      </div>

      {/* Full Gallery Modal - Custom */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-6 right-6 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Zoom controls */}
            <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
              <button
                onClick={zoomIn}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth text-white"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={zoomOut}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth text-white"
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <div className="text-white text-xs text-center bg-black/50 px-2 py-1 rounded">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            <div
              className="flex items-center justify-center w-full h-full p-4"
              style={{
                overflow: "hidden",
                cursor:
                  zoomLevel > 1
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "default",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {images[currentIndex] ? (
                <div className="relative flex items-center justify-center">
                  <img
                    src={images[currentIndex]}
                    alt={`${title} - Imagem ${currentIndex + 1}`}
                    className="max-w-none object-contain transition-transform duration-300 pointer-events-none select-none"
                    style={{
                      transform: `scale(${zoomLevel}) translate(${
                        dragOffset.x / zoomLevel
                      }px, ${dragOffset.y / zoomLevel}px)`,
                      maxHeight: zoomLevel <= 1 ? "90vh" : "none",
                      maxWidth: zoomLevel <= 1 ? "90vw" : "none",
                    }}
                    onError={(e) => {
                      console.error(
                        `Erro ao carregar imagem: ${images[currentIndex]}`
                      );
                      e.currentTarget.style.display = "none";
                      const sibling = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (sibling) sibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="text-center text-white"
                    style={{ display: "none" }}
                  >
                    <div className="w-32 h-32 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <span className="text-6xl">📐</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{title}</h3>
                    <p className="text-white/70 max-w-md">
                      Erro ao carregar a imagem.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">📐</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-white/70 max-w-md">
                    Aqui serão exibidas as plantas, cortes, elevações e
                    renderizações 3D do projeto. As imagens reais serão
                    adicionadas conforme os projetos forem finalizados.
                  </p>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
