# Warcraft III Unit Encyclopaedia

A Vue 3 reference app for Warcraft III units and heroes. Pick a race, browse and filter its units, and open any unit for full stats, lore, strengths and weaknesses.

## Features

- **Race select screen** with themed cards, and filters synced to the URL so views can be shared and bookmarked
- **20 units and heroes** across the races, with icons, stats and race colour coding
- **Filters** for unit type and heroes
- **Unit detail pages** with stats, lore, strengths and weaknesses, a Hero badge, and a typewriter effect for unit quotes
- **Reusable components** (`UnitCard`, `StatCard`) using typed props and emits

## How it was built

Each feature was developed on its own branch and merged through a pull request (see the closed PRs), to practise a team-style Git workflow.

## Tech stack

Vue 3 (Composition API, `<script setup>`), TypeScript, Vue Router, Tailwind CSS, Vite, ESLint, Oxlint, Prettier

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (type-check and build), `npm run lint`, `npm run format`.

## Project structure

```
src/
├── data/units.ts          # Unit data and Unit interface
├── components/
│   ├── UnitCard.vue
│   └── StatCard.vue
├── views/
│   ├── RaceSelectView.vue
│   ├── HomeView.vue
│   └── UnitDetailView.vue
└── router/index.ts
```

Unit icons are from the Warcraft Wiki. Warcraft III is a trademark of Blizzard Entertainment; this is a non-commercial fan project.
