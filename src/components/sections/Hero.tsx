"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import HeroBackground from "@/components/animations/HeroBackground";
import { STATS } from "@/data/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Trust badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-text-secondary">
            <Shield size={14} className="text-accent-cyan" />
            Trusted by hockey centers across Europe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Internationally Certified{" "}
          <span className="bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent">
            Hockey Performance
          </span>{" "}
          System
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          From coach preparation through player education to measurable
          performance growth. Join the leading hockey development program in
          Europe.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button href="/#pricing" size="lg">
            Start Your Certification
          </Button>
          <Button href="/#courses" variant="secondary" size="lg">
            Explore Courses
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter
                value={parseInt(stat.value)}
                suffix={stat.value.includes("+") ? "+" : ""}
                className="text-3xl md:text-4xl text-white"
              />
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
