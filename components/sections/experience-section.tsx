"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ExperienceSectionProps {
  isDesktop: boolean
}

const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>(({ isDesktop }, ref) => {
  return (
    <section id="experience" ref={ref} className="py-24">
      {!isDesktop && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-light mb-8">
            <span className="text-accent font-mono mr-2">02.</span>Where I've Worked
          </h2>
        </div>
      )}

      <div className="space-y-16">
        <div>
          <div className="flex items-start mb-4">
            <div className="text-sm font-mono text-accent w-32 flex-shrink-0">2021 — PRESENT</div>
            <div>
              <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                Senior Frontend Developer <span className="mx-2">·</span>
                <Link href="#" className="inline-flex items-center hover-snappy-text">
                  TechCorp Inc.
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                </Link>
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Build and maintain critical components used to construct TechCorp's frontend, across the whole product.
                Work closely with cross-functional teams, including developers, designers, and product managers, to
                implement and advocate for best practices in web accessibility.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  JavaScript
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  TypeScript
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  React
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start mb-4">
            <div className="text-sm font-mono text-accent w-32 flex-shrink-0">2018 — 2021</div>
            <div>
              <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                Frontend Developer <span className="mx-2">·</span>
                <Link href="#" className="inline-flex items-center hover-snappy-text">
                  Digital Agency XYZ
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                </Link>
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Developed and styled interactive web apps for clients across various industries. Collaborated with
                designers to implement pixel-perfect UI components and optimized website performance, achieving a 30%
                improvement in load times.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  JavaScript
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  React
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  HTML & SCSS
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-start mb-4">
            <div className="text-sm font-mono text-accent w-32 flex-shrink-0">2016 — 2018</div>
            <div>
              <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                UI Engineer Co-op <span className="mx-2">·</span>
                <Link href="#" className="inline-flex items-center hover-snappy-text">
                  Tech Startup
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                </Link>
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Developed and styled interactive web apps including the user interface of an embeddable web player
                widget for in-browser user authorization and full song playback.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  JavaScript
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  SCSS
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  React
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  Ember
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ExperienceSection.displayName = "ExperienceSection"
export default ExperienceSection
