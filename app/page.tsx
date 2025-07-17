import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, FileText, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FelineAI
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Advanced AI-powered cat breed classification system. Choose your preferred prediction method below.
          </p>
        </div>

        {/* Method Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Image Classification Card */}
          <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Photo Analysis</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Upload a photo of your cat and let our advanced computer vision AI identify the breed instantly.
              </p>
              <Link href="/image-prediction">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Analyze Photo
                </Button>
              </Link>
            </div>
          </Card>

          {/* Tabular Classification Card */}
          <Card className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Provide comprehensive details about your cat's characteristics for precise breed prediction.
              </p>
              <Link href="/tabular-prediction">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
                  Fill Details
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-slate-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <h4 className="font-semibold mb-2">Advanced AI</h4>
              <p className="text-sm">State-of-the-art machine learning models</p>
            </div>
            <div className="text-slate-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h4 className="font-semibold mb-2">Instant Results</h4>
              <p className="text-sm">Get predictions in seconds</p>
            </div>
            <div className="text-slate-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">High Accuracy</h4>
              <p className="text-sm">Trained on extensive breed datasets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
