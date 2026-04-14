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
            <div className="group bg-bg-dark rounded-2xl border border-bg-elevated p-8 text-center transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-xl hover:shadow-accent-cyan/5 relative overflow-hidden">
              {/* Hex grid pattern background */}
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                {/* Photo with gradient border */}
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Gradient border ring */}
                  <div
                    className="absolute inset-[-3px] transition-all duration-300 group-hover:inset-[-4px]"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      background:
                        "linear-gradient(135deg, #046bd2, #00E5FF)",
                    }}
                  />
                  {/* Photo (already hexagon-shaped PNG with transparent bg) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={lecturer.image}
                      alt={lecturer.name}
                      width={160}
                      height={160}
                      className="transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                    />
                  </div>
                </div>

                {/* Name & title */}
                <h3 className="text-xl font-bold mb-1">{lecturer.name}</h3>
                <p className="text-text-secondary text-sm mb-4">
                  {lecturer.title}
                </p>

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
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
