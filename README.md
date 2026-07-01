# Site vitrine BT Power IDF

Projet Next.js + TypeScript + Tailwind CSS pour un site vitrine B2B de BT Power IDF.

Le site présente uniquement des informations génériques validées : conception et installation de tableaux électriques pour projets tertiaires et industriels. Il n'invente pas de chiffres clés, certifications, clients, projets réalisés, délais, avis, zones géographiques ou informations personnelles.

## Lancer le projet

```bash
pnpm install
pnpm dev
```

Le site est prévu pour `http://localhost:3000`.

## Fichiers de configuration

- `src/data/siteConfig.ts` : nom, baseline, textes principaux, navigation, valeurs, coordonnées, mentions légales, couleurs de marque.
- `src/data/mediaConfig.ts` : logos, photos réelles, vidéo, illustrations exclues ou abstraites, usages, textes alternatifs et statut `publishApproved`.
- `src/data/solutions.ts` : contenus génériques de la page "Nos solutions".
- `src/data/method.ts` : étapes de la méthode.

## Médias réels

Les médias réels sont dans `public/images/` :

- `Logo/` : logo officiel utilisé dans le header, le footer, la page contact et les métadonnées.
- `Photos de cablage/` : photos utilisées pour l'accueil, les solutions, la méthode et la galerie savoir-faire.
- `L'équipe qui travaille/` : photos utilisées pour l'entreprise, la méthode et le savoir-faire.
- `Photos de groupe/` : une photo principale pour la page "L'entreprise".
- `Film de présentation.mp4` : vidéo principale intégrée sur l'accueil avec `controls`, `playsInline` et `preload="metadata"`.
- `Film de présentation.mov` : version conservée en secours.

Les portraits individuels restent masqués par défaut tant que l'identité, la fonction et l'accord de publication ne sont pas validés.

## Médias exclus

Les fichiers générés ou non réels ne sont pas utilisés comme photos publiques de BT Power IDF :

- `bt-power-hero.png`
- `bt-power-workshop.svg`
- `project-industrie.svg`
- `project-logement.svg`
- `project-public.svg`
- `project-tertiaire.svg`

Ils sont recensés dans `mediaConfig.ts` avec `source: "illustration"` afin de ne pas les confondre avec les photos réelles.

## Couleurs et identité

Les couleurs sont centralisées dans `tailwind.config.ts` et rappelées dans `siteConfig.ts` :

- vert officiel : `#1ACD54`
- gris logo : `#989491`
- beige crème : `#F6F3EC`
- gris ardoise : `#4E4E4E`
- vert sauge : `#8AAE92`

Le vert officiel sert aux boutons, icônes et accents. Les petits textes sur fond clair utilisent le gris ardoise ou un vert très foncé pour préserver le contraste.

## Pages

- Accueil : hero photo réelle, vidéo, valeurs, secteurs, méthode, appel à l'action.
- L'entreprise : photo de groupe, photo d'équipe au travail, valeurs, structure équipe masquée.
- Nos solutions : contenus génériques, extensibles.
- Notre savoir-faire : galerie légère de photos réelles sans nom de client ou chantier.
- Notre méthode : quatre étapes illustrées par de vraies photos.
- Contact : formulaire prêt à connecter plus tard.

La page publique "Nos réalisations" est volontairement absente tant que des projets, clients et autorisations ne sont pas validés.

## Coordonnées et formulaire

Les coordonnées se modifient dans `src/data/siteConfig.ts`.

```ts
contactEmail: "s.medaric@btpower-idf.fr"
phone: "06 74 45 10 98"
addressLines: ["2 avenue Louis Blériot", "95740 Frépillon"]
formEndpoint: ""
```

Pour brancher le formulaire, renseigner `formEndpoint` avec l'URL du service d'envoi.

## Avant publication

À valider avant mise en ligne :

- domaine réel dans `siteConfig.url` ;
- e-mail, téléphone, adresse et horaires ;
- mentions légales ;
- politique de confidentialité ;
- autorisation de publication des photos réelles ;
- validation finale de la vidéo MP4 utilisée sur l'accueil.
- validation finale des nouveaux visuels de méthode, solutions et médaille EcoVadis.
