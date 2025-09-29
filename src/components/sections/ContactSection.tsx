import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contato</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Interessado em colaborar ou saber mais sobre meus projetos? Entre em
          contato para conversarmos sobre suas ideias.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-soft">
            <Mail className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">
              larissaarendt.rodrigues@gmail.com
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-soft">
            <Phone className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-medium mb-1">Telefone</h3>
            <p className="text-muted-foreground text-sm">(XX) XXXXX-XXXX</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-soft">
            <MapPin className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-medium mb-1">Localização</h3>
            <p className="text-muted-foreground text-sm">Cidade, Estado</p>
          </div>
        </div>

        <Button size="lg" className="bg-accent hover:bg-accent/90">
          <Mail className="w-4 h-4 mr-2" />
          Entrar em Contato
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
