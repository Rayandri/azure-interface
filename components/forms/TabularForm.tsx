"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shuffle, RotateCcw } from "lucide-react"

interface TabularFormProps {
  onSubmit: (data: any) => void
  isLoading: boolean
}

// Dataset-based options and defaults
const formOptions = {
  Gender: ["male", "female"],
  Neutered_or_spayed: ["true", "false"],
  Fur_colour_dominant: ["white", "seal", "black", "red/cream", "blue", "brown", "silver", "cream"],
  Fur_pattern: ["solid", "colorpoint", "tabby", "bicolor", "tortie", "calico"],
  Eye_colour: ["blue", "yellow", "green", "amber", "orange", "hazel"],
  Allowed_outdoor: ["true", "false"],
  Preferred_food: ["dry food", "wet food", "mixed", "raw food", "fish", "chicken", "beef"],
  Country: ["France", "USA", "UK", "Germany", "Canada", "Australia", "Japan", "Italy"],
}

// Default values based on dataset statistics
const defaultValues = {
  Age_in_years: "2.5",
  Age_in_months: "30",
  Gender: "female",
  Neutered_or_spayed: "true",
  Body_length: "35",
  Weight: "4.2",
  Fur_colour_dominant: "white",
  Fur_pattern: "solid",
  Eye_colour: "blue",
  Allowed_outdoor: "false",
  Preferred_food: "dry food",
  Owner_play_time_minutes: "30",
  Sleep_time_hours: "14",
  Country: "France",
  Latitude: "48.8566",
  Longitude: "2.3522",
}

// Random value generators based on dataset ranges
const generateRandomValues = () => {
  const ageYears = (Math.random() * 10 + 0.25).toFixed(1)
  const ageMonths = (Number.parseFloat(ageYears) * 12).toFixed(0)

  return {
    Age_in_years: ageYears,
    Age_in_months: ageMonths,
    Gender: formOptions.Gender[Math.floor(Math.random() * formOptions.Gender.length)],
    Neutered_or_spayed: Math.random() > 0.4 ? "true" : "false", // 60% true based on dataset
    Body_length: (Math.random() * 40 + 20).toFixed(1), // 20-60cm range
    Weight: (Math.random() * 8 + 1.5).toFixed(1), // 1.5-9.5kg range
    Fur_colour_dominant:
      formOptions.Fur_colour_dominant[Math.floor(Math.random() * formOptions.Fur_colour_dominant.length)],
    Fur_pattern: formOptions.Fur_pattern[Math.floor(Math.random() * formOptions.Fur_pattern.length)],
    Eye_colour: formOptions.Eye_colour[Math.floor(Math.random() * formOptions.Eye_colour.length)],
    Allowed_outdoor: Math.random() > 0.6 ? "true" : "false", // 40% true
    Preferred_food: formOptions.Preferred_food[Math.floor(Math.random() * formOptions.Preferred_food.length)],
    Owner_play_time_minutes: (Math.random() * 120 + 10).toFixed(0), // 10-130 minutes
    Sleep_time_hours: (Math.random() * 8 + 10).toFixed(1), // 10-18 hours
    Country: formOptions.Country[Math.floor(Math.random() * formOptions.Country.length)],
    Latitude: (Math.random() * 140 - 70).toFixed(4), // -70 to 70
    Longitude: (Math.random() * 360 - 180).toFixed(4), // -180 to 180
  }
}

export function TabularForm({ onSubmit, isLoading }: TabularFormProps) {
  const [formData, setFormData] = useState(defaultValues)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRandomize = () => {
    const randomValues = generateRandomValues()
    setFormData(randomValues)
  }

  const handleReset = () => {
    setFormData(defaultValues)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const formFields = [
    {
      key: "Age_in_years",
      label: "Age (Years)",
      type: "number",
      placeholder: "e.g., 3",
      step: "0.1",
      min: "0",
      max: "20",
    },
    {
      key: "Age_in_months",
      label: "Age (Months)",
      type: "number",
      placeholder: "e.g., 36",
      min: "0",
      max: "240",
    },
    {
      key: "Gender",
      label: "Gender",
      type: "select",
      options: formOptions.Gender,
    },
    {
      key: "Neutered_or_spayed",
      label: "Neutered/Spayed",
      type: "select",
      options: formOptions.Neutered_or_spayed,
    },
    {
      key: "Body_length",
      label: "Body Length (cm)",
      type: "number",
      placeholder: "e.g., 45",
      step: "0.1",
      min: "10",
      max: "100",
    },
    {
      key: "Weight",
      label: "Weight (kg)",
      type: "number",
      placeholder: "e.g., 4.5",
      step: "0.1",
      min: "0.5",
      max: "15",
    },
    {
      key: "Fur_colour_dominant",
      label: "Dominant Fur Color",
      type: "select",
      options: formOptions.Fur_colour_dominant,
    },
    {
      key: "Fur_pattern",
      label: "Fur Pattern",
      type: "select",
      options: formOptions.Fur_pattern,
    },
    {
      key: "Eye_colour",
      label: "Eye Color",
      type: "select",
      options: formOptions.Eye_colour,
    },
    {
      key: "Allowed_outdoor",
      label: "Allowed Outdoor",
      type: "select",
      options: formOptions.Allowed_outdoor,
    },
    {
      key: "Preferred_food",
      label: "Preferred Food",
      type: "select",
      options: formOptions.Preferred_food,
    },
    {
      key: "Owner_play_time_minutes",
      label: "Play Time (minutes/day)",
      type: "number",
      placeholder: "e.g., 30",
      min: "0",
      max: "300",
    },
    {
      key: "Sleep_time_hours",
      label: "Sleep Time (hours/day)",
      type: "number",
      placeholder: "e.g., 14",
      step: "0.1",
      min: "8",
      max: "20",
    },
    {
      key: "Country",
      label: "Country",
      type: "select",
      options: formOptions.Country,
    },
    {
      key: "Latitude",
      label: "Latitude",
      type: "number",
      placeholder: "e.g., 48.8566",
      step: "0.0001",
      min: "-90",
      max: "90",
    },
    {
      key: "Longitude",
      label: "Longitude",
      type: "number",
      placeholder: "e.g., 2.3522",
      step: "0.0001",
      min: "-180",
      max: "180",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          type="button"
          onClick={handleReset}
          variant="outline"
          className="bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset to Defaults
        </Button>
        <Button
          type="button"
          onClick={handleRandomize}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Generate Random
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {formFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key} className="text-slate-200 font-medium">
                {field.label}
              </Label>
              {field.type === "select" ? (
                <Select
                  value={formData[field.key as keyof typeof formData]}
                  onValueChange={(value) => handleInputChange(field.key, value)}
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    {field.options?.map((option) => (
                      <SelectItem key={option} value={option} className="text-white hover:bg-slate-600 capitalize">
                        {option === "true" ? "Yes" : option === "false" ? "No" : option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400"
                  step={field.step}
                  min={field.min}
                  max={field.max}
                  required
                />
              )}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-700">
          <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Dataset Info</h3>
            <p className="text-xs text-slate-400">
              Based on a dataset of <span className="text-purple-400 font-semibold">1,071 cats</span> with breeds:
              <span className="text-cyan-400"> Ragdoll (41%)</span>,
              <span className="text-purple-400"> Maine Coon (32%)</span>,
              <span className="text-pink-400"> Angora (27%)</span>
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            {isLoading ? "Analyzing..." : "Predict Breed"}
          </Button>
        </div>
      </form>
    </div>
  )
}
