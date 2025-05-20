"use client";

import { forwardRef } from "react";
import Resume from "../resume";

interface AboutSectionProps {
  isDesktop: boolean;
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
  ({ isDesktop }, ref) => {
    return (
      <section id="about" ref={ref} className=" ">
        {!isDesktop && (
          <div>
            <h2 className="text-2xl font-bold text-light mb-8 ">
              <span className="text-accent font-mono mr-2">01.</span>About Me
            </h2>
          </div>
        )}

        {!isDesktop && <div></div>}
        <div className="space-y-6">
          <p className="text-muted mb-6 leading-relaxed text-sm">
            I'm a{" "}
            <span className="text-accent hover-snappy-text inline-block">
              Full-Stack Web Developer
            </span>{" "}
            with a strong focus on backend development. I build performant,
            scalable systems and clean, user-friendly interfaces that work
            seamlessly across platforms. With a passion for problem-solving and
            clean architecture, I enjoy working across the stack — from
            designing robust APIs and managing databases to crafting intuitive
            frontend experiences. My approach emphasizes performance,
            accessibility, and maintainability. I thrive in collaborative
            environments where I can build real-world solutions, ship quality
            code, and keep growing through continuous learning and meaningful
            challenges.
          </p>
          <p className="text-muted leading-relaxed">
            My favorite work lies at the intersection of design and development,
            creating experiences that not only look great but are meticulously
            built for performance and usability.
          </p>

          <p className="text-muted">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> JavaScript
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> TypeScript
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> Python
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> Node.js
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> React
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> Next.js
            </li>
            <li className="flex items-center hover-snappy-text">
              <span className="text-accent mr-2">▹</span> Tailwind CSS
            </li>
          </ul>
          <span className=""> </span>
          <Resume />
        </div>
      </section>
    );
  }
);

AboutSection.displayName = "AboutSection";
export default AboutSection;
