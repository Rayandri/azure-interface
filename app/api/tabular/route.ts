import { type NextRequest, NextResponse } from "next/server"

// Hardcoded endpoint for demo purposes
const TABULAR_ENDPOINT =
  "https://olalajadoreazurecvraimenttropbienleprojetdailleurs.westeurope.cloudapp.azure.com/tabular/invocations"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    const transformedData = {
      Age_in_years: parseFloat(formData.Age_in_years),
      Age_in_months: parseInt(formData.Age_in_months),
      Gender: formData.Gender,
      Neutered_or_spayed: formData.Neutered_or_spayed === "true",
      Body_length: parseFloat(formData.Body_length),
      Weight: parseFloat(formData.Weight),
      Fur_colour_dominant: formData.Fur_colour_dominant,
      Fur_pattern: formData.Fur_pattern,
      Eye_colour: formData.Eye_colour,
      Allowed_outdoor: formData.Allowed_outdoor === "true",
      Preferred_food: formData.Preferred_food,
      Owner_play_time_minutes: parseInt(formData.Owner_play_time_minutes),
      Sleep_time_hours: parseFloat(formData.Sleep_time_hours),
      Country: formData.Country,
      Latitude: parseFloat(formData.Latitude),
      Longitude: parseFloat(formData.Longitude),
    }
    
    const dataframeFormat = {
      dataframe_split: {
        columns: ["Age_in_years","Age_in_months","Gender","Neutered_or_spayed","Body_length","Weight","Fur_colour_dominant","Fur_pattern","Eye_colour","Allowed_outdoor","Preferred_food","Owner_play_time_minutes","Sleep_time_hours","Country","Latitude","Longitude"],
        data: [transformedData]
      }
    }

    const response = await fetch(TABULAR_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataframeFormat),
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
