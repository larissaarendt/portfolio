import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import PrintPortfolio from "./Print";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StudiesSection from "@/components/sections/StudiesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Versão para tela */}
      <div className="print:hidden">
        <Header />

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StudiesSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Versão para impressão */}
      <PrintPortfolio />
    </div>
  );
};

export default Index;
