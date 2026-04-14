import AnimatedSection from "@/components/animations/AnimatedSection";

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
}

export default function SubpageHero({ title, subtitle }: SubpageHeroProps) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-brand-blue/15 via-bg-dark to-bg-dark pt-20">
      <AnimatedSection className="text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </section>
  );
}
