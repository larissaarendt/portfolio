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
    title: "Museu da cidade",
    category: "Projeto Arquitetônico",
    description:
      "Desenvolvido em grupo para a disciplina de Projeto Arquitetônico – Introdução Urbana, o projeto propõe a criação de um novo edifício ao lado do bem tombado da Fábrica Lidgerwood Manufacturing, restaurando o prédio histórico e atribuindo-lhe um novo uso cultural. A composição integra o edifício restaurado e a construção contemporânea, criando um diálogo entre o antigo e o novo, valorizando a memória histórica da cidade...",
    description_complete: [
      "Desenvolvido em grupo para a disciplina de Projeto Arquitetônico – Introdução Urbana, o projeto propõe a criação de um novo edifício ao lado do bem tombado da Fábrica Lidgerwood Manufacturing, restaurando o prédio histórico e atribuindo-lhe um novo uso cultural.",

      "A composição integra o edifício restaurado e a construção contemporânea, criando um diálogo entre o antigo e o novo, valorizando a memória histórica da cidade e a estética diferenciada de cada bloco. O contraste entre as fachadas preservadas e os elementos modernos gera um impacto visual marcante, ressaltando tanto a nostalgia do patrimônio histórico quanto a contemporaneidade do acréscimo arquitetônico.",

      "O projeto incentiva a caminhabilidade e a vivência urbana, permitindo que visitantes transitem entre os espaços internos e pelas calçadas adjacentes, promovendo integração com o entorno e oferecendo experiências imersivas de aprendizado e apreciação histórica. Uma praça aberta conecta os edifícios, tornando o museu acessível ao público geral e aos turistas, reforçando o papel do projeto como espaço de cultura, memória e convivência urbana.",
    ],
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
    highlights: [
      "Restauro e reuso do patrimônio",
      "Espaços públicos integrados",
      "Impacto visual contrastante",
      "Espaços de interação e convivência",
    ],
    featured: true,
  },
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
    highlights: [
      "Integração com a paisagem",
      "Iluminação natural estratégica",
      "Qualidade espacial e funcionalidade",
      "Fluxos e integração interna/externa",
    ],
  },
  {
    title: "Casarão 1806 - Requalificação de Bem Tombado",
    category: "Projeto Arquitetônico",
    description:
      "Desenvolvido em grupo para a disciplina de Técnicas Retrospectivas – Projeto, o trabalho propõe a requalificação da Fazenda Mato Dentro, um bem tombado de relevante valor histórico e arquitetônico localizado em Campinas, São Paulo. O projeto inclui a adição de um novo edifício, cuidadosamente posicionado para não comprometer a essência do edifício principal, mantendo sua presença e valor simbólico. O novo...",
    description_complete: [
      "Desenvolvido em grupo para a disciplina de Técnicas Retrospectivas – Projeto, o trabalho propõe a requalificação da Fazenda Mato Dentro, um bem tombado de relevante valor histórico e arquitetônico localizado em Campinas, São Paulo.",

      "O projeto inclui a adição de um novo edifício, cuidadosamente posicionado para não comprometer a essência do edifício principal, mantendo sua presença e valor simbólico. O novo volume amplia o uso do espaço, com foco em acessibilidade, garantindo que todos os visitantes possam usufruir das instalações com conforto e segurança.",

      "A proposta prevê a instalação de um restaurante como uso principal, além de pequenas lojas, espaços expositivos tipo museu para preservar e compartilhar a memória histórica da fazenda, e salões de festas e eventos, promovendo a interação social e cultural.",

      "O projeto busca conciliar preservação patrimonial e funcionalidade contemporânea, valorizando a memória coletiva e transformando a fazenda em um espaço urbano ativo, cultural e acessível, capaz de reintegrar o patrimônio à vida da cidade e ao cotidiano da comunidade.",
    ],
    year: "2024",
    images: [
      "images/casarao-1806-fachada-principal.jpg",
      "images/casarao-1806-vista-lateral.jpg",
      "images/casarao-1806-interior-principal.jpg",
      "images/casarao-1806-area-interna.jpg",
      "images/casarao-1806-detalhes-construtivos.jpg",
      "images/casarao-1806-contexto-historico.jpg",
    ],
    highlights: [
      "Preservação do patrimônio histórico",
      "Novos usos",
      "Acessibilidade",
      "Integração com o entorno",
    ],
  },
  {
    title: "Licenciamento Ambiental e Monitoramento de Obras",
    category: "Urbanismo e Estudos Urbanos",
    description:
      "O licenciamento ambiental é um procedimento obrigatório para empreendimentos que possam causar impactos ao meio ambiente, garantindo que as obras sejam realizadas de forma sustentável e em conformidade com a legislação vigente. No Brasil, os órgãos responsáveis podem atuar em nível federal (IBAMA), estadual (ex.: CETESB em São Paulo) ou municipal, dependendo...",
    description_complete: [
      "O licenciamento ambiental é um procedimento obrigatório para empreendimentos que possam causar impactos ao meio ambiente, garantindo que as obras sejam realizadas de forma sustentável e em conformidade com a legislação vigente. No Brasil, os órgãos responsáveis podem atuar em nível federal (IBAMA), estadual (ex.: CETESB em São Paulo) ou municipal, dependendo da abrangência do impacto.",

      "O processo envolve três etapas principais, que estão condicionadas entre si, ou seja, o cumprimento das exigências de uma licença é pré-requisito para a emissão da próxima:",

      "Licença Prévia (LP): aprova a localização e concepção do projeto, atestando sua viabilidade ambiental.",

      "Licença de Instalação (LI): autoriza a execução das obras, condicionada ao cumprimento das exigências definidas na LP.",

      "Licença de Operação (LO): concede a autorização para início das atividades, verificando a conformidade com as medidas de controle ambiental e com todas as exigências da LI.",

      "O monitoramento de obras é fundamental para assegurar que todas as condicionantes sejam cumpridas. Ele envolve o controle do canteiro, monitoramento de resíduos, segurança dos trabalhadores e a implantação correta e completa do empreendimento. Por meio de relatórios periódicos, como o Plano de Controle e Monitoramento Ambiental de Obras (PCMAO), é possível garantir a conformidade legal, reduzir impactos ao meio ambiente e assegurar que o projeto seja concluído de forma sustentável e em harmonia com o entorno.",
    ],
    images: [
      "images/licenciamento-obra-01.jpeg",
      "images/licenciamento-obra-02.jpeg",
      "images/licenciamento-obra-03.jpeg",
      "images/licenciamento-obra-04.jpeg",
      "images/licenciamento-obra-05.jpeg",
      "images/licenciamento-obra-06.jpeg",
      "images/licenciamento-obra-07.jpeg",
      "images/Licenciamento-LI.png",
      "images/Licenciamento-LP.png",
    ],
    year: "2025",
    highlights: [
      "Cumprimento de exigências legais",
      "Redução de impactos ambientais",
      "Garantia de segurança e boas práticas",
    ],
  },
  {
    title: "EIV - Estudo de Impacto de Vizinhança",
    category: "Projeto Arquitetônico",
    description:
      "O Estudo de Impacto de Vizinhança (EIV) é um instrumento técnico obrigatório para avaliar os efeitos de novos empreendimentos no entorno urbano. Este estudo analisa aspectos como adensamento populacional, infraestrutura urbana, valorização imobiliária, impactos no trânsito, ventilação e iluminação natural, paisagem urbana e possíveis poluições sonora e atmosférica. O objetivo principal é garantir que empreendimentos sejam...",
    description_complete: [
      "O Estudo de Impacto de Vizinhança (EIV) é um instrumento técnico obrigatório para avaliar os efeitos de novos empreendimentos no entorno urbano. Este estudo analisa aspectos como adensamento populacional, infraestrutura urbana, valorização imobiliária, impactos no trânsito, ventilação e iluminação natural, paisagem urbana e possíveis poluições sonora e atmosférica.",
      "O objetivo principal é garantir que empreendimentos sejam implementados de forma harmoniosa com o ambiente urbano existente, promovendo o desenvolvimento sustentável da cidade.",
      "O estudo demonstra que há infraestrutura adequada na região para absorver os impactos do empreendimento, que gerará benefícios econômicos através da criação de empregos e movimentação do comércio local, sempre respeitando o zoneamento municipal e as diretrizes emitidas pelo municipio",
    ],
    images: [
      "images/EIV.jpeg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0001.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0002.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0003.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0004.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0005.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0006.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0007.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0008.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0009.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0010.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0011.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0012.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0013.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0014.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0015.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0016.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0017.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0018.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0019.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0020.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0021.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0022.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0023.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0024.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0025.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0026.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0027.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0028.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0029.jpg",
      "images/EIV - ENGEMAPE_rev02 +RRT - 2 pag por img_page-0030.jpg",
    ],
    year: "2025",
    highlights: [
      "Avaliação e caracterização do entorno",
      "Impactos previstos no entorno",
      "Conformidade com as diretrizes municipais",
    ],
  },
  {
    title: "RIT - Relatório de Impacto de Trânsito",
    category: "Urbanismo e Estudos Urbanos",
    description:
      "O Relatório de Impacto de Trânsito (RIT) é um estudo técnico essencial para analisar os efeitos de novos empreendimentos sobre o sistema viário e a circulação de pedestres no entorno urbano. Ele considera indicadores como fluxo de tráfego, capacidade viária, nível de serviço, acessos, pontos de congestionamento e segurança, além da integração com o transporte público e modos ativos, como ciclovias e calçadas. O objetivo do RIT é garantir que o projeto seja compatível...",
    description_complete: [
      "O Relatório de Impacto de Trânsito (RIT) é um estudo técnico essencial para analisar os efeitos de novos empreendimentos sobre o sistema viário e a circulação de pedestres no entorno urbano. Ele considera indicadores como fluxo de tráfego, capacidade viária, nível de serviço, acessos, pontos de congestionamento e segurança, além da integração com o transporte público e modos ativos, como ciclovias e calçadas.",

      "O objetivo do RIT é garantir que o projeto seja compatível com a infraestrutura existente, identificando impactos potenciais e propondo soluções para minimizar problemas de mobilidade e promover segurança viária. Entre os pontos abordados estão: o aumento previsto do tráfego, a demanda por estacionamento, a operação de semáforos, a circulação de pedestres e ciclistas, e a interação do empreendimento com rotas de transporte público.",

      "As medidas de mitigação incluem: ajustes de semáforos e sinalização, redimensionamento de vias ou acessos, criação de faixas exclusivas de ônibus, ciclovias e calçadas, planejamento de estacionamento adequado, controle de horários de carga e descarga, e implementação de estratégias de logística e circulação para reduzir congestionamentos e impactos negativos no trânsito.",

      "O estudo é fundamental para assegurar mobilidade eficiente, segurança viária e compatibilidade urbana, além de fornecer subsídios técnicos para órgãos municipais na aprovação do empreendimento, promovendo desenvolvimento urbano sustentável e organizado.",
    ],
    images: [
      "images/RIT.jpeg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0001.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0002.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0003.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0004.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0005.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0006.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0007.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0008.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0009.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0010.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0011.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0012.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0013.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0014.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0015.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0016.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0017.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0018.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0019.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0020.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0021.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0022.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0023.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0024.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0025.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0026.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0027.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0028.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0029.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0030.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0031.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0032.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0033.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0034.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0035.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0036.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0037.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0038.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0039.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0040.jpg",
      "images/RIT DDL_rev05_completo ASSINADO 2 pg por follha_page-0041.jpg",
    ],
    year: "2024",
    highlights: [
      "Análise de fluxo de tráfego",
      "Capacidade viária e nível de serviço",
      "Propostas de mitigação",
      "Acessos do empreendiemento",
    ],
  },
];
