"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { LECTURERS } from "@/data/constants";

export default function Lecturers() {
  return (
    <SectionWrapper id="lecturers" bgVariant="card">
      <SectionHeader
        title="World-Class Lecturers"
        subtitle="Learn from Olympic-level experts with decades of experience"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LECTURERS.map((lecturer, i) => (
          <AnimatedSection key={lecturer.name} delay={i * 0.15}>
            <div className="bg-bg-dark rounded-2xl border border-bg-elevated p-8 text-center transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-xl">
              {/* Photo */}
              <div className="relative w-36 h-36 mx-auto mb-6">
                <Image
                  src={lecturer.image}
                  alt={lecturer.name}
                  fill
                  className="rounded-full object-cover ring-4 ring-brand-blue/30"
                />
              </div>

              {/* Name & title */}
              <h3 className="text-xl font-bold mb-1">{lecturer.name}</h3>
              <p className="text-text-secondary text-sm mb-4">{lecturer.title}</p>

              {/* Credential badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {lecturer.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-xs bg-bg-elevated text-accent-cyan rounded-full px-3 py-1"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
