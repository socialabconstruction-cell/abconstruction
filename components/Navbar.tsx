"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { SERVICES } from "@/lib/services";
import { IconArrowUpRight, IconChevronDown } from "./Icons";

const NAV = [
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link =
    "px-3 py-2 text-base font-medium text-white transition-colors hover:text-white/80";

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "top-0" : "top-3 md:top-5"
      }`}
    >
      {/* Bar: floating pill at top → full-width docked bar on scroll */}
      <div
        className={`mx-auto backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "w-full max-w-none rounded-none border-b border-white/10 bg-black shadow-[0_8px_30px_rgba(0,0,0,0.28)]"
            : "w-[90%] rounded-2xl ring-1 ring-white/10 bg-black shadow-[0_8px_30px_rgba(0,0,0,0.22)]"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-4 py-3 md:py-4 transition-all duration-300 ${
            scrolled ? "container-x" : "px-5 md:px-8"
          }`}
        >
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className={link}>
              Home
            </Link>
            <Link href="/about" className={link}>
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={`inline-flex items-center gap-1 ${link}`}
              >
                Services
                <IconChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-[34rem] rounded-xl bg-[color:var(--color-paper)] p-2 ring-1 ring-[color:var(--color-line)] shadow-2xl">
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-forest-900)] hover:text-white"
                      >
                        {s.shortTitle}
                        <IconArrowUpRight size={14} className="opacity-50" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="mt-1 flex items-center justify-between gap-3 rounded-lg border-t border-[color:var(--color-line)] px-3 pb-1 pt-3 text-sm font-semibold text-[color:var(--color-forest-700)] transition-colors hover:text-[color:var(--color-forest-900)]"
                  >
                    View all services
                    <IconArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={link}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex">
              <Link href="/contact" className="btn btn-on-dark text-sm">
                Request a Quote
                <IconArrowUpRight size={16} />
              </Link>
            </span>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <div className="space-y-1">
                <span className="block h-[2px] w-5 bg-current" />
                <span className="block h-[2px] w-5 bg-current" />
                <span className="block h-[2px] w-5 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden mx-auto grid transition-all duration-300 ${
          scrolled ? "w-full" : "w-[90%]"
        } ${open ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <nav
            className={`bg-black p-4 ring-1 ring-white/10 backdrop-blur-md space-y-1 ${
              scrolled ? "" : "rounded-2xl"
            }`}
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block py-2.5 font-medium text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-2.5 font-medium text-white"
            >
              About
            </Link>

            {/* Services expandable */}
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2.5 font-medium text-white"
            >
              Services
              <IconChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="ml-1 grid grid-cols-2 gap-x-4 border-l border-white/15 pl-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-white/70"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="col-span-2 mt-1 block py-2 text-sm font-semibold text-[color:var(--color-steel-300)]"
                >
                  View all services →
                </Link>
              </div>
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-medium text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-on-dark w-full justify-center mt-3"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
