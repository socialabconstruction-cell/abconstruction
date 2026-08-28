import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "./Icons";

const GALLERY = [
  {
    src: "/images/unique/gravel-debris.jpg",
    alt: "Excavator loading material beside a dump truck",
    label: "Excavation",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/unique/machinery-debris.jpg",
    alt: "Foreman reviewing work on a construction site",
    label: "Site Checks",
    className: "",
  },
  {
    src: "/images/unique/unfinished-buildings.jpg",
    alt: "Dump truck moving soil on site",
    label: "Hauling",
    className: "",
  },
  {
    src: "/images/site/boom-pump-branded-side.jpg",
    alt: "AB Construction Group Alliance boom pump truck set up on a residential job site in Spruce Grove, Alberta",
    label: "Our Fleet",
    className: "md:col-span-2",
  },
  {
    src: "/images/site/boom-pump-overhead-lot.jpg",
    alt: "Overhead view of a boom pump truck with outriggers down on a new residential lot",
    label: "Site Access",
    className: "",
  },
  {
    src: "/images/unique/housing-dump-truck.jpg",
    alt: "Tower crane working above a construction project",
    label: "Commercial",
    className: "",
  },
  {
    src: "/images/unique/city-excavators.jpg",
    alt: "Excavator crews working in a city development corridor",
    label: "City Work",
    className: "md:col-span-2",
  },
  {
    src: "/images/unique/foundation-person.jpg",
    alt: "Crew preparing and checking foundation forms",
    label: "Foundation Prep",
    className: "",
  },
  {
    src: "/images/site/pump-truck-street-setup.jpg",
    alt: "Boom pump truck staged on the street beside a home under construction, ready to place concrete",
    label: "Pump Setup",
    className: "",
  },
  {
    src: "/images/services/cribbing-forming.jpg",
    alt: "Cribbing and forming work prepared for a concrete pour",
    label: "Forming",
    className: "md:col-span-2",
  },
];

export default function FieldGallery() {
  return (
    <section id="gallery" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">On Site</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-3 max-w-2xl">
              Real work, real equipment, and the site details clients look for.
            </h2>
          </div>
          <Link href="#quote" className="btn btn-ghost self-start md:self-end">
            Book a Site Visit
            <IconArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-lg bg-[color:var(--color-line)] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
