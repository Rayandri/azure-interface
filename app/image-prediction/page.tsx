"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"
import { ImageUploadForm } from "@/components/forms/ImageUploadForm"
import { ResultCard } from "@/components/ui/ResultCard"
import { PageHeader } from "@/components/ui/PageHeader"

export default function ImagePredictionPage() {
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrediction = async (file: File) => {
    setIsLoading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("imageData", file)

      const response = await fetch("/api/vision", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Prediction failed")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error:", error)
      setResult({ error: "Failed to analyze image. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <PageHeader
          icon={Camera}
          title="Photo Analysis"
          description="Upload a clear photo of your cat for instant breed identification"
          gradient="from-cyan-400 to-blue-400"
        />

        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <div className="p-8">
              <ImageUploadForm onSubmit={handlePrediction} isLoading={isLoading} />
            </div>
          </Card>

          {result && (
            <div className="mt-8">
              <ResultCard result={result} type="image" gradient="from-cyan-400 to-blue-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
