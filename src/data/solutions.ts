export type Solution = {
  slug: string;
  title: string;
  description: string;
  useCases: string[];
  benefits: string[];
};

export const featuredSolutions = [
  {
    slug: "armoires-electriques",
    title: "Armoires électriques",
    description:
      "Des armoires électriques conçues pour répondre aux besoins spécifiques de vos projets tertiaires et industriels."
  },
  {
    slug: "coffrets-electriques",
    title: "Coffrets électriques",
    description:
      "Des coffrets électriques adaptés à votre environnement technique et aux exigences de votre projet."
  }
];

export const solutions: Solution[] = [
  {
    slug: "tableaux-electriques",
    title: "Tableaux électriques",
    description:
      "Conception et fabrication de tableaux électriques adaptés aux besoins du projet.",
    useCases: ["Distribution électrique", "Organisation des circuits", "Adaptation aux contraintes d'implantation"],
    benefits: ["Solution lisible", "Configuration adaptée", "Base évolutive"]
  },
  {
    slug: "tertiaire",
    title: "Solutions pour projets tertiaires",
    description:
      "Accompagnement des bâtiments professionnels avec des solutions de distribution claires et pratiques.",
    useCases: ["Bureaux", "Locaux professionnels", "Plateaux tertiaires"],
    benefits: ["Lecture simple", "Approche structurée", "Adaptation aux usages"]
  },
  {
    slug: "industriel",
    title: "Solutions pour projets industriels",
    description:
      "Réalisation de solutions électriques pour des environnements techniques et productifs.",
    useCases: ["Ateliers", "Locaux techniques", "Process et équipements"],
    benefits: ["Robustesse", "Précision de câblage", "Accompagnement technique"]
  },
  {
    slug: "accompagnement",
    title: "Accompagnement selon les besoins",
    description:
      "Une approche souple pour étudier, réaliser ou adapter une solution selon le contexte du projet.",
    useCases: ["Étude", "Adaptation", "Réalisation", "Contrôle"],
    benefits: ["Échange direct", "Solution contextualisée", "Suivi clair"]
  }
];
