export interface Project {
  title: string;
  category: string;
  description: string;
  description_complete?: string[];
  year: string;
  images: string[];
  featured?: boolean;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "Farol das Letras - Biblioteca Pública",
    category: "Projeto Arquitetônico",
    description:
      "Desenvolvido em grupo para a disciplina de Projeto Arquitetônico – Tópicos Executivos, o projeto Farol das Letras propõe a criação de uma biblioteca que integra o ambiente de estudo com a paisagem circundante. Localizado em frente ao Aruatos da Paz, um espaço de grande valor cultural e simbólico, o edifício se destaca como um marco visual da cidade, evocando a imagem de um farol que guia e inspira o saber...",
    description_complete: [
      "Desenvolvido em grupo para a disciplina de Projeto Arquitetônico – Tópicos Executivos, o projeto Farol das Letras propõe a criação de uma biblioteca que integra o ambiente de estudo com a paisagem circundante. Localizado em frente ao Aruatos da Paz, um espaço de grande valor cultural e simbólico, o edifício se destaca como um marco visual da cidade, evocando a imagem de um farol que guia e inspira o saber. ",
      "O projeto busca proporcionar uma experiência de aprendizado imersiva, conectando os usuários ao ambiente natural e urbano, valorizando a vista privilegiada para o horizonte e promovendo a relação entre cultura, educação e cidade. A proposta também contempla estratégias de integração entre espaços internos e externos, criando fluxos contínuos de circulação e áreas de convivência que reforçam o caráter educativo e inspirador do edifício.",
    ],
    year: "2024",
    images: [
      "images/farol-das-letras-fachada-principal.jpg",
      "images/farol-das-letras-perspectiva-aerea.jpg",
      "images/farol-das-letras-vista-lateral.jpg",
      "images/farol-das-letras-planta-baixa-terreo.jpg",
      "images/farol-das-letras-planta-baixa-superior.jpg",
      "images/farol-das-letras-corte-longitudinal.jpg",
      "images/farol-das-letras-corte-transversal.jpg",
      "images/farol-das-letras-interior-biblioteca.jpg",
      "images/farol-das-letras-area-leitura.jpg",
      "images/farol-das-letras-implantacao.jpg",
      "images/farol-das-letras-detalhes-construtivos.jpg",
    ],
    featured: true,
    highlights: [
      "Integração com a paisagem",
      "Iluminação natural estratégica",
      "Qualidade espacial e funcionalidade",
      "Fluxos e integração interna/externa",
    ],
  },
  {
    title: "Museu da cidade",
    category: "Projeto Arquitetônico",
    description:
      'O museu foi instalado em edifícios distintos, que se fundem em um grande "calçadão", unificando as três quadras do projeto. Essa junção representa a união de diferentes períodos e fatores que fizeram de Campinas a grande metrópole que é hoje. A disposição e a aparência dos edifícios refletem de maneira clara o que se exibe em seu interior: cada um apresenta um tema relevante vivido em diferentes épocas. Os blocos possuem uma estética contrastante de forma intencional, o que gera um impacto visual entre o novo e o velho, marcado pela contemporaneidade do edifício mais recente e pela nostalgia do edifício antigo, com suas paredes tombadas e tijolos repletos de histórias. Os visitantes podem transitar a pé pelo museu, tanto nos circuitos internos de exposição dos prédios quanto nas calçadas, junto aos pedestres, uma vez que a proposta do programa é convidar para as ruas do calçadão. Outra parte da história da cidade pode ser apreciada de forma imersiva em uma praça aberta ao público em geral e aos turistas do museu.',
    year: "2024",
    images: [
      "images/museu-fachada-principal.jpg",
      "images/museu-vista-lateral.jpg",
      "images/museu-perspectiva-aerea.jpg",
      "images/museu-interior-principal.jpg",
      "images/museu-area-exposicao.jpg",
      "images/museu-planta-baixa.jpg",
      "images/museu-corte-transversal.jpg",
    ],
    highlights: ["Integração", "Ambiente", "Marco", "Conexão"],
  },
  {
    title: "Casarão 1806",
    category: "Projeto Arquitetônico",
    description:
      "Proposta de requalificação da Fazenda Mato Dentro, um bem tombado de relevante valor histórico e arquitetônico localizado em Campinas, São Paulo. O projeto delimita-se ao estudo e intervenção na área da Fazenda Mato Dentro, situada no interior do Parque Ecológico Monsenhor Emílio José Salim. A área está atualmente desativada e sem uso definido, o que evidencia a urgência de estratégias para sua conservação e reintegração à cidade. A proposta tem como objetivo central reconhecer o valor patrimonial da fazenda, analisar suas características arquitetônicas e históricas, e desenvolver uma proposta de restauro e reuso compatível com sua preservação e com as necessidades urbanas atuais. Além disso, busca-se destacar a importância da memória coletiva e da valorização dos bens culturais como agentes de transformação urbana.",
    year: "2024",
    images: [
      "images/casarao-1806-fachada-principal.jpg",
      "images/casarao-1806-vista-lateral.jpg",
      "images/casarao-1806-interior-principal.jpg",
      "images/casarao-1806-area-interna.jpg",
      "images/casarao-1806-detalhes-construtivos.jpg",
      "images/casarao-1806-contexto-historico.jpg",
    ],
    highlights: ["Integração", "Ambiente", "Marco", "Conexão"],
  },
  {
    title: "Licenciamento Ambiental",
    category: "Urbanismo e Estudos Urbanos",
    description:
      "O licenciamento ambiental é um procedimento administrativo obrigatório para a implantação de empreendimentos ou atividades que possam causar impactos ao meio ambiente. Ele garante que as obras sejam executadas de forma sustentável, respeitando a legislação ambiental vigente. No Brasil, os órgãos responsáveis pelo licenciamento podem ser: Federal: IBAMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis); Estadual: Secretarias Estaduais de Meio Ambiente (ex.: CETESB em São Paulo); Municipal: órgãos ambientais locais, quando o impacto é restrito ao município. O processo de licenciamento geralmente envolve três etapas principais: Licença Prévia (LP): concedida na fase de planejamento, aprova a localização e a concepção do projeto, atestando sua viabilidade ambiental. Licença de Instalação (LI): autoriza a execução das obras, com base no cumprimento das exigências definidas na LP. Licença de Operação (LO): emitida após a conclusão das obras, autoriza o início das atividades, verificando a conformidade com as medidas de controle ambiental. Assim, o licenciamento ambiental é fundamental para equilibrar o desenvolvimento urbano com a preservação ambiental, assegurando que a implantação do empreendimento cause o menor impacto possível ao meio. O monitoramento durante a obra é fundamental para assegurar que as condicionantes estabelecidas nas etapas de LP, LI e LO sejam efetivamente cumpridas. Por meio de relatórios periódicos, como o Plano de Controle e Monitoramento Ambiental de Obras (PCMAO), é possível verificar a gestão do canteiro, o controle de resíduos, a adoção de medidas preventivas contra impactos ambientais e a segurança dos trabalhadores. Esse acompanhamento garante a conformidade legal, facilita a emissão da Licença de Operação e assegura que o empreendimento seja concluído de forma sustentável e em harmonia com o entorno",
    images: ["images/Licenciamento-LI.png", "images/Licenciamento-LP.png"],
    year: "2024",
    highlights: ["Integração", "Ambiente", "Marco", "Conexão"],
  },
  {
    title: "EIV - Estudo de Impacto de Vizinhança",
    category: "Projeto Arquitetônico",
    description:
      "O Estudo de Impacto de Vizinhança (EIV) é um instrumento técnico obrigatório para avaliar os efeitos de novos empreendimentos no entorno urbano. Este estudo analisa aspectos como adensamento populacional, infraestrutura urbana, valorização imobiliária, impactos no trânsito, ventilação e iluminação natural, paisagem urbana e possíveis poluições sonora e atmosférica. O objetivo principal é garantir que empreendimentos sejam implementados de forma harmoniosa com o ambiente urbano existente, promovendo o desenvolvimento sustentável da cidade. O estudo demonstra que há infraestrutura adequada na região para absorver os impactos do empreendimento, que gerará benefícios econômicos através da criação de empregos e movimentação do comércio local, sempre respeitando o zoneamento municipal e as diretrizes da APA de Campinas.",
    images: ["images/EIV.png"],
    year: "2025",
    highlights: ["Integração", "Ambiente", "Marco", "Conexão"],
  },
  {
    title: "RIT - Relatório de Impacto de Trânsito",
    category: "Urbanismo e Estudos Urbanos",
    description:
      "O Relatório de Impacto de Trânsito (RIT) é um estudo técnico obrigatório que avalia os impactos de novos empreendimentos no sistema viário e na mobilidade urbana. Este relatório contempla: 1. INTRODUÇÃO; 2. METODOLOGIA; 3. CONSIDERAÇÕES INICIAIS; 4. CARACTERÍSTICAS GERAIS DA ÁREA DE ESTUDO (Localização, Macrozoneamento, Zoneamento, Mobilidade Urbana e Projeto Arquitetônico); 5. ÁREA DE INFLUÊNCIA E SISTEMA VIÁRIO; 6. TRÁFEGO FUTURO; 7. CAIXA DE ACUMULAÇÃO; 8. CARACTERIZAÇÃO DOS SERVIÇOS DE TRANSPORTE; 9. IMPACTOS E MEDIDAS MITIGADORAS; 10. CONCLUSÃO; 11. RESPONSABILIDADE TÉCNICA. Este estudo específico trata de um condomínio de lotes residenciais com 42 lotes, cujo acesso ocorrerá pela Rua Elizabete Gebauer Pimentel Zampeli. As análises demonstraram que o empreendimento não deverá causar impactos significativos ao sistema viário estudado. Apesar de alguns movimentos apresentarem níveis de serviço mais elevados nas interseções devido ao alto fluxo nas vias preferenciais, o pequeno fluxo de veículos da via de acesso não gerará situações críticas, mesmo considerando o crescimento natural da frota municipal. O relatório propõe medidas mitigadoras para problemas existentes relacionados às características locais, como ausência de pavimentação e movimentos atualmente proibidos, garantindo a segurança e fluidez do trânsito na região.",
    images: ["images/RIT.png"],
    year: "2024",
    highlights: ["Integração", "Ambiente", "Marco", "Conexão"],
  },
];
