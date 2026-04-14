"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/animations/AnimatedSection";

const categories = [
  {
    title: "For Coaches",
    count: 6,
    description: "Master advanced coaching methodologies backed by sports science",
    gradient: "from-brand-blue/40 to-accent-cyan/20",
    image: "/images/courses/course-coaching.jpeg",
    href: "/courses?audience=Coaches",
    comingSoon: false,
  },
  {
    title: "For Players",
    count: 1,
    description: "Elevate your game with scientific training and nutrition methods",
    gradient: "from-accent-cyan/30 to-brand-blue/20",
    image: "/images/courses/course-players.jpeg",
    href: "/courses?audience=Players",
    comingSoon: false,
  },
  {
    title: "For Hockey Centers",
    description: "Transform your hockey center with world-class programs",
    gradient: "from-brand-blue-dark/40 to-brand-blue/20",
    image: "/images/courses/course-centers.jpeg",
    href: "/courses?audience=Centers",
    comingSoon: true,
  },
  {
    title: "For Parents",
    description: "Support your young player's development with expert guidance",
    gradient: "from-accent-orange/20 to-brand-blue/20",
    image: null,
    href: "/courses?audience=Parents",
    comingSoon: true,
  },
];

export default function CourseCategories() {
  return (
    <SectionWrapper id="courses" bgVariant="card">
      <SectionHeader
        title="Our Programs"
        subtitle="Specialized education for every role in hockey"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <Link href={cat.href} className="group block">
              <div className="bg-bg-dark rounded-2xl border border-bg-elevated overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-accent-cyan/40">
                {/* Image area */}
                <div className={`h-44 bg-gradient-to-br ${cat.gradient} relative overflow-hidden`}>
                  {cat.image ? (
                    <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-4xl font-extrabold text-white/20">{cat.title.split(" ")[1]}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
                  <span className="inline-block text-xs text-accent-cyan bg-accent-cyan/10 rounded-full px-2 py-0.5 mb-3">
                    {cat.comingSoon ? "Coming Soon" : `${cat.count} ${cat.count === 1 ? "course" : "courses"}`}
                  </span>
                  <p className="text-text-secondary text-sm mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-cyan group-hover:gap-2 transition-all">
                    View Courses <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
