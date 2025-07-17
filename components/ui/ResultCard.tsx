import { Card } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Sparkles, Trophy, Target } from "lucide-react"

interface ResultCardProps {
  result: any
  type: "image" | "tabular"
  gradient: string
}

export function ResultCard({ result, type, gradient }: ResultCardProps) {
  if (result.error) {
    return (
      <Card className="bg-red-900/20 border-red-500/50 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
            <h3 className="text-xl font-semibold text-red-400">Error</h3>
          </div>
          <p className="text-red-300">{result.error}</p>
        </div>
      </Card>
    )
  }

  const isPhotoAnalysis = result.predictions && Array.isArray(result.predictions)

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mr-4`}>
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Prediction Complete</h3>
            <p className="text-slate-400">Analysis successful</p>
          </div>
        </div>

        <div className="space-y-4">
          {isPhotoAnalysis ? (
            <>
              <div className="bg-slate-700/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center mb-4">
                  <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="font-semibold text-white text-lg">Breed Predictions</span>
                </div>
                
                {result.predictions
                  .sort((a: any, b: any) => b.probability - a.probability)
                  .map((prediction: any, index: number) => {
                    const percentage = Math.round(prediction.probability * 100)
                    const isTopPrediction = index === 0
                    
                    return (
                      <div key={prediction.tagName} className={`p-4 rounded-lg ${isTopPrediction ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30' : 'bg-slate-600/30'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            {isTopPrediction && <Target className="w-4 h-4 text-emerald-400 mr-2" />}
                            <span className={`font-semibold capitalize ${isTopPrediction ? 'text-emerald-300 text-lg' : 'text-slate-200'}`}>
                              {prediction.tagName}
                            </span>
                          </div>
                          <span className={`font-bold ${isTopPrediction ? 'text-emerald-300 text-lg' : 'text-slate-300'}`}>
                            {percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${isTopPrediction ? 'bg-gradient-to-r from-emerald-400 to-blue-400' : 'bg-slate-400'}`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
            </>
          ) : (
            <>
              {result.breed && (
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="font-semibold text-white">Predicted Breed</span>
                  </div>
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {result.breed}
                  </p>
                </div>
              )}

              {result.confidence && (
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">Confidence</span>
                    <span className="text-green-400 font-bold">{Math.round(result.confidence * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${gradient}`}
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <details className="bg-slate-700/30 rounded-lg p-4">
            <summary className="cursor-pointer text-slate-300 font-medium">View Raw Response</summary>
            <pre className="mt-2 text-xs text-slate-400 overflow-auto">{JSON.stringify(result, null, 2)}</pre>
          </details>
        </div>
      </div>
    </Card>
  )
}
