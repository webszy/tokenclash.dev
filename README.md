# TokenClash Web

The official landing page for TokenClash, a local-first AI gateway that routes multiple providers through one OpenAI-compatible endpoint.

## Stack

- Astro 7 with strict TypeScript and static output
- Tailwind CSS 4
- MDX support
- ESLint with Astro rules
- Prettier with Astro formatting

## Project structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ArchitectureDiagram.astro
│   │   ├── CodeExample.astro
│   │   ├── Comparison.astro
│   │   ├── FeatureCard.astro
│   │   ├── FooterCTA.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Roadmap.astro
│   ├── config/site.ts
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## Local development

```bash
npm install
npm run dev
```

Astro prints the local URL after the development server starts.

## Verification

```bash
npm run lint
npm run format:check
npm run build
```

The production output is generated in `dist/`.

## External links

The official repository URL is configured in `src/config/site.ts` and shared by the GitHub controls across the page.
