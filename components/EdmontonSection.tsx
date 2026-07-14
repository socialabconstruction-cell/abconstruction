import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconCheck,
  IconClock,
  IconPin,
  IconTeam,
  IconTruck,
} from "./Icons";

const CITIES = [
  "Edmonton",
  "Red Deer",
  "St. Albert",
  "Spruce Grove",
  "Leduc",
  "Stony Plain",
  "Beaumont",
  "Sherwood Park",
  "Smoky Lake",
  "Fort Saskatchewan",
];

const PARTNER_TYPES = [
  "Custom home builders",
  "Developers",
  "General contractors",
  "Property managers",
];

const VALUE_POINTS = [
  {
    title: "Builder-ready coordination",
    body: "We fit into your schedule and make handoffs easier for the next trade.",
    Icon: IconTeam,
  },
  {
    title: "Reliable field capacity",
    body: "Concrete, forming, excavation, hauling, and waterproofing from one dependable crew.",
    Icon: IconTruck,
  },
  {
    title: "Schedule-first mindset",
    body: "We plan around inspections, weather, and pour windows so projects keep moving.",
    Icon: IconClock,
  },
];

export default function EdmontonSection() {
  return (
    <section
      id="partner"
      className="relative bg-black text-white overflow-hidden scroll-mt-24"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,0.86) 100%), " +
            "url('/images/unique/edmonton-skyline-daytime.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-x relative py-20 md:py-28">
        {/* Spec header */}
        <div className="flex flex-wrap items-baseline justify-between gap-y-3 pb-6 mb-12 border-b border-white/15">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] tracking-[0.35em] text-white inline-flex items-center gap-2">
              <IconPin size={12} /> EDMONTON ROOTS // PARTNER READY
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/50">
            ALBERTA OWNED
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — narrative + service area + partner types */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] font-medium">
              Built in Edmonton. Working well beyond it.
            </h2>
            <p className="mt-6 max-w-2xl text-white/75 leading-relaxed">
              Edmonton is home base, but our crews don&apos;t stop at the city
              limits. From Red Deer and Leduc to Spruce Grove, Beaumont, Stony
              Plain, St. Albert, Smoky Lake, and across central Alberta, we bring
              the same dependable groundwork, concrete, waterproofing, trucking,
              and material supply to every job site.
            </p>

            {/* Service area + Partner types — two compact lists */}
            <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white">
                    WHERE&nbsp;WE&nbsp;WORK
                  </span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13.5px]">
                  {CITIES.map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-2 text-white/82"
                    >
                      <span className="inline-block h-1 w-1 rounded-full bg-white" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white">
                    WHO&nbsp;WE&nbsp;PARTNER&nbsp;WITH
                  </span>
                  <span className="h-px flex-1 bg-white/15" />
                </div>
                <ul className="space-y-2.5 text-[13.5px]">
                  {PARTNER_TYPES.map((type) => (
                    <li
                      key={type}
                      className="flex items-center gap-2.5 text-white/88"
                    >
                      <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                        <IconCheck size={9} />
                      </span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#quote" className="btn btn-on-dark">
                Start a Partnership
                <IconArrowUpRight size={16} />
              </Link>
              <Link href="#quote" className="btn btn-outline-on-dark">
                Talk to an Edmonton Crew
              </Link>
              <a href="tel:+17808185555" className="btn btn-outline-on-dark">
                Call Scheduling
              </a>
            </div>
          </div>

          {/* RIGHT — skyline card with badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[5/5] w-full rounded-2xl overflow-hidden ring-1 ring-white/15 bg-black">
              <Image
                src="/images/unique/edmonton-skyline-daytime.jpg"
                alt="Downtown Edmonton skyline from a construction viewpoint"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/80 via-black/35 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white">
                      INDEX&nbsp;·&nbsp;HQ
                    </p>
                    <p className="font-display text-xl md:text-2xl text-white mt-1">
                      Edmonton, Alberta
                    </p>
                    <div className="mt-4 h-16 w-28 overflow-hidden rounded-lg border border-white/20 bg-white/5">
                      <Image
                        src="/images/stock/tower-crane.jpg"
                        alt="Edmonton city view with tower crane"
                        width={112}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <MapleLeaf className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 hidden md:flex items-center gap-2.5 rounded-full bg-white text-[color:var(--color-forest-950)] px-4 py-2 ring-1 ring-black/10 shadow-xl">
              <MapleLeaf className="h-4 w-4 text-[color:var(--color-forest-700)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Alberta Owned
              </span>
            </div>
          </div>
        </div>

        {/* Bottom value strip */}
        <div className="mt-16 pt-10 border-t border-white/12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {VALUE_POINTS.map((point, i) => {
              const Icon = point.Icon;
              return (
                <div key={point.title} className="flex gap-4">
                  <div className="shrink-0">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-white/80 block mb-2">
                      0{i + 1}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white ring-1 ring-white/10">
                      <Icon size={17} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold leading-tight">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] text-white/65 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M32 4l3.5 9.5 9-3-3 9 9.5 3.5-7 5 4 9-9.5-1.5L36 46l-2-7-2 7-2.5-10.5L20 37l4-9-7-5 9.5-3.5-3-9 9 3z" />
      <path d="M30 44h4l-2 16z" />
    </svg>
  );
}

function EdmontonSkyline() {
  return (
    <svg
      viewBox="0 0 800 640"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYEnd slice"
      aria-label="Edmonton skyline illustration"
    >
      <defs>
        <linearGradient id="aurora" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#b11226" />
          <stop offset="55%" stopColor="#b11226" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="bldgFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#b11226" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <radialGradient id="moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="640" fill="url(#aurora)" />

      <g opacity="0.18">
        <path
          d="M0 220 Q200 140 400 200 T800 180 L800 0 L0 0 Z"
          fill="#b11226"
        />
        <path
          d="M0 260 Q260 180 520 240 T800 220 L800 100 L0 100 Z"
          fill="#ffffff"
          opacity="0.6"
        />
      </g>

      <circle cx="640" cy="160" r="90" fill="url(#moon)" />
      <circle cx="640" cy="160" r="38" fill="#ffffff" opacity="0.95" />

      <path d="M0 540 L800 540 L800 640 L0 640 Z" fill="#000000" />
      <path
        d="M0 540 Q200 520 400 540 T800 540 L800 600 Q600 580 400 600 T0 600 Z"
        fill="#b11226"
        opacity="0.7"
      />

      <g stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.85">
        <path d="M40 540 Q120 460 200 540" />
        <path d="M60 540 Q140 480 220 540" />
        <line x1="40" y1="540" x2="40" y2="500" />
        <line x1="200" y1="540" x2="200" y2="500" />
        <line x1="40" y1="540" x2="220" y2="540" />
        {[80, 110, 140, 170].map((x) => (
          <line
            key={x}
            x1={x}
            y1="540"
            x2={x}
            y2={540 - (80 - Math.abs(x - 120))}
          />
        ))}
      </g>

      <g fill="url(#bldgFill)">
        <rect x="240" y="420" width="80" height="120" />
        <polygon points="240,420 260,380 300,380 320,420" />
        <rect x="258" y="368" width="10" height="14" />
        <rect x="292" y="368" width="10" height="14" />

        <rect x="340" y="200" width="62" height="340" />
        <polygon points="340,200 371,170 402,200" />
        <rect x="368" y="120" width="6" height="50" />

        <rect x="412" y="260" width="48" height="280" />
        <rect x="466" y="300" width="40" height="240" />

        <rect x="516" y="240" width="58" height="300" />
        <polygon points="516,240 545,210 574,240" />

        <rect x="586" y="280" width="42" height="260" />
        <rect x="634" y="320" width="36" height="220" />

        <rect x="676" y="380" width="28" height="160" />
        <rect x="710" y="360" width="34" height="180" />
        <rect x="748" y="400" width="30" height="140" />
      </g>

      <g fill="#ffffff" opacity="0.85">
        {Array.from({ length: 22 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const lit = (r * 5 + c) % 4 !== 0;
            return lit ? (
              <rect
                key={`st-${r}-${c}`}
                x={348 + c * 11}
                y={214 + r * 14}
                width={6}
                height={8}
                opacity={(r * c) % 3 === 0 ? 0.95 : 0.6}
              />
            ) : null;
          })
        )}
        {Array.from({ length: 18 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => {
            const lit = (r * 5 + c) % 5 !== 0;
            return lit ? (
              <rect
                key={`m-${r}-${c}`}
                x={524 + c * 10}
                y={254 + r * 14}
                width={6}
                height={8}
                opacity={(r + c) % 3 === 0 ? 0.95 : 0.55}
              />
            ) : null;
          })
        )}
        {Array.from({ length: 18 }).map((_, r) =>
          Array.from({ length: 4 }).map((__, c) => (
            <rect
              key={`jw-${r}-${c}`}
              x={418 + c * 10}
              y={274 + r * 14}
              width={6}
              height={8}
              opacity={((r * c) % 5) / 5 + 0.4}
            />
          ))
        )}
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 4 }).map((__, c) => (
            <rect
              key={`hm-${r}-${c}`}
              x={250 + c * 18}
              y={430 + r * 16}
              width={10}
              height={9}
              opacity={(r + c) % 2 === 0 ? 0.9 : 0.5}
            />
          ))
        )}
        {Array.from({ length: 16 }).map((_, r) =>
          Array.from({ length: 3 }).map((__, c) => (
            <rect
              key={`ice-${r}-${c}`}
              x={592 + c * 11}
              y={294 + r * 14}
              width={6}
              height={8}
              opacity={(r + c) % 2 === 0 ? 0.8 : 0.45}
            />
          ))
        )}
      </g>

      <g stroke="#000000" strokeWidth="3" fill="none">
        <line x1="120" y1="540" x2="120" y2="260" />
        <line x1="60" y1="280" x2="240" y2="280" />
        <line x1="120" y1="260" x2="60" y2="280" />
        <line x1="120" y1="260" x2="240" y2="280" />
        <line x1="170" y1="280" x2="170" y2="310" />
        <rect x="158" y="310" width="24" height="14" fill="#000000" />
      </g>

      <g fill="#ffffff" opacity="0.85">
        {[
          [80, 90],
          [180, 60],
          [300, 110],
          [470, 70],
          [560, 130],
          [720, 90],
          [770, 200],
          [40, 180],
          [240, 160],
          [380, 50],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={1.6} />
        ))}
      </g>
    </svg>
  );
}
