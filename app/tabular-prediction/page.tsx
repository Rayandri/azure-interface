"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"
import { TabularForm } from "@/components/forms/TabularForm"
import { ResultCard } from "@/components/ui/ResultCard"
import { PageHeader } from "@/components/ui/PageHeader"

export default function TabularPredictionPage() {
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePrediction = async (formData: any) => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/tabular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Prediction failed")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error:", error)
      setResult({ error: "Failed to analyze data. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <PageHeader
          icon={FileText}
          title="Detailed Analysis"
          description="Provide comprehensive information about your cat for precise breed prediction"
          gradient="from-purple-400 to-pink-400"
        />

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <div className="p-8">
              <TabularForm onSubmit={handlePrediction} isLoading={isLoading} />
            </div>
          </Card>

          {result && (
            <div className="mt-8">
              <ResultCard result={result} type="tabular" gradient="from-purple-400 to-pink-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
