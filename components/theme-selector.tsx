"use client"

import { useState } from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { id: "default", name: "Teal" },
    { id: "purple", name: "Purple" },
    { id: "blue", name: "Blue" },
    { id: "green", name: "Green" },
    { id: "orange", name: "Orange" },
    { id: "red", name: "Red" },
  ]

  const setTheme = (themeId: string) => {
    // Remove all theme classes
    document.documentElement.classList.remove(...themes.map((t) => `theme-${t.id}`))

    // Add the selected theme class if it's not the default
    if (themeId !== "default") {
      document.documentElement.classList.add(`theme-${themeId}`)
    }

    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-12 h-12 flex items-center justify-center bg-medium hover:bg-light hover-snappy-scale"
      >
        <Palette className="w-5 h-5 text-accent" />
      </Button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-medium rounded-lg shadow-lg p-4 w-48">
          <h3 className="text-light text-sm font-bold mb-2">Select Theme</h3>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={`w-full text-left px-3 py-2 rounded text-sm hover-snappy-bg ${
                  theme.id !== "default" ? `theme-${theme.id}` : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mr-2 hover-snappy-scale"></div>
                  <span className="text-light hover-snappy-text">{theme.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
