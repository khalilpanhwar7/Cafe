import { useEffect, useState } from "react";
import { business, navLinks } from "@/data";
import { useActiveSection, useScrollProgress, useScrolled } from "@/hooks";
import { CupIcon, MenuIcon, CloseIcon } from "./Icons";
import { Socials } from "./ui";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const scrolled = useScrolled(60);
  const progress = useScrollProgress();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-almond-50/95 shadow-[0_6px_30px_-12px_rgba(42,24,19,0.35)] backdrop-blur-md"
            : "bg-gradient-to-b from-coffee-900/60 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={go("#top")}
            className="group flex items-center gap-3"
            aria-label={`${business.name} home`}
          >
            <span
              className={`grid h-11 w-11 place-items-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
                scrolled
                  ? "bg-coffee-700 text-almond-100"
                  : "bg-almond-100/95 text-coffee-800"
              }`}
            >
              <CupIcon className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span
                className={`block font-display text-xl font-semibold tracking-tight transition-colors ${
                  scrolled ? "text-coffee-800" : "text-almond-50"
                }`}
              >
                KP <span className="text-almond-400">Cafe</span>
              </span>
              <span
                className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.3em] transition-colors ${
                  scrolled ? "text-coffee-500" : "text-almond-200/80"
                }`}
              >
                Roasters · Lahore
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={go(l.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-coffee-700 hover:text-coffee-900"
                      : "text-almond-100/90 hover:text-white"
                  } ${active === l.href.replace("#", "") ? "text-almond-400" : ""}`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-almond-400 transition-transform duration-300 ${
                      active === l.href.replace("#", "") ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Socials className="hidden xl:flex" iconClass="h-4 w-4" size="sm" />
            <a
              href="#order"
              onClick={go("#order")}
              className="hidden rounded-full bg-coffee-700 px-5 py-2.5 text-sm font-semibold text-almond-50 transition-all duration-300 hover:bg-coffee-800 hover:shadow-lg hover:shadow-coffee-900/30 sm:block"
            >
              Order ahead
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${
                scrolled
                  ? "bg-coffee-100 text-coffee-800"
                  : "bg-white/15 text-white backdrop-blur"
              }`}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <div className="h-0.5 w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-almond-400 via-coffee-400 to-coffee-700 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-coffee-900/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[min(84%,24rem)] max-w-sm overflow-y-auto bg-almond-50 shadow-2xl transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee-500">
            Menu
          </p>
          <ul className="mt-6 space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={go(l.href)}
                  className="flex items-center justify-between border-b border-coffee-200/60 py-4 font-display text-2xl text-coffee-800 transition-colors hover:text-almond-500"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {l.label}
                  <span className="text-sm text-coffee-400">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-5 pt-8">
            <a
              href="#order"
              onClick={go("#order")}
              className="block rounded-full bg-coffee-700 py-3.5 text-center text-sm font-semibold text-almond-50"
            >
              Order pickup or delivery
            </a>
            <Socials size="md" className="justify-center" iconClass="h-5 w-5" />
            <p className="text-center text-xs text-coffee-500">{business.addressShort}</p>
          </div>
        </div>
      </div>
    </>
  );
}
