"use client";

import { BookOpen, GraduationCap, ClipboardCheck, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Button from "@/components/ui/Button";
import { CERTIFICATION_STEPS } from "@/data/constants";

const stepIcons = [BookOpen, GraduationCap, ClipboardCheck, Award];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" bgVariant="dark">
      <SectionHeader
        title="Your Path to Certification"
        subtitle="A clear, structured journey to becoming an internationally certified hockey professional"
      />

      {/* Steps */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-bg-elevated">
          <div className="h-full bg-gradient-to-r from-brand-blue to-accent-cyan w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {CERTIFICATION_STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-bg-card border-2 border-accent-cyan/30 flex items-center justify-center">
                    <Icon size={32} className="text-accent-cyan" />
                  </div>

                  {/* Step number */}
                  <span className="text-xs font-display font-bold text-accent-cyan mb-2 block">
                    Step {step.step}
                  </span>

                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-text-secondary mb-6">
          Become a certified trainer for hockey centers worldwide
        </p>
        <Button href="/#pricing" size="lg">
          Start Your Certification
        </Button>
      </div>
    </SectionWrapper>
  );
}
