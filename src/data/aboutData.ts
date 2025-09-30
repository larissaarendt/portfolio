import {
  Landmark,
  LampFloor,
  Construction,
  Building2,
  BookCheck,
  Award,
  GraduationCap,
  Calendar,
  Users,
  Lightbulb,
  Target,
  Ruler,
  Palette,
  MapPin,
  Globe,
  FileText,
} from "lucide-react";

export const aboutData = {
  idade: new Date().getFullYear() - new Date("2003-06-16").getFullYear(),
  filosofia: [
    `Tenho ${
      new Date().getFullYear() - new Date("2003-06-16").getFullYear()
    } anos e sou estudante de Arquitetura e Urbanismo. Iniciei minha trajetória profissional no setor de móveis corporativos, onde aprendi sobre funcionalidade e organização dos espaços. Em 2023, ingressei como estagiária na Prefeitura Municipal de Valinhos, onde tive meu primeiro contato com estudos urbanos e projetos de sinalização viária. Hoje, atuo em uma empresa especializada em estudos de impacto e licenciamento, vivenciando o outro lado: o de avaliar, redigir e conduzir processos técnicos.`,

    "Meu trabalho é focado em licenciamento ambiental, estudos de impacto urbano e acompanhamento ambiental de obras, sempre buscando soluções que conciliem desenvolvimento, responsabilidade socioambiental e viabilidade legal.",

    "Acredito que o urbanismo tem o poder de estruturar cidades mais justas e funcionais, onde cada estudo e projeto contribui para melhorar a relação entre espaço construído, meio ambiente e qualidade de vida da população. O que me move é justamente essa capacidade do urbanismo de transformar territórios e, através deles, transformar vidas.",
  ],
  habilidades: [
    { name: "AutoCAD", level: 95, icon: Ruler },
    { name: "SketchUp", level: 80, icon: Building2 },
    { name: "Revit", level: 50, icon: Building2 },
    { name: "Render", level: 50, icon: Building2 },
    { name: "Canva", level: 90, icon: Palette },
    { name: "QGIS / ArcGIS", level: 70, icon: MapPin },
    { name: "Google Earth Pro", level: 90, icon: Globe },
    { name: "Pacote Office", level: 90, icon: FileText },
  ],
  objetivos: [
    {
      prazo: "Curto Prazo (2025-2026)",
      descricao:
        "Concluir a graduação em Arquitetura e Urbanismo, aprofundar experiência em planejamento e estudos urbanos, licenciamento, aprovação de projetos, e desenvolver um TCC com excelência.",
    },
    {
      prazo: "Médio Prazo (2026-2028)",
      descricao: "Obter registro no CAU, especializar-me em estudos urbanos.",
    },
    {
      prazo: "Longo Prazo (2028+)",
      descricao:
        "Atuar em posição de destaque em empresas ou órgãos públicos na área de urbanismo, contribuir para políticas públicas urbanas, implementar projetos que integrem desenvolvimento, sustentabilidade e qualidade de vida, e mentorar novos profissionais na área.",
    },
  ],
  interests: [
    {
      name: "Arquitetura residencial, comercial e institucional",
      icon: Landmark,
      color: "text-purple-500",
    },
    {
      name: "Projeto de interiores e corportativos",
      icon: LampFloor,
      color: "text-pink-500",
    },
    { name: "Gestão de obras", icon: Construction, color: "text-red-500" },
    { name: "Planejamento Urbano", icon: Building2, color: "text-blue-500" },
    {
      name: "Aprovação de projetos",
      icon: BookCheck,
      color: "text-green-500",
    },
    { name: "Licenciamento", icon: Award, color: "text-amber-500" },
  ],
  achievements: [
    { title: "Projetos Desenvolvidos", value: "30+", icon: Building2 },
    { title: "Semestres Concluídos", value: "10", icon: GraduationCap },
    { title: "Horas de Estágio", value: "400+", icon: Calendar },
    { title: "Certificações", value: "5", icon: Award },
  ],
  tabs: [
    { id: "sobre", label: "Sobre", icon: Users },
    { id: "habilidades", label: "Habilidades", icon: Lightbulb },
    { id: "objetivos", label: "Objetivos", icon: Target },
  ],
};
