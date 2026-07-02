export const knowHowContent = {
  analysis: {
    title: "Analyse technique",
    description:
      "En amont de la fabrication, nos chargés d'affaires analysent les documents techniques, les schémas et les contraintes du projet afin de proposer une solution adaptée au besoin du client.",
    imagePosition: "center center"
  },
  productionSteps: [
    {
      title: "Préparation de l'armoire",
      description:
        "La structure de l'armoire est préparée afin de recevoir les composants et de permettre une organisation rigoureuse de l'équipement.",
      imagePosition: "center center"
    },
    {
      title: "Montage des composants",
      description:
        "Les composants sont montés avec soin selon les exigences techniques et l'organisation prévue pour le projet.",
      imagePosition: "center center"
    },
    {
      title: "Câblage",
      description:
        "Le câblage est réalisé avec précision par les équipes de BT IDF, dans le respect des exigences techniques du projet.",
      imagePosition: "center center",
      featured: true
    },
    {
      title: "Finitions",
      description:
        "Les finitions apportent le soin nécessaire à la qualité finale de l'équipement avant les essais.",
      imagePosition: "center 45%"
    },
    {
      title: "Essais et contrôle",
      description:
        "Des essais et vérifications sont réalisés afin de s'assurer du bon fonctionnement et de la conformité de l'équipement avant sa livraison.",
      imagePosition: "center center"
    }
  ]
} as const;

export type KnowHowContent = typeof knowHowContent;
