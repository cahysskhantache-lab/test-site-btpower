export const siteConfig = {
  name: "BT IDF",
  tagline: "Conception et réalisation d'armoires électriques",
  description:
    "BT IDF conçoit, fabrique et livre des armoires et coffrets électriques destinés aux installateurs et à leurs projets tertiaires, industriels, logement ou secteur public.",
  url: "https://example.com",
  locale: "fr_FR",
  contact: {
    contactEmail: "contact@btpower-idf.fr",
    phone: "06 74 45 10 98",
    addressLines: ["2 avenue Louis Blériot", "95740 Frépillon"],
    hours: ["Du lundi au vendredi — 7h30 à 17h00"],
    formEndpoint: ""
  },
  social: {
    linkedinUrl: "https://fr.linkedin.com/in/soci%C3%A9t%C3%A9-bt-power-idf-6849a8213"
  },
  analytics: {
    googleAnalyticsId: "",
    matomoUrl: "",
    matomoSiteId: ""
  },
  brandColors: {
    green: "#1ACD54",
    logoGray: "#989491",
    cream: "#F6F3EC",
    slate: "#4E4E4E",
    sage: "#8AAE92",
    darkGreen: "#123821"
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "L'entreprise", href: "/entreprise" },
    { label: "Nos solutions", href: "/solutions" },
    { label: "Notre savoir-faire", href: "/savoir-faire" },
    { label: "Notre méthode", href: "/notre-methode" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    title: "Des tableaux électriques pensés pour vos projets.",
    subtitle:
      "BT IDF conçoit, fabrique et livre des armoires et coffrets électriques adaptés aux projets tertiaires et industriels."
  },
  values: [
    {
      title: "Proximité",
      description:
        "Un échange direct pour comprendre les besoins et garder une vision claire du projet."
    },
    {
      title: "Qualité",
      description:
        "Une attention portée aux détails, au câblage et à la lisibilité des ensembles."
    },
    {
      title: "Réactivité",
      description:
        "Une organisation pensée pour avancer avec méthode et répondre aux demandes."
    },
    {
      title: "Précision",
      description:
        "Des réalisations techniques soignées, adaptées aux contraintes du terrain."
    }
  ],
  sectors: [
    {
      title: "Industrie",
      description:
        "Des tableaux électriques pensés pour les environnements techniques et productifs."
    },
    {
      title: "Tertiaire",
      description:
        "Des solutions adaptées aux bâtiments professionnels et aux usages du quotidien."
    },
    {
      title: "Logement",
      description:
        "Des configurations lisibles pour accompagner les besoins de distribution."
    },
    {
      title: "Secteur public",
      description:
        "Une approche structurée pour les équipements collectifs et bâtiments publics."
    }
  ],
  company: {
    intro:
      "BT IDF conçoit, fabrique et livre des armoires et coffrets électriques pour accompagner les installateurs et leurs projets tertiaires, industriels, logement ou secteur public avec une approche concrète, humaine et technique.",
    mission:
      "Apporter des solutions de distribution électrique claires, adaptées et réalisées avec soin.",
    commitments: [
      "Comprendre le contexte du projet avant de proposer une solution",
      "Travailler avec précision sur les détails de conception et de câblage",
      "Garder une communication simple avec les interlocuteurs du projet",
      "Rester attentif à la qualité d'exécution jusqu'à la livraison"
    ],
    values: ["Proximité", "Qualité", "Réactivité", "Précision"],
    keyFigures: [
      { label: "Chiffre clé à compléter", value: "", visible: false },
      { label: "Chiffre clé à compléter", value: "", visible: false },
      { label: "Chiffre clé à compléter", value: "", visible: false }
    ],
    teamSection: {
      enabled: false,
      note:
        "Section prévue pour présenter l'équipe lorsque les identités, fonctions et accords de publication seront validés."
    }
  },
  legal: {
    companyName: "BT Power IDF",
    legalForm: "À compléter",
    shareCapital: "À compléter",
    registrationNumber: "À compléter",
    vatNumber: "À compléter",
    director: "À compléter",
    hostingProvider: "À compléter",
    publicationDirector: "À compléter"
  }
} as const;

export type SiteConfig = typeof siteConfig;
