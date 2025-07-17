# Felix Chat

Interface web pour classification de races de chats avec IA Azure.

🔗 **Demo live** : [azure-interface-epita.vercel.app](https://azure-interface-epita.vercel.app/)

## À propos

Application utilisant des modèles d'IA Azure pour identifier les races de chats selon deux méthodes :
- Vision par ordinateur pour l'analyse d'images
- Classification tabulaire basée sur les caractéristiques physiques

## Fonctionnalités

- **Analyse photo** : Upload d'image pour identification instantanée de race
- **Analyse détaillée** : Formulaire avec 16 caractéristiques du chat 
- **Interface moderne** : Design responsive avec thèmes gradient

## Installation

```bash
# Cloner le projet
git clone https://github.com/Rayandri/azure-interface.git
cd azure-interface

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Frontend** : Next.js 14 + React + TypeScript
- **UI** : Tailwind CSS + Shadcn/ui + Lucide icons
- **Backend** : Azure ML endpoints
- **Déploiement** : Vercel

## API Endpoints

- `POST /api/vision` - Analyse d'image (FormData)
- `POST /api/tabular` - Analyse par formulaire (JSON)

## Dataset

Basé sur un dataset de **1,071 chats** avec 3 races principales :
- Ragdoll (41%), Maine Coon (32%), Angora (27%)
