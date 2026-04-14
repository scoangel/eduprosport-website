import { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/animations/AnimatedSection";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Lecturers from "@/components/sections/Lecturers";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About HDC Europe",
  description:
    "Learn about HDC Europe's mission to transform hockey education with internationally certified programs.",
};

const stats = [
  { value: 7, suffix: "+", label: "European Countries" },
  { value: 7, suffix: "", label: "Certified Programs" },
  { value: 3, suffix: "", label: "Olympic-Level Experts" },
  { value: 2, suffix: "", label: "Olympic Games Experience" },
];

export default function AboutPage() {
  return (
    <main>
      <SubpageHero
        title="About HDC Europe"
        subtitle="Transforming hockey education across Europe with science-driven, internationally certified programs"
      />

      {/* Mission section */}
      <SectionWrapper bgVariant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              HDC Europe — Hockey Development Center Education — is dedicated to
              elevating the standard of hockey coaching and player development
              across Europe. Founded by a team of Olympic-level experts and
              university professors, we bridge the gap between sports science and
              practical hockey training.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our internationally certified system covers the complete hockey
              ecosystem — from coach preparation through player education to
              measurable performance growth. Every program is designed to deliver
              concrete, trackable results.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We believe that world-class hockey development should be accessible
              to coaches, players, and centers across all of Europe, not just the
              traditional hockey powerhouses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-brand-blue/20 to-accent-cyan/10 rounded-2xl p-10 border border-brand-blue/20">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                To become the leading hockey education platform in Europe,
                setting the international standard for coaching certification and
                player development methodology.
              </p>
              <div className="space-y-3">
                {[
                  "Science-driven training methodologies",
                  "International certification standards",
                  "Measurable performance outcomes",
                  "Accessible education across Europe",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                    <span className="text-sm text-text-secondary">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper bgVariant="card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl text-white"
                />
                <p className="text-text-secondary text-sm mt-2">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <Lecturers />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
