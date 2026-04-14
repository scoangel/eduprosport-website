"use client";

import { Phone } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Button from "@/components/ui/Button";
import { CONTACT_INFO } from "@/data/constants";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-bg-dark to-accent-cyan/10" />
      <div className="absolute inset-0 bg-bg-dark/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Elevate Your{" "}
            <span className="bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent">
              Hockey Program
            </span>
            ?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Join 500+ certified coaches across 15 European countries
          </p>

          {/* Inline form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl bg-bg-elevated border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent-cyan/50 transition-colors"
              required
            />
            <Button type="submit">Get Started</Button>
          </form>

          {/* Phone CTA */}
          <p className="flex items-center justify-center gap-2 text-text-secondary">
            <Phone size={16} className="text-accent-cyan" />
            Or call us directly:{" "}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-white font-medium hover:text-accent-cyan transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
