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
