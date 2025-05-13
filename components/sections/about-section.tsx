"use client"

import { forwardRef } from "react"

interface AboutSectionProps {
  isDesktop: boolean
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(({ isDesktop }, ref) => {
  return (
    <section id="about" ref={ref} className="py-24">
      {!isDesktop && (
        <div>
          <h2 className="text-2xl font-bold text-light mb-8">
            <span className="text-accent font-mono mr-2">01.</span>About Me
          </h2>
        </div>
      )}

      {!isDesktop && (
        <div>
          <p className="text-muted mb-6 leading-relaxed">
            I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on
            building accessible, human-centered products.
          </p>
        </div>
      )}

      <div className="space-y-6">
        <p className="text-muted leading-relaxed">
          My favorite work lies at the intersection of design and development, creating experiences that not only look
          great but are meticulously built for performance and usability.
        </p>
        <p className="text-muted leading-relaxed">
          Currently, I'm a Senior Front-End Engineer at{" "}
          <span className="text-accent hover-snappy-underline inline-block">TechCorp</span>, specializing in
          accessibility. I contribute to the creation and maintenance of UI components that power TechCorp's frontend,
          ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user
          experience.
        </p>
        <p className="text-muted">Here are a few technologies I've been working with recently:</p>
        <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> JavaScript (ES6+)
          </li>
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> TypeScript
          </li>
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> React
          </li>
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> Next.js
          </li>
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> Node.js
          </li>
          <li className="flex items-center hover-snappy-text">
            <span className="text-accent mr-2">▹</span> Tailwind CSS
          </li>
        </ul>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection
