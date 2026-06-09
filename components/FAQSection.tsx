import Image from "next/image";
import { IconChevronDown } from "./Icons";

export const FAQS = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Edmonton, the Greater Edmonton Area, and projects across Alberta depending on scope, schedule, and crew availability.",
  },
  {
    question: "Can you handle a full-site package?",
    answer:
      "Yes. We can coordinate excavation, footings, foundation walls, waterproofing, weeping tile, concrete pumping, backfill, and material supply for one connected workflow.",
  },
  {
    question: "Do you work on both residential and commercial projects?",
    answer:
      "Yes. Our crews support custom homes, multi-unit builds, infill lots, commercial footings, slabs, site preparation, and aggregate delivery.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Timelines depend on site readiness, weather, permitting, inspections, and material availability. Send the project details and we will respond with the earliest realistic window.",
  },
  {
    question: "Can you provide material supply and hauling?",
    answer:
      "Yes. We supply and deliver gravel, washed rock, road crush, bedding sand, and related aggregate materials using quad trucks and dump trucks.",
  },
  {
    question: "What do you need for a quote?",
    answer:
      "Helpful details include the location, drawings or measurements, services needed, access constraints, target start date, and any inspection or engineering requirements.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex h-full flex-col">
          <p className="eyebrow text-[color:var(--color-forest-700)]">FAQ</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            Straight answers before work begins.
          </h2>
          <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] leading-relaxed">
            Quick answers about scope, timelines, service areas, and the details that help us
            price your project clearly.
          </p>
          <div className="relative mt-8 min-h-[220px] flex-1 overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
            <Image
              src="/images/stock/excavator-groundwork.jpg"
              alt="Excavation work prepared for foundation drainage"
              fill
              sizes="28vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="h-full divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
          {FAQS.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-lg font-semibold text-[color:var(--color-ink)]">
                  {item.question}
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] text-[color:var(--color-forest-700)] transition-transform group-open:rotate-180">
                  <IconChevronDown size={16} />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
