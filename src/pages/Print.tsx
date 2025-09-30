import React from "react";
import { projects } from "@/data/projects";
import { studies } from "@/data/studies";
import QRCodePrint from "@/components/QRCodePrint";
import { aboutData } from "@/data/aboutData";

const PrintPortfolio = () => {
  const currentUrl = `${window.location.origin}/portfolio/`;
  const { idade, filosofia, habilidades, objetivos, achievements } = aboutData;
  return (
    <div className="block print:block">
      {/* Página 2 - Sobre, Habilidades e Objetivos */}
      <div className="min-h-screen flex flex-col p-8 page-break-after">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-raisin-black border-b-2 border-melon pb-4 flex content-center gap-7">
            <img
              src="images/eu.jpeg"
              alt="Capa do Portfólio"
              className="w-fit h-16 object-cover rounded-lg shadow-lg border border-wenge/20"
              style={{ objectPosition: "center" }}
            />
            <span className="flex items-center">
              Larissa Arendt Lombardi Rodrigues
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Filosofia e Objetivos Profissionais
              </h3>
              {Object.values(filosofia).map((text, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-raisin-black mb-6"
                >
                  {text}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-wenge">
                Habilidades e Competências
              </h3>
              <div className="space-y-4">
                {habilidades.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-foreground h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements igual AboutSection */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="p-4 text-center border-0 bg-bone/40 rounded-lg shadow"
              >
                <achievement.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent mb-1">
                  {achievement.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-wenge">
              Objetivos Profissionais
            </h3>
            <div className="space-y-4">
              {objetivos.map((objetivo, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-1">{objetivo.prazo}</h4>
                  <p className="text-base leading-relaxed text-raisin-black">
                    {objetivo.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Páginas de Projetos Arquitetônicos */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="min-h-screen p-8 page-break-after break-inside-avoid"
        >
          <div className="max-w-4xl mx-auto break-inside-avoid">
            {/* Título, Ano, Categoria e Primeira Imagem juntos */}
            <div className="break-inside-avoid print:page-break-inside-avoid">
              <h3 className="flex justify-between items-center text-3xl font-bold text-raisin-black border-b-2 border-melon">
                <span>{project.title}</span>
                <div className="flex items-center gap-6">
                  <span className="text-lg text-wenge font-medium">
                    {project.year}
                  </span>
                  <span className="text-base text-wenge/80 font-normal">
                    {project.category}
                  </span>
                </div>
              </h3>
              {project.images && project.images.length > 0 && (
                <div
                  className="w-full flex flex-col m-0 p-0"
                  style={{ margin: 0, padding: 0 }}
                >
                  {project.images.slice(0, 4).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} - Imagem ${idx + 1}`}
                      className="w-full h-1/2 object-cover"
                      style={{
                        pageBreakInside: "avoid",
                        breakInside: "avoid",
                        height: "30vh",
                        width: "100%",
                        margin: 0,
                        padding: 0,
                        paddingTop: "15px",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class='w-full h-full flex items-center justify-center'>
                              <span class='text-wenge text-xs'>📸 Imagem</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Demais imagens do projeto, se houver */}
            {project.images && project.images.length > 3 && (
              <div className="mb-0">
                {/* Não renderizar imagens extras se já atingiu 4 imagens */}
                {project.images.length > 4 ? (
                  <div className="mt-4 mb-4 p-3 bg-isabelline/30 rounded-lg border border-melon/20 break-inside-avoid">
                    <p className="text-xs text-center text-wenge italic">
                      Este projeto possui mais imagens na versão digital do
                      portfólio no site.
                    </p>
                  </div>
                ) : null}
              </div>
            )}
            {/* Descrição completa mapeada */}
            {/* Destaques do Projeto */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-4 mb-2">
                <h4 className="text-lg font-semibold text-wenge mb-1">
                  Destaques do Projeto:
                </h4>
                <ul className="list-disc list-inside text-base text-raisin-black">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="space-y-2">
              {project.description_complete &&
                project.description_complete.map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-base leading-relaxed text-raisin-black"
                  >
                    {desc}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ))}

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
