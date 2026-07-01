export type MediaSource = "real" | "illustration";
export type MediaType = "image" | "video" | "logo";

export type MediaItem = {
  id: string;
  path: string;
  type: MediaType;
  alt: string;
  usage: string;
  source: MediaSource;
  publishApproved: boolean;
  width?: number;
  height?: number;
  notes?: string;
};

export const mediaConfig = {
  logos: {
    primary: {
      id: "logo-primary",
      path: "/images/Logo/Original%20on%20Transparent.png",
      type: "logo",
      alt: "Logo officiel BT Power IDF",
      usage: "Header et page contact",
      source: "real",
      publishApproved: true,
      width: 5000,
      height: 1403
    },
    footer: {
      id: "logo-footer",
      path: "/images/Logo/White%20on%20Transparent.png",
      type: "logo",
      alt: "Logo officiel BT Power IDF en blanc",
      usage: "Footer sur fond sombre",
      source: "real",
      publishApproved: true,
      width: 5000,
      height: 1403
    },
    contact: {
      id: "logo-contact",
      path: "/images/Logo/Original.png",
      type: "logo",
      alt: "Logo officiel BT Power IDF",
      usage: "Page contact",
      source: "real",
      publishApproved: true,
      width: 5000,
      height: 5000
    },
    mark: {
      id: "logo-mark",
      path: "/images/Logo/bt-power-mark.png",
      type: "logo",
      alt: "Pictogramme éclair BT Power IDF",
      usage: "Marqueur graphique discret",
      source: "real",
      publishApproved: true,
      width: 650,
      height: 1403
    }
  },
  home: {
    hero: {
      id: "hero-production-presentation",
      path: "/images/Photo%20pr%C3%A9sentation.jpeg",
      type: "image",
      alt: "Collaborateur BT Power IDF travaillant sur le câblage en atelier",
      usage: "Accueil - hero",
      source: "real",
      publishApproved: false,
      width: 1600,
      height: 1200
    },
    videoPoster: {
      id: "video-poster",
      path: "/images/Photos%20de%20cablage/DSC03445.jpg",
      type: "image",
      alt: "Détail de composants dans un tableau électrique",
      usage: "Accueil - poster vidéo",
      source: "real",
      publishApproved: false,
      width: 1630,
      height: 2048
    },
    videoMp4: {
      id: "presentation-film-mp4",
      path: "/images/Film%20de%20pr%C3%A9sentation.mp4",
      type: "video",
      alt: "Film de présentation BT Power IDF",
      usage: "Accueil - vidéo de présentation principale",
      source: "real",
      publishApproved: false,
      notes: "Version MP4 disponible en secours pour une meilleure compatibilité navigateur."
    },
    videoMov: {
      id: "presentation-film-mov",
      path: "/images/Film%20de%20pr%C3%A9sentation.mov",
      type: "video",
      alt: "Film de présentation BT Power IDF au format MOV",
      usage: "Accueil - vidéo de présentation principale",
      source: "real",
      publishApproved: false,
      notes: "Format demandé pour la vidéo principale ; le MP4 reste disponible en fallback."
    }
  },
  company: {
    group: {
      id: "company-group",
      path: "/images/Photos%20de%20groupe/DSC03426.jpg",
      type: "image",
      alt: "Équipe BT Power IDF réunie devant l'atelier",
      usage: "Page entreprise - photo de groupe",
      source: "real",
      publishApproved: false,
      width: 2048,
      height: 1049
    },
    work: {
      id: "company-workshop",
      path: "/images/L'équipe qui travaille/DSC03448.jpg",
      type: "image",
      alt: "Équipe BT Power IDF travaillant sur des équipements en atelier",
      usage: "Page entreprise - équipe au travail",
      source: "real",
      publishApproved: false,
      width: 2048,
      height: 1365
    },
    study: {
      id: "company-study-office",
      path: "/images/Bureau d'étude.jpeg",
      type: "image",
      alt: "Bureau d'études BT Power IDF en analyse de projet",
      usage: "Page entreprise et savoir-faire - analyse technique",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    }
  },
  knowHow: {
    analysis: {
      id: "know-how-analysis-study-office",
      path: "/images/Etude%20technique.jpeg",
      type: "image",
      alt: "Étude technique d'un projet électrique sur poste de travail",
      usage: "Savoir-faire - analyse technique",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    },
    production: [
      {
        id: "know-how-carcass",
        path: "/images/Carcasse.jpeg",
        type: "image",
        alt: "Carcasse d'armoire électrique préparée en atelier",
        usage: "Savoir-faire - préparation de l'armoire",
        source: "real",
        publishApproved: false,
        width: 1200,
        height: 1600
      },
      {
        id: "know-how-components-mounting",
        path: "/images/Montage%20des%20composants.jpeg",
        type: "image",
        alt: "Montage des composants dans une armoire électrique",
        usage: "Savoir-faire - montage des composants",
        source: "real",
        publishApproved: false,
        width: 1200,
        height: 1600
      },
      {
        id: "know-how-cabling",
        path: "/images/Cablage.jpeg",
        type: "image",
        alt: "Câblage d'une armoire électrique en atelier",
        usage: "Savoir-faire - câblage",
        source: "real",
        publishApproved: false,
        width: 1200,
        height: 1600
      },
      {
        id: "know-how-finishing",
        path: "/images/Finitions.jpeg",
        type: "image",
        alt: "Finitions d'une armoire électrique en atelier",
        usage: "Savoir-faire - finitions",
        source: "real",
        publishApproved: false,
        width: 3840,
        height: 5120
      },
      {
        id: "know-how-control",
        path: "/images/L'équipe qui travaille/DSC03465.jpg",
        type: "image",
        alt: "Contrôle d'un équipement électrique en atelier",
        usage: "Savoir-faire - essais et contrôle",
        source: "real",
        publishApproved: false,
        width: 1455,
        height: 2048
      }
    ],
    cablingDetails: [
      {
        id: "know-how-cabling-detail-1",
        path: "/images/Photos%20de%20cablage/DSC03444.jpg",
        type: "image",
        alt: "Détail de raccordement électrique en atelier",
        usage: "Savoir-faire - détail de câblage",
        source: "real",
        publishApproved: false,
        width: 1365,
        height: 2048
      },
      {
        id: "know-how-cabling-detail-2",
        path: "/images/Photos%20de%20cablage/DSC03450.jpg",
        type: "image",
        alt: "Composant électrique raccordé avec câbles organisés",
        usage: "Savoir-faire - détail de câblage",
        source: "real",
        publishApproved: false,
        width: 1365,
        height: 2048
      },
      {
        id: "know-how-cabling-detail-3",
        path: "/images/Photos%20de%20cablage/DSC03449.jpg",
        type: "image",
        alt: "Faisceaux de câbles dans une armoire électrique",
        usage: "Savoir-faire - détail de câblage",
        source: "real",
        publishApproved: false,
        width: 1365,
        height: 2048
      }
    ]
  },
  method: [
    {
      id: "method-technical-study",
      path: "/images/Etude%20technique.jpeg",
      type: "image",
      alt: "Étude technique d'un projet électrique sur poste de travail",
      usage: "Méthode - analyse et étude du besoin",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    },
    {
      id: "method-offer-validation",
      path: "/images/Serrer_main.jpg",
      type: "image",
      alt: "Poignée de main illustrant la validation d'un projet",
      usage: "Méthode - offre et validation",
      source: "real",
      publishApproved: false,
      width: 962,
      height: 503
    },
    {
      id: "method-production-prep",
      path: "/images/Photos%20de%20cablage/DSC03429.jpg",
      type: "image",
      alt: "Préparation des éléments nécessaires à la production électrique",
      usage: "Méthode - préparation de production",
      source: "real",
      publishApproved: false,
      width: 1365,
      height: 2048,
      notes: "Image demandée pour l'étape de préparation de production ; vérifier les éléments visibles avant publication."
    },
    {
      id: "method-fabrication",
      path: "/images/L'équipe qui travaille/DSC03463.jpg",
      type: "image",
      alt: "Équipe BT Power IDF travaillant sur la fabrication d'un équipement électrique",
      usage: "Méthode - fabrication",
      source: "real",
      publishApproved: false,
      width: 2048,
      height: 1365
    },
    {
      id: "method-control-delivery",
      path: "/images/Livraison.jpeg",
      type: "image",
      alt: "Équipement électrique préparé pour la livraison",
      usage: "Méthode - contrôle et livraison",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    }
  ],
  afterSales: {
    id: "after-sales-service",
    path: "/images/Service%20apr%C3%A8s%20vente.jpeg",
    type: "image",
    alt: "Interlocuteur BT Power IDF disponible par téléphone pour le suivi après livraison",
    usage: "Méthode - suivi et service après-vente",
    source: "real",
    publishApproved: false,
    width: 1200,
    height: 1600
  },
  solutionCards: [
    {
      id: "solution-armoire-finie",
      path: "/images/Armoire%20finie.png",
      type: "image",
      alt: "Armoire électrique finie présentée de face",
      usage: "Nos solutions - armoires électriques",
      source: "real",
      publishApproved: false,
      width: 1086,
      height: 1448
    },
    {
      id: "solution-coffret-ferme",
      path: "/images/Coffret%20ferm%C3%A9.jpeg",
      type: "image",
      alt: "Coffret électrique fermé présenté en atelier",
      usage: "Nos solutions - coffrets électriques",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    }
  ],
  solutionDetail: {
    openCabinet: {
      id: "solution-coffret-ouvert",
      path: "/images/Coffret%20ouvert.jpeg",
      type: "image",
      alt: "Coffret électrique ouvert montrant l'organisation intérieure",
      usage: "Nos solutions - détail coffret ouvert",
      source: "real",
      publishApproved: false,
      width: 1200,
      height: 1600
    }
  },
  solutionsHeader: {
    id: "solutions-header-cabling-detail",
    path: "/images/Photos%20de%20cablage/DSC03450.jpg",
    type: "image",
    alt: "Détail de câblage et de composants électriques",
    usage: "Nos solutions - en-tête",
    source: "real",
    publishApproved: false,
    width: 1365,
    height: 2048
  },
  trust: {
    ecovadisBronze: {
      id: "ecovadis-bronze-medal",
      path: "/images/Certification%20ECOVADIS.png",
      type: "image",
      alt: "Médaille de bronze EcoVadis obtenue par BT Power IDF",
      usage: "Accueil - engagement responsable",
      source: "real",
      publishApproved: false,
      width: 1254,
      height: 1254
    }
  },
  gallery: [
    {
      id: "gallery-cabling-precision",
      path: "/images/Photos%20de%20cablage/DSC03431.jpg",
      type: "image",
      alt: "Câblage bleu et raccordements dans un tableau électrique",
      usage: "Savoir-faire - galerie",
      source: "real",
      publishApproved: false,
      width: 1365,
      height: 2048
    },
    {
      id: "gallery-components",
      path: "/images/Photos%20de%20cablage/DSC03445.jpg",
      type: "image",
      alt: "Alignement de composants dans un tableau électrique",
      usage: "Savoir-faire - galerie",
      source: "real",
      publishApproved: false,
      width: 1630,
      height: 2048
    },
    {
      id: "gallery-assembly",
      path: "/images/Photos%20de%20cablage/DSC03451.jpg",
      type: "image",
      alt: "Assemblage manuel de composants électriques",
      usage: "Savoir-faire - galerie",
      source: "real",
      publishApproved: false,
      width: 1365,
      height: 2048
    },
    {
      id: "gallery-work",
      path: "/images/L'équipe qui travaille/DSC03448.jpg",
      type: "image",
      alt: "Travail d'équipe en atelier",
      usage: "Savoir-faire - galerie",
      source: "real",
      publishApproved: false,
      width: 2048,
      height: 1365
    },
    {
      id: "gallery-cabinet",
      path: "/images/Photos%20de%20cablage/DSC03461.jpg",
      type: "image",
      alt: "Intérieur d'un coffret électrique en cours de préparation",
      usage: "Savoir-faire - galerie",
      source: "real",
      publishApproved: false,
      width: 1365,
      height: 2048
    }
  ],
  illustrations: [
    {
      id: "ai-hero-excluded",
      path: "/images/bt-power-hero.png",
      type: "image",
      alt: "Illustration générée non utilisée publiquement",
      usage: "Exclu des pages publiques",
      source: "illustration",
      publishApproved: false
    },
    {
      id: "ai-workshop-excluded",
      path: "/images/bt-power-workshop.svg",
      type: "image",
      alt: "Illustration générée non utilisée publiquement",
      usage: "Exclu des pages publiques",
      source: "illustration",
      publishApproved: false
    },
    {
      id: "sector-industrie-icon",
      path: "/images/project-industrie.svg",
      type: "image",
      alt: "Pictogramme abstrait industrie",
      usage: "Illustration abstraite uniquement",
      source: "illustration",
      publishApproved: false
    },
    {
      id: "sector-tertiaire-icon",
      path: "/images/project-tertiaire.svg",
      type: "image",
      alt: "Pictogramme abstrait tertiaire",
      usage: "Illustration abstraite uniquement",
      source: "illustration",
      publishApproved: false
    },
    {
      id: "sector-logement-icon",
      path: "/images/project-logement.svg",
      type: "image",
      alt: "Pictogramme abstrait logement",
      usage: "Illustration abstraite uniquement",
      source: "illustration",
      publishApproved: false
    },
    {
      id: "sector-public-icon",
      path: "/images/project-public.svg",
      type: "image",
      alt: "Pictogramme abstrait secteur public",
      usage: "Illustration abstraite uniquement",
      source: "illustration",
      publishApproved: false
    }
  ],
  restricted: {
    portraits:
      "Les portraits individuels ne sont pas affichés tant que l'identité, la fonction et l'accord de publication ne sont pas validés.",
    sensitivePhotos:
      "Les photos montrant documents, étiquettes sensibles ou informations lisibles sont exclues des pages publiques."
  }
} as const;

export type MediaConfig = typeof mediaConfig;
