"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function MobileMenu({ activeSection, mobileMenuOpen, setMobileMenuOpen }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-6 z-50 lg:hidden text-light hover:text-accent transition-colors hover-snappy-scale"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-medium/95 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      >
        <nav className="flex flex-col items-center space-y-8 font-mono text-lg">
          <Link
            href="#about"
            className={`hover-snappy-text ${activeSection === "about" ? "text-accent" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-accent">01.</span> About
          </Link>
          <Link
            href="#experience"
            className={`hover-snappy-text ${activeSection === "experience" ? "text-accent" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-accent">02.</span> Experience
          </Link>
          <Link
            href="#projects"
            className={`hover-snappy-text ${activeSection === "projects" ? "text-accent" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-accent">03.</span> Projects
          </Link>
          <Link
            href="#contact"
            className={`hover-snappy-text ${activeSection === "contact" ? "text-accent" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-accent">04.</span> Contact
          </Link>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent-10 mt-4 hover-snappy-scale">
            Resume
          </Button>
        </nav>
      </div>
    </>
  )
}
