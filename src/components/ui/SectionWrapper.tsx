type BgVariant = "dark" | "card" | "elevated";

const bgStyles: Record<BgVariant, string> = {
  dark: "bg-bg-dark",
  card: "bg-bg-card",
  elevated: "bg-bg-elevated",
};

interface SectionWrapperProps {
  id?: string;
  bgVariant?: BgVariant;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  bgVariant = "dark",
  className = "",
  children,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-6 lg:px-8 ${bgStyles[bgVariant]} ${className}`}>
      <div className={fullWidth ? "" : "max-w-7xl mx-auto"}>
        {children}
      </div>
    </section>
  );
}
