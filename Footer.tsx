import { business, navLinks } from "@/data";
import { ClockIcon, CupIcon, PhoneIcon, PinIcon, TikTokIcon } from "./Icons";
import { Socials } from "./ui";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-coffee-900 pt-16 text-almond-100">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 animate-float-slow rounded-full bg-coffee-700/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-almond-200 text-coffee-800">
                <CupIcon className="h-6 w-6" />
              </span>
              <span className="font-display text-2xl text-almond-50">
                KP <span className="text-almond-300">Cafe</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-almond-100/70">
              A cozy neighbourhood cafe roasting small batch coffee, baking every morning and
              keeping the kettle warm till late.
            </p>
            <Socials className="mt-6" variant="light" iconClass="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-almond-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-almond-100/75 transition-colors hover:text-almond-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-almond-300">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-almond-100/75">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day}</span>
                  <span className="text-almond-300">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-almond-100/60">
              <ClockIcon className="h-4 w-4 text-almond-300" />
              Open every day of the year
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-almond-300">
              Find us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-almond-100/75">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-almond-300" />
                <span>{business.address}</span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-almond-300" />
                <a href={business.phoneHref} className="hover:text-almond-300">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-almond-100 transition-colors hover:bg-white/20"
                >
                  <TikTokIcon className="h-4 w-4" />
                  Watch us on TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-almond-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. Brewed with care in Lahore.
          </p>
          <p className="flex items-center gap-2">
            Made with <span className="text-almond-300">♥</span> and a lot of espresso
          </p>
        </div>
      </div>
    </footer>
  );
}
