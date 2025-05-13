"use client"

import { forwardRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ContactSectionProps {
  isDesktop: boolean
}

const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ isDesktop }, ref) => {
  return (
    <section id="contact" ref={ref} className="py-24">
      {!isDesktop && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-light mb-8">
            <span className="text-accent font-mono mr-2">04.</span>Get In Touch
          </h2>
        </div>
      )}

      <div className="max-w-xl">
        <p className="text-muted mb-8 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <Link href="mailto:hello@example.com">
          <Button className="bg-transparent hover:bg-accent-10 text-accent border border-accent px-8 py-4 rounded font-mono shimmer hover-snappy-scale">
            Say Hello
          </Button>
        </Link>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
export default ContactSection
