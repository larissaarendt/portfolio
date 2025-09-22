import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { studies } from "@/data/studies";

const StudiesSection = () => {
  return (
    <section id="studies" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">Estudos Técnicos</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvimento de estudos especializados que complementam os
            projetos arquitetônicos, garantindo viabilidade e sustentabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-elevation transition-smooth"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-accent transition-smooth">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;
