"use client";

import { COUNTRIES } from "@/data/constants";

export default function SocialProofMarquee() {
  const items = [...COUNTRIES, ...COUNTRIES];

  return (
    <section className="bg-bg-card py-4 overflow-hidden border-y border-white/5">
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {items.map((country, i) => (
            <div key={i} className="flex items-center gap-2 text-text-secondary text-sm whitespace-nowrap">
              <span className="text-lg">{country.flag}</span>
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
