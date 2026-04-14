"use client";

import { Globe, TrendingUp, Award, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { MESSAGING_PILLARS } from "@/data/constants";

const iconMap = {
  Globe,
  TrendingUp,
  Award,
  Users,
} as const;

export default function ValueProposition() {
  return (
    <SectionWrapper id="about" bgVariant="dark" className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/about-bg.jpeg')" }}
      />
      <SectionHeader
        title="Why Choose HDC Europe?"
        subtitle="The leading hockey development system trusted by coaches and centers across Europe"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {MESSAGING_PILLARS.map((pillar, i) => {
          const Icon = iconMap[pillar.icon];
          return (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <Card>
                <Icon size={32} className="text-accent-cyan mb-4" />
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-text-secondary">{pillar.description}</p>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
