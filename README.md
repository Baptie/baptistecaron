# Baptiste Caron — Portfolio

Site vitrine personnel de Baptiste Caron (Chef de projet IT), présentant son parcours, ses projets récents et un moyen de contact. Site one-page en français, déployé sur GitHub Pages.

🔗 **[baptie.github.io](https://baptie.github.io/)**

## Sommaire

- [Stack technique](#stack-technique)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Design](#design)
- [Contenu](#contenu)
- [Déploiement](#déploiement)

## Stack technique

- **React 18** + **TypeScript**, bootstrappé avec Create React App (`react-scripts`)
- **SCSS** pour le style, pas de framework CSS externe
- **i18next** / **react-i18next** pour la structure multilingue (fr par défaut, en disponible)
- **gh-pages** pour le déploiement statique sur GitHub Pages

Aucune librairie de composants UI, de routing ou d'animation externe : le carousel, le tilt des cartes, le scrollspy de la navbar et les transitions sont tous faits "à la main" en CSS/TS.

## Démarrage

```bash
npm install
npm start        # serveur de dev sur http://localhost:3000
npm run build     # build de production dans /build
npm run deploy    # build + publication sur gh-pages
```

## Structure du projet

```
src/
├── components/
│   ├── navbar/       # header desktop + bottom tab bar mobile, modale de contact
│   ├── cover/         # hero / présentation
│   ├── projets/       # carousel de projets + popup "dossier" (projet/)
│   ├── parcours/      # parcours pro/associatif (poste/)
│   ├── about/         # section à propos
│   ├── footer/
│   └── shared/        # composants réutilisables (titres de section, carousel générique)
├── data/              # contenu (projets.json, postes.json)
├── locales/           # traductions fr/en
├── variables.scss     # palette, polices, breakpoint
└── app.scss           # styles globaux
```

Le contenu (projets, postes occupés) est piloté par les fichiers JSON dans `src/data/`, pas codé en dur dans les composants — pour modifier un projet ou une expérience, il suffit d'éditer le JSON correspondant.

## Design

### Direction artistique : le "dossier"

L'idée directrice du site est de traiter chaque élément de contenu (un projet, un contact) comme une **fiche de dossier professionnel** qu'on vient consulter : un onglet latéral vertical, un numéro de dossier, des libellés en petites capitales espacées ("CONTEXTE", "ACTIONS CLÉS", "IMPACT"), sur un fond vert sombre texturé d'une grille de points fine — une référence discrète au papier quadrillé / aux classeurs administratifs, sans tomber dans le pastiche.

Cette identité vit principalement dans les popups (fiche projet, modale de contact), et se retrouve ensuite **diffusée avec retenue** dans le reste du site : les eyebrows de section ("Cas d'étude", "Suivez", "En savoir plus") reprennent les mêmes majuscules espacées, le footer reprend la même texture de points. Le corps du site, lui, reste volontairement clair, minimal et aéré — le "dossier" est un accent, pas un thème imposé partout.

### Palette

| Couleur | Usage |
|---|---|
| ![#0A3C30](https://placehold.co/15x15/0A3C30/0A3C30.png) `$dark-emerald` `#0A3C30` | Fonds sombres (popups, footer) |
| ![#00674F](https://placehold.co/15x15/00674F/00674F.png) `$emerald` `#00674F` | Couleur de marque, CTA, accents |
| ![#3d8f7c](https://placehold.co/15x15/3d8f7c/3d8f7c.png) `$light-emerald` `#3d8f7c` | Accents secondaires, bordures, hover |
| ![#061F19](https://placehold.co/15x15/061F19/061F19.png) `$ink` `#061F19` | Texte sur fond clair (réserve) |
| ![#EFF6F3](https://placehold.co/15x15/EFF6F3/EFF6F3.png) `$paper` `#EFF6F3` | Texte clair sur fond sombre |
| ![#C9DAD4](https://placehold.co/15x15/C9DAD4/C9DAD4.png) `$paper-dim` `#C9DAD4` | Texte secondaire sur fond sombre |

Complétée par du noir/blanc/gris neutres pour le corps du site (`$black`, `$white`, `$gray`, `$dark-gray`).

### Typographie

- **Google Sans Flex** — titres et texte courant
- **Space Grotesk** — libellés techniques, tags, éléments d'interface (eyebrows, boutons, chips) : une police à espacement plus géométrique, réservée aux éléments qui doivent lire comme des "métadonnées" plutôt que du texte éditorial

### Responsive : une version mobile, pas un site rétréci

Sous 1024px (`$bp-mobile`), le site ne se contente pas de rétrécir la mise en page desktop : certains patterns changent de nature pour se rapprocher d'une application mobile native :

- navigation remplacée par une **barre d'onglets fixe en bas d'écran**, section active suivie via `IntersectionObserver`
- le carousel de projets à défilement automatique devient un **carousel swipé au doigt** avec pagination par points (scroll-snap)
- le parcours pro/associatif à deux colonnes devient un **sélecteur à onglets**
- les effets `:hover` (tilt, glare, lift des cartes projet) sont désactivés sur tactile via `(hover: hover) and (pointer: fine)`

## Contenu

Les projets et le parcours affichés sont éditables sans toucher au code :

- `src/data/projets.json` — les 6 derniers projets affichés dans le carousel et leur popup détaillée (contexte, rôle, période, actions clés, impact chiffré)
- `src/data/postes.json` — expériences professionnelles et associatives

## Déploiement

Le site est publié sur GitHub Pages via `npm run deploy` (`gh-pages -d build`), à l'adresse définie par le champ `homepage` du `package.json`.

## Contact

Baptiste Caron — contact.baptistecaron@gmail.com
