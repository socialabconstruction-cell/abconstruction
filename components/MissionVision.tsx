const PILLARS = [
  {
    index: "01",
    label: "Our Mission",
    statement:
      "To provide dependable construction solutions that combine expert craftsmanship, modern techniques, and exceptional customer service.",
  },
  {
    index: "02",
    label: "Our Vision",
    statement:
      "To become one of Edmonton's most respected construction companies through reliable service and outstanding workmanship.",
  },
];

export default function MissionVision() {
  return (
    <section className="section bg-[color:var(--color-paper)]">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[color:var(--color-line)] ring-1 ring-[color:var(--color-line)]">
          {PILLARS.map((p) => (
            <div
              key={p.label}
              className="relative bg-[color:var(--color-bg)] p-9 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--color-forest-700)]">
                  {p.index}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-forest-700)]">
                  {p.label}
                </span>
                <span className="h-px flex-1 bg-[color:var(--color-line)]" />
              </div>
              <p className="font-display text-[clamp(1.35rem,2.2vw,1.95rem)] leading-snug font-medium text-[color:var(--color-ink)]">
                {p.statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
