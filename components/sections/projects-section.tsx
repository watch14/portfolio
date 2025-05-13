"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Github, ExternalLink, Proportions } from "lucide-react";

interface ProjectsSectionProps {
  isDesktop: boolean;
}

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ isDesktop }, ref) => {
    return (
      <section id="projects" ref={ref} className="py-24">
        {!isDesktop && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-light mb-8">
              <span className="text-accent font-mono mr-2">03.</span>Some Things
              I've Built
            </h2>
          </div>
        )}

        {/* Featured Project 1 */}
        <div className="relative grid md:grid-cols-12 mb-24">
          <div className="md:col-span-7 md:col-start-1 md:row-start-1 relative z-10">
            <div className="relative group">
              <Link href="#" className="block relative hover-snappy-scale">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img
                  src="/modern-ecommerce-dashboard.png"
                  alt="E-Commerce Platform"
                  className="rounded shadow-lg"
                />
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:row-start-1 relative z-20 mt-4 md:mt-0">
            <div className="md:text-right">
              <p className="font-mono text-accent text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-light text-xl font-bold mb-4 hover-snappy-text">
                E-Commerce Platform
              </h3>
              <div className="bg-medium p-6 rounded shadow-xl mb-6">
                <p className="text-muted leading-relaxed">
                  A feature-rich e-commerce platform built with Next.js and
                  Tailwind CSS. Includes product listings, shopping cart
                  functionality, user authentication, and payment processing
                  integration.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-xs mb-6 md:justify-end">
                <li className="hover-snappy-text">Next.js</li>
                <li className="hover-snappy-text">TypeScript</li>
                <li className="hover-snappy-text">Tailwind CSS</li>
                <li className="hover-snappy-text">Stripe</li>
                <li className="hover-snappy-text">Supabase</li>
              </ul>
              <div className="flex gap-4 md:justify-end">
                <Link
                  href="#"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">External Link</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project 2 */}
        <div className="relative grid md:grid-cols-12 mb-24">
          <div className="md:col-span-7 md:col-start-6 md:row-start-1 relative z-10">
            <div className="relative group">
              <Link href="#" className="block relative hover-snappy-scale">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img
                  src="/ai-content-generator-webapp.png"
                  alt="AI Content Generator"
                  className="rounded shadow-lg"
                />
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-1 md:row-start-1 relative z-20 mt-4 md:mt-0">
            <div>
              <p className="font-mono text-accent text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-light text-xl font-bold mb-4 hover-snappy-text">
                AI Content Generator
              </h3>
              <div className="bg-medium p-6 rounded shadow-xl mb-6">
                <p className="text-muted leading-relaxed">
                  A web application that leverages AI to generate content for
                  various purposes. Users can create blog posts, social media
                  captions, and marketing copy with customizable parameters.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-xs mb-6">
                <li className="hover-snappy-text">React</li>
                <li className="hover-snappy-text">Node.js</li>
                <li className="hover-snappy-text">OpenAI API</li>
                <li className="hover-snappy-text">Express</li>
                <li className="hover-snappy-text">MongoDB</li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">External Link</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <h3 className="text-center text-light text-xl font-bold mb-12">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-medium rounded p-6 flex flex-col h-full hover-snappy-shadow"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent hover-snappy-scale">
                  <Proportions className="w-8 h-8" />
                </div>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-light hover-snappy-text hover-snappy-scale"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-light hover-snappy-text hover-snappy-scale"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="sr-only">External Link</span>
                  </Link>
                </div>
              </div>
              <h4 className="text-light font-bold mb-2 hover-snappy-text">
                Project {item}
              </h4>
              <p className="text-muted mb-6 flex-grow leading-relaxed">
                A brief description of the project, what it does, and the
                technologies used to build it.
              </p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs">
                <li className="hover-snappy-text">React</li>
                <li className="hover-snappy-text">TypeScript</li>
                <li className="hover-snappy-text">Node.js</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
