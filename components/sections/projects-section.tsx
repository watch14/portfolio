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
              <Link
                href="https://github.com/watch14/BuyMe-Ecommerce-App"
                className="block relative hover-snappy-scale"
              >
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img
                  src="/1.home.png"
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
                  A full-stack e-commerce platform built with Angular, Node.js,
                  and MongoDB. Features product listings, shopping cart, secure
                  authentication, and Stripe payment integration.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-xs mb-6 md:justify-end">
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
                  Firebase
                </span>
              </ul>
              <div className="flex gap-4 md:justify-end">
                <Link
                  href="https://github.com/watch14/BuyMe-Ecommerce-App"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project 2 */}
        <div className="relative grid md:grid-cols-12 mb-24">
          <div className="md:col-span-7 md:col-start-6 md:row-start-1 relative z-10">
            <div className="relative group">
              <Link
                href="https://notebook-front-end.onrender.com"
                className="block relative hover-snappy-scale"
              >
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img
                  src="/homejp.png"
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
                Interactive Japanese Study Tool
              </h3>
              <div className="bg-medium p-6 rounded shadow-xl mb-6">
                <p className="text-muted leading-relaxed">
                  A personal Japanese learning web app built with React,
                  Node.js, and MongoDB. Features include text input with
                  Japanese conversion, drawing tools, rich note editing, and
                  secure user authentication — all designed to support creative,
                  personalized language learning.
                </p>
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-xs mb-6">
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  Node
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  JavaScript
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  Angular
                </span>
                <span className="bg-medium text-accent px-3 py-1 rounded text-xs font-mono hover-snappy-scale">
                  Tailwind CSS
                </span>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/watch14/FeedME-0x1_Project"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://notebook-front-end.onrender.com/"
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
          {/* FeedME Project */}
          <div className="bg-medium rounded p-6 flex flex-col h-full hover-snappy-shadow">
            <div className="flex justify-between items-center mb-6">
              <div className="text-accent hover-snappy-scale">
                <Proportions className="w-8 h-8" />
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/watch14/FeedME-0x1_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <h4 className="text-light font-bold mb-2 hover-snappy-text">
              FeedME
            </h4>
            <p className="text-muted mb-6 flex-grow leading-relaxed">
              A meal planner suggesting recipes by ingredients, country, or
              random, with cooking videos.
            </p>
            <ul className="flex flex-wrap gap-3 font-mono text-xs">
              <li className="hover-snappy-text">React</li>
              <li className="hover-snappy-text">MealDB API</li>
            </ul>
          </div>

          {/* AnimeSaver API Project */}
          <div className="bg-medium rounded p-6 flex flex-col h-full hover-snappy-shadow">
            <div className="flex justify-between items-center mb-6">
              <div className="text-accent hover-snappy-scale">
                <Proportions className="w-8 h-8" />
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/watch14/AnimeSaver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover-snappy-text hover-snappy-scale"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <h4 className="text-light font-bold mb-2 hover-snappy-text">
              AnimeSaver API
            </h4>
            <p className="text-muted mb-6 flex-grow leading-relaxed">
              A Flask API to track anime, with MyAnimeList integration and full
              user management.
            </p>
            <ul className="flex flex-wrap gap-3 font-mono text-xs">
              <li className="hover-snappy-text">Flask</li>
              <li className="hover-snappy-text">MongoDB</li>
              <li className="hover-snappy-text">REST API</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
