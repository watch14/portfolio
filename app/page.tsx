"use client";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import BackgroundEffects from "@/components/background-effects";
import ThemeSelector from "@/components/theme-selector";
import MobileMenu from "@/components/mobile-menu";
import Sidebar from "@/components/sidebar";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const navLineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ["about", "experience", "projects", "contact"];

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  const setNavLineRef = (id: string) => (el: HTMLDivElement | null) => {
    navLineRefs.current[id] = el;
  };

  return (
    <div className="bg-dark text-light font-sans min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Theme Selector */}
      <ThemeSelector />

      {/* Mobile Menu */}
      <MobileMenu
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <Sidebar
            activeSection={activeSection}
            setNavLineRef={setNavLineRef}
          />

          {/* Main Content */}
          <main className="lg:w-[60%] lg:ml-[40%] px-6 py-12 lg:py-16 lg:pr-16 lg:pl-16">
            {/* Hero Section - Mobile Only */}
            <HeroSection />

            {/* About Section */}
            <AboutSection ref={setSectionRef("about")} isDesktop={isDesktop} />

            {/* Experience Section */}
            <ExperienceSection
              ref={setSectionRef("experience")}
              isDesktop={isDesktop}
            />

            {/* Projects Section */}
            <ProjectsSection
              ref={setSectionRef("projects")}
              isDesktop={isDesktop}
            />

            {/* Contact Section */}
            <ContactSection
              ref={setSectionRef("contact")}
              isDesktop={isDesktop}
            />

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
