# Felix Chat

Interface web pour classification de races de chats avec IA.

## Fonctionnalités

- **Analyse photo** : Upload d'image pour identification de race
- **Analyse détaillée** : Formulaire avec caractéristiques du chat
- **Interface moderne** : Design responsive et animations

## Installation

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Tech Stack

- Next.js 14 + React + TypeScript
- Tailwind CSS + Shadcn/ui
- Azure ML endpoints

## API

- `/api/vision` - Analyse d'image
- `/api/tabular` - Analyse par formulaire
