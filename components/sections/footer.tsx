"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 text-center text-muted font-mono text-sm">
      <div className="flex justify-center space-x-6 mb-6 lg:hidden">
        <Link href="#" className="text-muted hover-snappy-text hover-snappy-scale">
          <Github className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-muted hover-snappy-text hover-snappy-scale">
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-muted hover-snappy-text hover-snappy-scale">
          <Twitter className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-muted hover-snappy-text hover-snappy-scale">
          <Mail className="w-5 h-5" />
        </Link>
      </div>
      <p>Designed & Built by Maamoun Maamoun</p>
    </footer>
  )
}
