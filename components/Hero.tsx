import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconChevronDown, IconPhone } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[color:var(--color-forest-950)] text-[color:var(--color-bg)]">
      <Image
        src="/images/site/boom-pump-pour-aerial.jpg"
        alt="AB Construction Group boom pump placing concrete for a residential foundation beside a stormwater pond in Spruce Grove, Alberta"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Scrim: keeps the white hero copy legible over the bright concrete
          and sky in the photo. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

      <div className="relative flex-1 flex flex-col">
        <div className="container-x flex-1 flex flex-col justify-end pt-32 pb-16 md:pb-20">
          <div className="hero-copy max-w-3xl">
            <p className="eyebrow text-[color:var(--color-steel-300)] reveal">
              <span className="inline-block h-[1px] w-8 align-middle mr-3 bg-[color:var(--color-steel-300)]" />
              Edmonton · Alberta · Built for the Job Site
            </p>
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] font-medium mt-5 reveal">
              Building Stronger<br />
              <span className="text-[color:var(--color-steel-300)]">Foundations.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-white/85 leading-relaxed reveal">
              Concrete Pumping, Footings, Waterproofing, Excavation, Trucking, and Aggregate
              Supply for Albertan Builders who need clean work and dependable schedules.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 reveal">
              <Link href="#quote" className="btn btn-on-dark w-full justify-center sm:w-auto">
                Request a Quote
                <IconArrowUpRight size={16} />
              </Link>
              <Link href="#services" className="btn btn-outline-on-dark w-full justify-center sm:w-auto">
                View Our Services
              </Link>
              <a href="tel:+17808185555" className="hidden sm:inline-flex items-center gap-2 ml-2 text-sm text-white/80 hover:text-white">
                <IconPhone size={16} /> (780) 818-5555
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/45 backdrop-blur-sm">
          <div className="container-x py-5 flex flex-nowrap items-center justify-between gap-x-3 overflow-x-auto whitespace-nowrap text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] text-[color:var(--color-steel-300)] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            <span>Residential</span>
            <span className="opacity-40">·</span>
            <span>Commercial</span>
            <span className="opacity-40">·</span>
            <span>Foundations</span>
            <span className="opacity-40">·</span>
            <span>Excavation</span>
            <span className="opacity-40">·</span>
            <span>Aggregate Supply</span>
            <span className="opacity-40">·</span>
            <span>Alberta-wide</span>
          </div>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-24 right-[2.5%] hidden items-center gap-2 rounded-full border border-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white xl:inline-flex"
      >
        Scroll
        <IconChevronDown size={14} />
      </Link>
    </section>
  );
}
