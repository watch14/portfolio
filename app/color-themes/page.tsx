"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ColorThemes() {
  const [selectedTheme, setSelectedTheme] = useState("default")

  const themes = [
    { id: "default", name: "Teal (Default)" },
    { id: "purple", name: "Royal Purple" },
    { id: "blue", name: "Ocean Blue" },
    { id: "green", name: "Emerald Green" },
    { id: "orange", name: "Sunset Orange" },
    { id: "red", name: "Ruby Red" },
  ]

  return (
    <div className={`min-h-screen p-8 ${selectedTheme !== "default" ? `theme-${selectedTheme}` : ""}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-light">Color Theme Options</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`theme-preview ${theme.id !== "default" ? `theme-${theme.id}` : ""}`}
              onClick={() => setSelectedTheme(theme.id)}
            >
              <div className="theme-preview-header bg-medium text-light">{theme.name}</div>
              <div className="theme-preview-content bg-dark">
                <div className="color-swatch accent-swatch"></div>
                <div className="color-swatch bg-medium-swatch"></div>
                <div className="color-swatch bg-dark-swatch"></div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-accent">Accent Text</span>
                  <span className="text-light">Light Text</span>
                  <span className="text-muted">Muted Text</span>
                </div>
                <Button className="mt-4 bg-transparent border border-accent text-accent hover:bg-accent-10">
                  Sample Button
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-medium p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-light">
            Preview with{" "}
            {selectedTheme === "default" ? "Teal (Default)" : themes.find((t) => t.id === selectedTheme)?.name} Theme
          </h2>

          <div className="space-y-6">
            <p className="text-muted">
              This is a preview of how your portfolio would look with the selected color theme. The accent color is used
              for highlights, buttons, and interactive elements.
            </p>

            <div className="flex space-x-4">
              <Button className="bg-transparent border border-accent text-accent hover:bg-accent-10">
                Primary Button
              </Button>
              <Button className="bg-accent text-bg-dark hover:bg-accent-light">Secondary Button</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-dark p-4 rounded-lg">
                <h3 className="text-accent font-mono mb-2">Project Card</h3>
                <p className="text-muted mb-4">This is how project cards would appear with this theme.</p>
                <div className="flex justify-between">
                  <span className="text-light">Technologies</span>
                  <div className="flex space-x-2">
                    <div className="w-5 h-5 rounded-full bg-accent"></div>
                    <div className="w-5 h-5 rounded-full bg-accent-light"></div>
                  </div>
                </div>
              </div>

              <div className="bg-dark p-4 rounded-lg">
                <h3 className="text-accent font-mono mb-2">Experience</h3>
                <p className="text-light font-bold">Senior Developer</p>
                <p className="text-muted">2020 - Present</p>
                <p className="text-muted mt-2">Working on exciting projects with cutting-edge technologies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-transparent border border-accent text-accent hover:bg-accent-10">
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
