# Test Nuxt

Ce projet est un starter Nuxt 3 moderne avec :
- Internationalisation complète (français/anglais) via vue-i18n
- Sidebar/navigation dynamique et traduite
- Dark mode natif
- Formulaires multi-étapes avec validation
- Gestion d’avatar (upload, suppression, feedback)
- Icônes SVG extraites en composants réutilisables
- Accessibilité et responsive design

## Fonctionnalités principales

- **Internationalisation** : tous les textes utilisateurs sont traduits (fr-FR/en-US).
- **Sidebar & navigation** : labels dynamiques, traduction automatique, menu d’équipe simplifié.
- **Dark mode** : prise en charge complète, bascule dans l’UI.
- **Formulaires** : étapes, validation, messages d’erreur/succès traduits.
- **Gestion d’avatar** : upload, suppression, feedback utilisateur.
- **Icônes** : tous les SVG sont des composants Vue.

## Setup

Installez les dépendances :

```bash
# pnpm (recommandé)
pnpm install
# ou npm/yarn/bun
```

## Démarrer en développement

```bash
pnpm dev
# ou npm run dev, yarn dev, bun run dev
```

Accédez à [http://localhost:3000](http://localhost:3000)

## Production

Build :
```bash
pnpm build
# ou npm run build, yarn build, bun run build
```

Prévisualisation :
```bash
pnpm preview
# ou npm run preview, yarn preview, bun run preview
```

## Changer la langue

Utilisez le sélecteur de langue dans l’interface (header) pour basculer entre français et anglais. Les textes, menus, formulaires et messages s’adaptent automatiquement.

## Personnalisation

- Ajoutez vos propres clés de traduction dans `i18n/locales/fr-FR.json` et `en-US.json`.
- Modifiez la sidebar dans `app/layouts/default.vue` et les menus dans `AppSidebar.vue`.
- Les icônes sont dans `components/icons/`.

## Documentation

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [vue-i18n](https://vue-i18n.intlify.dev/)
