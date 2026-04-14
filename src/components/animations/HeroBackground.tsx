"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const orbs = container.querySelectorAll<HTMLDivElement>(".hero-orb");
    const animations: number[] = [];

    orbs.forEach((orb, i) => {
      let x = Math.random() * 100;
      let y = Math.random() * 100;
      const speedX = (0.02 + Math.random() * 0.03) * (i % 2 === 0 ? 1 : -1);
      const speedY = (0.02 + Math.random() * 0.03) * (i % 2 === 0 ? -1 : 1);

      const animate = () => {
        x += speedX;
        y += speedY;

        if (x > 100 || x < -20) x = x > 100 ? -20 : 100;
        if (y > 100 || y < -20) y = y > 100 ? -20 : 100;

        orb.style.transform = `translate(${x}%, ${y}%)`;
        animations[i] = requestAnimationFrame(animate);
      };

      animations[i] = requestAnimationFrame(animate);
    });

    return () => {
      animations.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark base */}
      <div className="absolute inset-0 bg-bg-dark" />

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 hidden md:block"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Mobile fallback image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:hidden"
        style={{ backgroundImage: "url('/images/hero-mobile.jpeg')" }}
      />
      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-bg-dark/50" />

      {/* Animated gradient orbs */}
      <div
        className="hero-orb absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] will-change-transform"
        style={{ background: "radial-gradient(circle, #046bd2, transparent 70%)", top: "-10%", left: "-10%" }}
      />
      <div
        className="hero-orb absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] will-change-transform"
        style={{ background: "radial-gradient(circle, #00E5FF, transparent 70%)", top: "30%", right: "-5%" }}
      />
      <div
        className="hero-orb absolute w-[700px] h-[700px] rounded-full opacity-10 blur-[140px] will-change-transform"
        style={{ background: "radial-gradient(circle, #045cb4, transparent 70%)", bottom: "-20%", left: "30%" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
}
