"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-12 lg:hidden">
      <p className="font-mono text-accent mb-5">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-light mb-4">Maamoun Maamoun.</h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-muted mb-8">I build things for the web.</h2>
      <p className="text-muted mb-12 text-lg">
        I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products.
      </p>
      <Link href="#projects">
        <Button className="bg-transparent hover:bg-accent-10 text-accent border border-accent px-6 py-4 rounded font-mono shimmer hover-snappy-scale">
          Check out my work
        </Button>
      </Link>
    </section>
  )
}
