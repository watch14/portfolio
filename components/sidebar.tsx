"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Resume from "./resume";

interface SidebarProps {
  activeSection: string;
  setNavLineRef: (id: string) => (el: HTMLDivElement | null) => void;
}

export default function Sidebar({
  activeSection,
  setNavLineRef,
}: SidebarProps) {
  return (
    <aside className="lg:w-[40%] lg:h-screen lg:fixed lg:top-0 lg:overflow-auto px-6 py-12 lg:p-16 lg:flex lg:flex-col lg:justify-between">
      <div className="space-y-8">
        <div>
          {/* <div className="text-accent font-mono text-xl mb-4 floating hover-snappy-scale inline-block">
            MC
          </div> */}
          <p className="font-mono text-accent mb-5">Hi, my name is</p>

          <h1 className="text-4xl font-bold text-light mb-3 ">
            Maamoun Chebbi
          </h1>
          <h2 className="text-2xl font-bold text-muted mb-6">
            Software Engineer
          </h2>
          <p className="text-muted mb-8 text-sg max-w-md">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <nav className="hidden lg:block">
          <ul className="space-y-6 font-mono text-sm">
            <li>
              <Link
                href="#about"
                className={`group hover-snappy-text flex items-center ${
                  activeSection === "about" ? "text-accent" : ""
                }`}
              >
                <div
                  ref={setNavLineRef("about")}
                  className="h-px bg-[var(--accent-color)] mr-4 transition-all duration-700 ease-in-out"
                  style={{
                    width: activeSection === "about" ? "3rem" : "1rem",
                    opacity: activeSection === "about" ? "1" : "0.7",
                  }}
                ></div>
                <span className="text-base tracking-wider">ABOUT</span>
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className={`group hover-snappy-text flex items-center ${
                  activeSection === "experience" ? "text-accent" : ""
                }`}
              >
                <div
                  ref={setNavLineRef("experience")}
                  className="h-px bg-[var(--accent-color)] mr-4 transition-all duration-700 ease-in-out"
                  style={{
                    width: activeSection === "experience" ? "3rem" : "1rem",
                    opacity: activeSection === "experience" ? "1" : "0.7",
                  }}
                ></div>
                <span className="text-base tracking-wider">EXPERIENCE</span>
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`group hover-snappy-text flex items-center ${
                  activeSection === "projects" ? "text-accent" : ""
                }`}
              >
                <div
                  ref={setNavLineRef("projects")}
                  className="h-px bg-[var(--accent-color)] mr-4 transition-all duration-700 ease-in-out"
                  style={{
                    width: activeSection === "projects" ? "3rem" : "1rem",
                    opacity: activeSection === "projects" ? "1" : "0.7",
                  }}
                ></div>
                <span className="text-base tracking-wider">PROJECTS</span>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`group hover-snappy-text flex items-center ${
                  activeSection === "contact" ? "text-accent" : ""
                }`}
              >
                <div
                  ref={setNavLineRef("contact")}
                  className="h-px bg-[var(--accent-color)] mr-4 transition-all duration-700 ease-in-out "
                  style={{
                    width: activeSection === "contact" ? "3rem" : "1rem",
                    opacity: activeSection === "contact" ? "1" : "0.7",
                  }}
                ></div>
                <span className="text-base tracking-wider">CONTACT</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hidden lg:flex space-x-6 mt-8">
        <Link
          href="#"
          className="text-muted hover-snappy-text hover-snappy-scale  "
        >
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="#"
          className="text-muted hover-snappy-text hover-snappy-scale  "
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="#"
          className="text-muted hover-snappy-text hover-snappy-scale  "
        >
          <Twitter className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="#"
          className="text-muted hover-snappy-text hover-snappy-scale  "
        >
          <Mail className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </aside>
  );
}
