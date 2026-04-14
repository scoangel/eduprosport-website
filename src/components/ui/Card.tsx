interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`bg-bg-card rounded-2xl border border-bg-elevated p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-accent-cyan/30 ${className}`}
    >
      {children}
    </div>
  );
}
