import { type NextRequest, NextResponse } from "next/server"

// Hardcoded endpoint for demo purposes
const VISION_ENDPOINT =
  "https://olalajadoreazurecvraimenttropbienleprojetdailleurs.westeurope.cloudapp.azure.com/vision/image"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Forward the request to the Azure endpoint
    const response = await fetch(VISION_ENDPOINT, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error("Vision API error:", error)
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}
