import { type NextRequest, NextResponse } from "next/server"

// Hardcoded endpoint for demo purposes
const TABULAR_ENDPOINT =
  "https://olalajadoreazurecvraimenttropbienleprojetdailleurs.westeurope.cloudapp.azure.com/tabular/invocations"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Forward the request to the Azure endpoint
    const response = await fetch(TABULAR_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error("Tabular API error:", error)
    return NextResponse.json({ error: "Failed to process tabular data" }, { status: 500 })
  }
}
