import { business, images, marqueeWords, stats } from "@/data";
import { useCountUp } from "@/hooks";
import { CupIcon, PinIcon, StarIcon } from "./Icons";

function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: string;
}) {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const useNumber = /^[0-9.]+/.test(value) && numeric < 100;
  const counted = useCountUp(useNumber ? numeric : 0, true, 1600);
  const display = useNumber
    ? `${numeric % 1 === 0 ? Math.round(counted) : counted.toFixed(1)}${suffix}`
    : value;
  return (
    <div className={`reveal ${delay}`}>
      <p className="font-display text-2xl font-semibold text-almond-100 sm:text-3xl">
        {display}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-almond-300/80">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-coffee-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="KP Cafe storefront decorated with plants"
          className="h-full w-full object-cover object-center animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/90 via-coffee-900/70 to-coffee-900/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-coffee-900/60" />
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 animate-blob bg-almond-300/20 blur-2xl" />
      <div className="pointer-events-none absolute top-1/2 left-[-6rem] h-80 w-80 animate-float-slow bg-coffee-400/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-3 rounded-full border border-almond-200/25 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <StarIcon className="h-4 w-4 text-almond-300" />
              <strong className="text-sm font-semibold text-almond-50">
                {business.rating} ★
              </strong>
            </span>
            <span className="h-4 w-px bg-almond-200/30" />
            <span className="text-sm text-almond-100/90">{business.reviews}</span>
          </div>

          <p className="reveal d1 mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-almond-300">
            <span className="h-px w-10 bg-almond-300/70" />
            Welcome to KP Cafe
          </p>

          <h1 className="reveal d2 font-display text-4xl leading-[1.08] font-semibold text-almond-50 text-shadow-soft sm:text-6xl lg:text-7xl">
            Your cozy coffee stop in{" "}
            <span className="relative inline-block text-almond-300">
              Gulberg
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-almond-400/70"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8c60-6 120-6 180-3s80 2 116-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="reveal d3 mt-8 max-w-xl text-base leading-relaxed text-almond-100/85 sm:text-lg">
            Come in for a proper coffee break, a fresh pastry, a warm crepe, a bagel, or a
            calm moment before the rest of your day. Dine in, take away, order ahead — or
            bring the KP Cafe taste home with our roasted coffee bags.
          </p>

          <div className="reveal d4 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#order"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-almond-200 px-7 py-3.5 text-sm font-semibold text-coffee-800 transition-all duration-300 hover:bg-almond-100 hover:shadow-xl hover:shadow-almond-200/20"
            >
              <CupIcon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              Order pickup or delivery
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-almond-200/40 px-7 py-3.5 text-sm font-semibold text-almond-50 transition-all duration-300 hover:bg-white/10"
            >
              See the cafe
            </a>
          </div>

          <div className="reveal d5 mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-almond-100/80">
            <PinIcon className="h-4 w-4 text-almond-300" />
            <span>{business.addressShort}</span>
            <span className="hidden h-4 w-px bg-almond-200/30 sm:block" />
            <span className="font-medium text-almond-200">Open today · 8:00 AM – 11:00 PM</span>
          </div>
        </div>

        {/* Floating info card */}
        <div className="reveal-right mt-14 hidden self-end rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md md:block">
          <div className="flex items-center gap-4">
            <div className="relative grid h-14 w-14 place-items-center rounded-full bg-almond-200/90">
              <CupIcon className="h-7 w-7 text-coffee-700" />
              <span className="absolute -top-6 left-3 h-6 w-1.5 rounded-full bg-white/40 blur-[2px] animate-steam" />
              <span
                className="absolute -top-6 left-7 h-6 w-1.5 rounded-full bg-white/30 blur-[2px] animate-steam"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="absolute -top-6 left-11 h-6 w-1.5 rounded-full bg-white/25 blur-[2px] animate-steam"
                style={{ animationDelay: "2.4s" }}
              />
            </div>
            <div>
              <p className="font-display text-lg text-almond-50">Fresh cup, 3 min average</p>
              <p className="text-xs text-almond-100/70">
                Order ahead on WhatsApp and skip the queue
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-md sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={["", "d1", "d2", "d3"][i]} />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-t border-white/10 bg-coffee-900/80 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-8 text-sm text-almond-200/80">
              {w}
              <span className="h-1.5 w-1.5 rounded-full bg-almond-400/70" />
            </span>
          ))}
        </div>
      </div>

      <a
        href="#welcome"
        aria-label="Scroll to welcome section"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-almond-200/70 transition-colors hover:text-almond-100 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-5 rounded-full border border-almond-200/40 p-1">
          <span className="block h-2 w-1 animate-float rounded-full bg-almond-300" />
        </span>
      </a>
    </section>
  );
}
