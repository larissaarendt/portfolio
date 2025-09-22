export interface Study {
  title: string;
  description: string;
}

export const studies: Study[] = [
  {
    title: "Estudo de Impacto de Vizinhança - EIV",
    description:
      "Análise dos impactos gerados por empreendimentos urbanos no entorno imediato, considerando aspectos de mobilidade, densidade e infraestrutura.",
  },
  {
    title: "Relatório de Impacto de Trânsito - RIT",
    description:
      "Avaliação detalhada dos impactos no sistema viário e proposição de medidas mitigadoras para grandes empreendimentos.",
  },
  {
    title: "Programa de Controle e Monitoramento Ambiental das Obras - PMCAO",
    description:
      "Desenvolvimento de diretrizes para controle ambiental durante a execução de obras, minimizando impactos ao meio ambiente.",
  },
  {
    title: "Plano de Gerenciamento de Resíduos Sólidos - PGRS",
    description:
      "Elaboração de estratégias para gestão sustentável de resíduos em empreendimentos, promovendo economia circular.",
  },
];
