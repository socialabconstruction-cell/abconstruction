"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Trade Partners" },
];

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          setValue(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [value, ref] as const;
}

function StatItem({ stat }: { stat: Stat }) {
  const [value, ref] = useCountUp(stat.value);
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1.5">
        <span
          ref={ref}
          className="font-display tabular-nums tracking-[-0.03em] font-medium text-[clamp(3rem,6vw,5rem)] leading-[0.9]"
        >
          {value}
        </span>
        <span className="font-display text-2xl md:text-3xl leading-none text-white">
          {stat.suffix}
        </span>
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/55">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section className="bg-[color:var(--color-forest-950)] text-white">
      <div className="container-x py-20 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-10">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
