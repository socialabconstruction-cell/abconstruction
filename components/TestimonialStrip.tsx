import { IconQuote, IconStar } from "./Icons";

const QUOTES = [
  {
    quote:
      "AB Construction Group poured our basement and footings on schedule and to specification. Communication was clear from the first call to final form stripping.",
    name: "Daniel R.",
    role: "General Contractor · Edmonton",
  },
  {
    quote:
      "Their concrete pumping crew got us into a tight downtown infill that two other companies turned down. Professional and fast.",
    name: "Maya K.",
    role: "Project Manager · Glenora",
  },
  {
    quote:
      "Reliable aggregate supply, on-time delivery, and the cleanest weeping tile installation we've ever seen. We'll keep calling them.",
    name: "Trevor B.",
    role: "Custom Home Builder · Sherwood Park",
  },
];

export default function TestimonialStrip() {
  return (
    <section id="reviews" className="section bg-[color:var(--color-paper)] scroll-mt-24">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">Reviews</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-3 max-w-xl">
              What Edmonton builders say about working with us.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[color:var(--color-ink-soft)] text-sm">
            <div className="flex text-[color:var(--color-steel-400)]">
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={18} />)}
            </div>
            <span className="font-medium text-[color:var(--color-ink)]">5.0</span>
            <span>·</span>
            <span>Based on client reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="relative bg-[color:var(--color-bg)] rounded-lg ring-1 ring-[color:var(--color-line)] p-7 flex flex-col"
            >
              <IconQuote size={28} className="text-[color:var(--color-steel-400)]" />
              <blockquote className="font-display text-lg leading-snug mt-4 text-[color:var(--color-ink)]">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[color:var(--color-line)] flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium text-[color:var(--color-ink)]">{q.name}</p>
                  <p className="text-[color:var(--color-muted)] text-xs mt-0.5">{q.role}</p>
                </div>
                <div className="flex text-[color:var(--color-steel-400)]">
                  {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} size={14} />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
