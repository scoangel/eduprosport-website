"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SubpageHero from "@/components/ui/SubpageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedSection from "@/components/animations/AnimatedSection";
import Button from "@/components/ui/Button";
import { COURSES, type CourseAudience } from "@/data/constants";

const filters: Array<{ label: string; value: CourseAudience | "All" }> = [
  { label: "All Programs", value: "All" },
  { label: "Coaches", value: "Coaches" },
  { label: "Players", value: "Players" },
  { label: "Centers", value: "Centers" },
  { label: "Parents", value: "Parents" },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState<CourseAudience | "All">("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? COURSES
        : COURSES.filter((c) => c.audience === activeFilter),
    [activeFilter]
  );

  return (
    <main>
      <SubpageHero
        title="All Courses"
        subtitle="Explore our full catalog of internationally certified hockey education programs"
      />

      <SectionWrapper bgVariant="dark">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeFilter === f.value
                  ? "bg-brand-blue text-white"
                  : "bg-bg-card text-text-secondary hover:text-white border border-bg-elevated"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <AnimatedSection key={course.code} delay={i * 0.05}>
              <Link href={`/courses/${course.slug}`} className="group block h-full">
                <div
                  className={`bg-bg-card rounded-2xl border p-6 flex flex-col h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-accent-cyan/30 ${
                    course.popular
                      ? "border-accent-cyan ring-1 ring-accent-cyan/30"
                      : "border-bg-elevated"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded px-2 py-1">
                      {course.code}
                    </span>
                    {course.popular && (
                      <span className="text-xs font-semibold text-accent-orange bg-accent-orange/10 rounded-full px-3 py-1">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-accent-cyan transition-colors">
                    {course.title}
                  </h3>

                  <span className="inline-block text-xs text-text-secondary bg-bg-elevated rounded-full px-2 py-0.5 mb-3 w-fit">
                    {course.audience}
                  </span>

                  <p className="text-text-secondary text-sm mb-6 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <p className="text-xs text-text-secondary">Starting from</p>
                      <p className="text-3xl font-display font-bold text-accent-orange">
                        &euro;{course.price}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-accent-cyan">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
