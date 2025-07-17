"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadFormProps {
  onSubmit: (file: File) => void
  isLoading: boolean
}

export function ImageUploadForm({ onSubmit, isLoading }: ImageUploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const clearSelection = () => {
    setSelectedFile(null)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = () => {
    if (selectedFile) {
      onSubmit(selectedFile)
    }
  }

  return (
    <div className="space-y-6">
      {!selectedFile ? (
        <div
          className="border-2 border-dashed border-slate-600 rounded-lg p-12 text-center hover:border-cyan-400 transition-colors cursor-pointer group"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-all">
            <Upload className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Upload Cat Photo</h3>
          <p className="text-slate-400 mb-4">Drag and drop your image here, or click to browse</p>
          <p className="text-sm text-slate-500">Supports JPG, PNG, GIF up to 10MB</p>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden bg-slate-700">
            <Image
              src={previewUrl! || "/placeholder.svg"}
              alt="Selected cat"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={clearSelection}
              className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-slate-300">
              <ImageIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{selectedFile.name}</span>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              {isLoading ? "Analyzing..." : "Analyze Photo"}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
