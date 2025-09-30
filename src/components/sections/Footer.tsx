import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent text-isabelline py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-melon rounded-lg flex items-center justify-center">
              <span className="text-taupe font-bold text-sm">LA</span>
            </div>
            <span className="font-medium">
              Larissa Arendt Lombardi Rodrigues
            </span>
          </div>
          <p className="text-isabelline/70 text-sm">
            © 2024 - {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
