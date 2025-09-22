import React from "react";
import { projects } from "@/data/projects";
import { studies } from "@/data/studies";
import QRCodePrint from "@/components/QRCodePrint";

const PrintPortfolio = () => {
  const currentUrl = window.location.origin;

  return (
    <div className="print:block hidden">
      {/* Página 1 - Capa */}
      <div className="min-h-screen flex flex-col justify-center items-center p-8 page-break-after">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 text-raisin-black">
              Larissa Arendt
            </h1>
            <h2 className="text-4xl text-wenge mb-6">
              Arquitetura e Urbanismo
            </h2>
            <div className="w-24 h-1 bg-melon mx-auto mb-8"></div>
          </div>

          <div className="bg-bone/50 p-8 rounded-lg border border-wenge/20">
            <h3 className="text-2xl font-semibold mb-4 text-raisin-black">
              Portfólio de Arquitetura e Urbanismo
            </h3>
            <p className="text-lg text-wenge leading-relaxed mb-6">
              Formanda em Arquitetura e Urbanismo, dedicada a criar espaços que
              inspiram e transformam vidas através do design consciente.
            </p>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p>
                  <strong>Formação:</strong> Arquitetura e Urbanismo
                </p>
                <p>
                  <strong>Período:</strong> 8º Semestre
                </p>
              </div>
              <div>
                <p>
                  <strong>Ano:</strong> 2024
                </p>
                <p>
                  <strong>Projetos:</strong> 15+ desenvolvidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Página 2 - Sobre */}
      <div className="min-h-screen flex flex-col justify-center p-8 page-break-after">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-raisin-black border-b-2 border-melon pb-4">
            Sobre o Portfólio
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Filosofia de Projeto
              </h3>
              <p className="text-base leading-relaxed text-raisin-black mb-6">
                Minha abordagem arquitetônica se baseia na criação de espaços
                que harmonizam funcionalidade, sustentabilidade e bem-estar
                humano. Cada projeto é desenvolvido considerando o contexto
                local, as necessidades dos usuários e o impacto ambiental.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Competências Técnicas
              </h3>
              <ul className="text-base space-y-2 text-raisin-black">
                <li>• Projeto Arquitetônico Residencial e Comercial</li>
                <li>• Design de Interiores</li>
                <li>• Planejamento Urbano</li>
                <li>• Sustentabilidade e Eficiência Energética</li>
                <li>• Acessibilidade Universal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Ferramentas
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Projeto</h4>
                  <ul className="text-sm space-y-1 text-raisin-black">
                    <li>AutoCAD</li>
                    <li>Revit</li>
                    <li>SketchUp</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Visualização</h4>
                  <ul className="text-sm space-y-1 text-raisin-black">
                    <li>Lumion</li>
                    <li>V-Ray</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Especialidades
              </h3>
              <p className="text-base leading-relaxed text-raisin-black">
                Foco especial em projetos que integram arquitetura contemporânea
                com elementos naturais, priorizando a criação de ambientes que
                promovam qualidade de vida e conexão com o entorno.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Páginas de Projetos Arquitetônicos */}
      {projects
        .filter((p) => p.category === "Projeto Arquitetônico")
        .map((project, index) => (
          <div
            key={index}
            className="min-h-screen p-8 page-break-after break-inside-avoid"
          >
            <div className="max-w-4xl mx-auto break-inside-avoid">
              <div className="mb-8 break-inside-avoid">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-raisin-black">
                    {project.title}
                  </h2>
                  <span className="text-lg text-wenge font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-melon to-wenge mb-6"></div>
              </div>

              {/* Layout principal reorganizado */}
              <div className="space-y-6">
                {/* Galeria de Imagens do Projeto - manter junto com título */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-6 break-inside-avoid">
                    <h3 className="text-xl font-semibold mb-4 text-wenge">
                      Imagens do Projeto
                    </h3>

                    {/* Grid uniforme 2x2 para todas as imagens */}
                    <div className="grid grid-cols-2 gap-4 break-inside-avoid">
                      {project.images.map((image, imgIndex) => {
                        const getImageType = (img: string) => {
                          const filename = img.toLowerCase();
                          if (
                            filename.includes("planta") ||
                            filename.includes("plant")
                          )
                            return "Planta";
                          if (filename.includes("corte")) return "Corte";
                          if (filename.includes("fachada")) return "Fachada";
                          if (filename.includes("perspectiva"))
                            return "Perspectiva";
                          if (filename.includes("interior")) return "Interior";
                          if (filename.includes("area")) return "Área";
                          if (filename.includes("implantacao"))
                            return "Implantação";
                          if (filename.includes("detalhes")) return "Detalhes";
                          if (filename.includes("vista")) return "Vista";
                          return imgIndex === 0 ? "Principal" : "Vista";
                        };

                        return (
                          <div
                            key={imgIndex}
                            className="bg-bone/30 rounded-lg overflow-hidden border border-wenge/10 relative"
                          >
                            <div className="absolute top-2 left-2 bg-melon/90 text-raisin-black px-2 py-1 rounded text-xs font-medium z-10">
                              {getImageType(image)}
                            </div>
                            <img
                              src={image}
                              alt={`${project.title} - ${getImageType(image)}`}
                              className="w-full h-32 object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-32 bg-gradient-to-br from-bone/20 to-wenge/10 flex items-center justify-center">
                                      <span class="text-wenge text-xs">📸 ${getImageType(
                                        image
                                      )}</span>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Nota sobre versão digital */}
                    <div className="mt-4 p-3 bg-isabelline/30 rounded-lg border border-melon/20">
                      <p className="text-xs text-center text-wenge italic">
                        Para visualizar as imagens em tamanho completo e com
                        maior resolução, acesse a versão digital do portfólio no
                        site.
                      </p>
                    </div>
                  </div>
                )}

                {/* Seção de conceito e informações técnicas lado a lado */}
                <div className="grid md:grid-cols-2 gap-6 page-break-before pt-8">
                  {/* Conceito do Projeto */}
                  <div className="bg-bone/30 p-6 rounded-lg break-inside-avoid">
                    <h3 className="text-xl font-semibold mb-4 text-wenge">
                      Conceito do Projeto
                    </h3>
                    <p className="text-base leading-relaxed text-raisin-black mb-4">
                      {project.description}
                    </p>

                    {project.featured && (
                      <div className="bg-isabelline/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-wenge">
                          Características Principais:
                        </h4>
                        <ul className="text-sm text-raisin-black space-y-1">
                          <li>• Vista privilegiada para o Aruatos da Paz</li>
                          <li>• Integração com a paisagem circundante</li>
                          <li>• Conceito de farol que guia o saber</li>
                          <li>• Ênfase na acessibilidade e fluidez</li>
                          <li>• Uso de materiais sustentáveis</li>
                          <li>• Aproveitamento da iluminação natural</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Informações técnicas - altura independente */}
                  <div className="bg-wenge/10 p-6 rounded-lg break-inside-avoid self-start">
                    <h4 className="font-semibold mb-4 text-wenge">
                      Informações Técnicas
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-raisin-black">
                          Categoria:
                        </p>
                        <p className="text-wenge">{project.category}</p>
                      </div>
                      <div>
                        <p className="font-medium text-raisin-black">Ano:</p>
                        <p className="text-wenge">{project.year}</p>
                      </div>
                      <div>
                        <p className="font-medium text-raisin-black">Status:</p>
                        <p className="text-wenge">Projeto Acadêmico</p>
                      </div>
                      <div>
                        <p className="font-medium text-raisin-black">Tipo:</p>
                        <p className="text-wenge">
                          {project.title.includes("Farol")
                            ? "Biblioteca Pública"
                            : project.title.includes("Hotel")
                            ? "Hospitalidade"
                            : project.title.includes("ILPI")
                            ? "Institucional"
                            : "Residencial"}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-raisin-black">
                          Total de Imagens:
                        </p>
                        <p className="text-wenge">
                          {project.images?.length || 0} imagens técnicas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Página de Projetos de Interior */}
      <div className="min-h-screen p-8 page-break-after break-inside-avoid">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-raisin-black border-b-2 border-melon pb-4 break-inside-avoid">
            Projetos de Interior
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.category === "Projeto de Interior")
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-bone/30 p-6 rounded-lg break-inside-avoid"
                >
                  {/* Imagem principal do projeto de interior */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-4">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} - Imagem principal`}
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-32 bg-gradient-to-br from-bone/20 to-wenge/10 flex items-center justify-center rounded-lg">
                                <span class="text-wenge text-sm">🏠 Projeto de Interior</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  )}

                  <div className="mb-4 break-inside-avoid">
                    <h3 className="text-2xl font-semibold text-wenge mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-raisin-black/70 mb-4">
                      {project.category} • {project.year}
                    </p>
                  </div>

                  <p className="text-base leading-relaxed text-raisin-black mb-4 break-inside-avoid">
                    {project.description}
                  </p>

                  <div className="bg-isabelline/50 p-4 rounded break-inside-avoid">
                    <h4 className="font-medium mb-2 text-wenge">
                      Soluções Aplicadas:
                    </h4>
                    <ul className="text-sm space-y-1 text-raisin-black">
                      <li>• Otimização de espaços</li>
                      <li>• Mobiliário multifuncional</li>
                      <li>• Paleta de cores harmoniosa</li>
                      <li>• Iluminação técnica e decorativa</li>
                    </ul>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-8 p-6 bg-wenge/10 rounded-lg break-inside-avoid">
            <h3 className="text-2xl font-semibold mb-4 text-wenge">
              Abordagem de Design de Interiores
            </h3>
            <p className="text-base leading-relaxed text-raisin-black break-inside-avoid">
              Meu trabalho em design de interiores foca na criação de ambientes
              funcionais e esteticamente agradáveis, considerando o perfil dos
              usuários, fluxos de circulação e otimização de espaços. Cada
              projeto busca equilibrar conforto, praticidade e personalidade,
              resultando em espaços únicos e acolhedores.
            </p>
          </div>
        </div>
      </div>

      {/* Página de Estudos Técnicos */}
      <div className="min-h-screen p-8 page-break-after break-inside-avoid">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-raisin-black border-b-2 border-melon pb-4 break-inside-avoid">
            Estudos Técnicos Desenvolvidos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {studies.map((study, index) => (
              <div
                key={index}
                className="bg-bone/30 p-6 rounded-lg border border-wenge/10 break-inside-avoid"
              >
                <h3 className="text-lg font-semibold mb-3 text-wenge">
                  {study.title}
                </h3>
                <p className="text-sm leading-relaxed text-raisin-black break-inside-avoid">
                  {study.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-wenge/10 rounded-lg break-inside-avoid">
            <h3 className="text-2xl font-semibold mb-4 text-wenge">
              Competências em Estudos Técnicos
            </h3>
            <div className="grid md:grid-cols-2 gap-6 break-inside-avoid">
              <div className="break-inside-avoid">
                <h4 className="font-medium mb-3 text-raisin-black">
                  Áreas de Especialização:
                </h4>
                <ul className="text-sm space-y-2 text-raisin-black">
                  <li>• Análise de Impacto Urbano e Ambiental</li>
                  <li>• Estudos de Mobilidade e Trânsito</li>
                  <li>• Gestão de Resíduos em Construção</li>
                  <li>• Monitoramento Ambiental de Obras</li>
                </ul>
              </div>
              <div className="break-inside-avoid">
                <h4 className="font-medium mb-3 text-raisin-black">
                  Metodologias Aplicadas:
                </h4>
                <ul className="text-sm space-y-2 text-raisin-black">
                  <li>• Levantamentos de campo especializados</li>
                  <li>• Análise de dados quantitativos e qualitativos</li>
                  <li>• Proposição de medidas mitigadoras</li>
                  <li>• Desenvolvimento de planos de gestão</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Última Página - QR Code e Contato */}
      <div className="min-h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-raisin-black">
            Acesse o Portfólio Completo
          </h2>

          <div className="bg-bone/50 p-8 rounded-lg border border-wenge/20 mb-8">
            <div className="flex justify-center mb-6">
              <QRCodePrint url={currentUrl} />
            </div>
            <p className="text-lg text-wenge mb-4">
              Escaneie o QR Code para acessar a versão digital completa com:
            </p>
            <ul className="text-sm space-y-2 text-raisin-black">
              <li>• Galeria interativa de imagens em alta resolução</li>
              <li>• Plantas baixas, cortes e elevações detalhados</li>
              <li>• Renderizações 3D dos projetos</li>
              <li>• Detalhes construtivos e especificações técnicas</li>
            </ul>
          </div>

          <div className="bg-wenge/10 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-wenge">Contato</h3>
            <div className="text-base space-y-2 text-raisin-black">
              <p>
                <strong>Larissa Arendt Lombardi Rodrigues</strong>
              </p>
              <p>Formanda em Arquitetura e Urbanismo</p>
              <p className="text-sm text-wenge mt-4">
                Este portfólio representa minha jornada acadêmica e evolução
                profissional na área de Arquitetura e Urbanismo.
              </p>
            </div>
          </div>

          <div className="mt-8 text-xs text-wenge/70">
            <p>Portfólio gerado em {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPortfolio;
