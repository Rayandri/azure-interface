# Felix Chat - Cat Breed Classification Interface

A modern web application for AI-powered cat breed classification using Azure Machine Learning services.

## Features

### 🖼️ Photo Analysis
- Upload cat photos for instant breed identification
- Advanced computer vision AI processing
- Real-time probability scores for multiple breeds
- Intuitive drag-and-drop interface

### 📊 Detailed Analysis  
- Comprehensive form-based breed prediction
- 16 different cat characteristics input
- Statistical data validation
- Random sample generation for testing

### 🎨 Modern UI
- Responsive design with gradient themes
- Dark mode interface
- Smooth animations and transitions
- Mobile-friendly layout

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Icons**: Lucide React
- **Backend**: Azure ML endpoints
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repo-url>
cd felix-chat-interface

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
felix-chat-interface/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── tabular/       # Tabular ML endpoint
│   │   └── vision/        # Vision ML endpoint
│   ├── image-prediction/  # Photo analysis page
│   ├── tabular-prediction/# Form analysis page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── forms/            # Form components
│   └── ui/               # UI components
├── lib/                  # Utilities
└── public/               # Static assets
```

## API Endpoints

### Vision Analysis
- **Endpoint**: `/api/vision`
- **Method**: POST
- **Input**: FormData with image file
- **Output**: Breed predictions with probabilities

### Tabular Analysis  
- **Endpoint**: `/api/tabular`
- **Method**: POST
- **Input**: JSON with cat characteristics
- **Output**: Breed classification results

## Dataset Information

Based on a curated dataset of **1,071 cats** featuring:
- **Ragdoll** (41%)
- **Maine Coon** (32%) 
- **Angora** (27%)

## Configuration

The application connects to Azure ML endpoints. Update the endpoint URLs in:
- `app/api/vision/route.ts`
- `app/api/tabular/route.ts`

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - see LICENSE file for details.
