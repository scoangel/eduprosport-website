"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = TESTIMONIALS[current];

  return (
    <SectionWrapper id="testimonials" bgVariant="card">
      <SectionHeader title="What Our Graduates Say" />

      <div
        className="max-w-3xl mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-bg-dark rounded-2xl border border-bg-elevated p-8 md:p-12 text-center"
          >
            <Quote size={40} className="text-accent-cyan/20 mx-auto mb-6" />
            <p className="text-lg md:text-xl italic text-text-primary leading-relaxed mb-8">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="font-bold text-white">{t.author}</p>
              <p className="text-text-secondary text-sm">
                {t.role ? `${t.role} — ` : ""}{t.flag} {t.country}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-10 h-10 rounded-full bg-bg-elevated/80 border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/30 transition-colors cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-10 h-10 rounded-full bg-bg-elevated/80 border border-white/10 flex items-center justify-center text-white hover:border-accent-cyan/30 transition-colors cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-accent-cyan w-6" : "bg-bg-elevated"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
