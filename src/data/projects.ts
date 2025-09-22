export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  images: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Farol das Letras - Biblioteca",
    category: "Projeto Arquitetônico",
    description:
      "O conceito do projeto 'Farol das Letras' busca integrar o ambiente de estudo com a paisagem circundante, em especial a vista privilegiada para o horizonte oferecida pela localização em frente ao Aruatos da Paz, um espaço de grande valor cultural e simbólico para a cidade. A biblioteca deve funcionar como um marco visual, evocando a ideia de um farol que guia e inspira o saber, proporcionando uma experiência de aprendizado imersiva e conectada com o ambiente natural e urbano.",
    year: "2024",
    images: [
      "/images/farol-das-letras-fachada-principal.jpg",
      "/images/farol-das-letras-perspectiva-aerea.jpg",
      "/images/farol-das-letras-vista-lateral.jpg",
      "/images/farol-das-letras-planta-baixa-terreo.jpg",
      "/images/farol-das-letras-planta-baixa-superior.jpg",
      "/images/farol-das-letras-corte-longitudinal.jpg",
      "/images/farol-das-letras-corte-transversal.jpg",
      "/images/farol-das-letras-interior-biblioteca.jpg",
      "/images/farol-das-letras-area-leitura.jpg",
      "/images/farol-das-letras-implantacao.jpg",
      "/images/farol-das-letras-detalhes-construtivos.jpg",
    ],
    featured: true,
  },
  {
    title: "Hotel Boutique",
    category: "Projeto Arquitetônico",
    description:
      "Desenvolvimento de projeto hoteleiro com conceito boutique, priorizando a experiência do hóspede e integração com o contexto urbano local.",
    year: "2024",
    images: [
      "/images/hotel-boutique-main.jpg",
      "/images/hotel-boutique-plant1.jpg",
      "/images/hotel-boutique-plant2.jpg",
    ],
  },
  {
    title: "ILPI e Centro de Atenção",
    category: "Projeto Arquitetônico",
    description:
      "Instituição de Longa Permanência para Idosos integrada a centro de atenção, focando em acessibilidade universal e qualidade de vida.",
    year: "2024",
    images: [
      "/images/ilpi-main.jpg",
      "/images/ilpi-plant1.jpg",
      "/images/ilpi-plant2.jpg",
    ],
  },
  {
    title: "Projeto de Quarto Residencial",
    category: "Projeto de Interior",
    description:
      "Design de interiores para quarto com foco em funcionalidade, conforto e aproveitamento otimizado do espaço disponível.",
    year: "2024",
    images: [
      "/images/quarto-main.jpg",
      "/images/quarto-plant1.jpg",
      "/images/quarto-render.jpg",
    ],
  },
];
