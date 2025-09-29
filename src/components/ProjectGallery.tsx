import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  Maximize2,
  RotateCw,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  featured: boolean;
  images: string[];
  title: string;
  forceOpen?: boolean;
  onCloseGallery?: () => void;
  onRequestOpenGallery?: () => void;
}

const ProjectGallery = ({
  featured,
  images,
  title,
  forceOpen,
  onCloseGallery,
  onRequestOpenGallery,
}: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Bloquear scroll da página quando modal abrir
  useEffect(() => {
    if (selectedImage !== null || forceOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, forceOpen]);

  // Sincronizar abertura externa
  useEffect(() => {
    if (forceOpen) {
      setSelectedImage(0);
    } else if (!forceOpen && selectedImage !== null) {
      setSelectedImage(null);
    }
  }, [forceOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (e.key) {
        case "Escape":
          closeGallery();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "r":
        case "R":
          setRotation((prev) => prev + 90);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

  const openGallery = (index: number) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setSelectedImage(index);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
    setRotation(0);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeGallery = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
    setRotation(0);
    setShowInfo(false);
    if (onCloseGallery) onCloseGallery();
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetImageState();
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetImageState();
  };

  const resetImageState = () => {
    setZoomLevel(1);
    setDragOffset({ x: 0, y: 0 });
    setRotation(0);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4));
  };

  const zoomOut = () => {
    const newZoomLevel = Math.max(zoomLevel - 0.5, 0.25);
    setZoomLevel(newZoomLevel);

    if (newZoomLevel <= 1) {
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const handleDownload = () => {
    if (images[currentIndex]) {
      const link = document.createElement("a");
      link.href = images[currentIndex];
      link.download = `${title}-${currentIndex + 1}.jpg`;
      link.click();
    }
  };

  const handleShare = () => {
    if (navigator.share && images[currentIndex]) {
      navigator.share({
        title: `${title} - Imagem ${currentIndex + 1}`,
        url: images[currentIndex],
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

  const renderGalleryModal = () => {
    if (selectedImage === null) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Header */}
          <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {title}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => setShowInfo(!showInfo)}
              >
                <Info className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={closeGallery}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center w-full h-full p-4">
            <img
              src={images[currentIndex]}
              alt={`${title} - Imagem ${currentIndex + 1}`}
              className="max-w-none object-contain transition-all duration-300 pointer-events-none select-none shadow-2xl"
              style={{
                transform: `scale(${zoomLevel}) translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`,
                maxHeight: "85vh",
                maxWidth: "85vw",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            />
          </div>

          {/* Navigation Buttons */}
          <Button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Zoom Controls */}
          <div className="absolute top-1/2 left-6 z-20 flex flex-col gap-2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={zoomIn}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={zoomOut}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setRotation((prev) => prev + 90)}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>

          {/* Drag Instructions */}
          {zoomLevel > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
              Arraste para mover a imagem
            </div>
          )}
        </div>
      </div>,
      document.body
    );
  };

  if (images.length === 0) {
    return (
      <div className="relative h-[240px] bg-gradient-to-br from-muted/50 to-muted/80 overflow-hidden rounded-lg border border-dashed border-muted-foreground/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📐</span>
            </div>
            <p className="text-muted-foreground text-sm font-medium">
              Projeto em Desenvolvimento
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Imagens serão adicionadas em breve
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`relative h-[240px] bg-gradient-to-br from-muted/30 to-muted/60 overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-2xl ${
          featured ? "rounded-lg" : "rounded-lg"
        }`}
        onClick={() => openGallery(0)}
      >
        {/* Main image */}
        <img
          src={images[0]}
          alt={`${title} - Imagem principal`}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
          onError={(e) => {
            console.error(`Erro ao carregar imagem: ${images[0]}`);
            e.currentTarget.style.display = "none";
            const sibling = e.currentTarget.nextElementSibling as HTMLElement;
            if (sibling) sibling.style.display = "flex";
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
            +{images.length - 1} foto{images.length > 2 ? "s" : ""}
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <button
            type="button"
            className="bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              if (typeof onRequestOpenGallery === "function") {
                onRequestOpenGallery();
              } else {
                openGallery(0);
              }
            }}
          >
            <Maximize2 className="w-4 h-4 inline mr-2" />
            Ver Galeria
          </button>
        </div>
      </div>

      {/* Render Modal */}
      {renderGalleryModal()}
    </>
  );
};

export default ProjectGallery;
