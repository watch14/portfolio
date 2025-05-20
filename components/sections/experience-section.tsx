"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ExperienceSectionProps {
  isDesktop: boolean;
}

const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>(
  ({ isDesktop }, ref) => {
    return (
      <section id="experience" ref={ref} className="py-24">
        {!isDesktop && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-light mb-8">
              <span className="text-accent font-mono mr-2">02.</span>Where I've
              Worked
            </h2>
          </div>
        )}

        <div className="space-y-16">
          <div>
            <div className="flex items-start mb-4">
              <div className="text-sm font-mono text-accent w-32 flex-shrink-0">
                2024 — PRESENT
              </div>
              <div>
                <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                  Full Stack Developer <span className="mx-2">·</span>
                  <span className="inline-flex items-center hover-snappy-text">
                    Pro-TOTush Plus.
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                  </span>
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Built and integrated RESTful APIs, connected backend logic to
                  frontend interfaces, and contributed to both system
                  architecture and UI functionality. Focused primarily on
                  backend tasks while collaborating across teams to ship
                  reliable, scalable features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    Node.js
                  </span>
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
              <div className="text-sm font-mono text-accent w-32 flex-shrink-0">
                2021 — 2023
              </div>
              <div>
                <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                  Frontend Developer <span className="mx-2">·</span>
                  <Link
                    href="https://www.facebook.com/naksha.tn"
                    className="inline-flex items-center hover-snappy-text"
                  >
                    Naksha
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                  </Link>
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Developed and maintained the e-commerce platform for
                  Naksha.tn, focusing on both frontend design and backend
                  functionality. Built product pages, shopping cart features,
                  and order handling logic. Integrated APIs for payments,
                  inventory, and user authentication to deliver a smooth online
                  shopping experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    Node.js
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    JavaScript
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    React
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    HTML & CSS
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    Tailwind CSS
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
              <div className="text-sm font-mono text-accent w-32 flex-shrink-0">
                2021 — 2021
              </div>
              <div>
                <h3 className="text-xl font-bold text-light mb-1 flex items-center group">
                  Frontend Development Intern
                  <span className="mx-2">·</span>
                  <Link
                    href="https://pixelstrend.agency/"
                    className="inline-flex items-center hover-snappy-text"
                  >
                    Pixel Trend
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent" />
                  </Link>
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Developed and styled interactive web apps including the user
                  interface of an embeddable web player widget for in-browser
                  user authorization and full song playback.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    React
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    JavaScript
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    HTML & CSS
                  </span>
                  <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
