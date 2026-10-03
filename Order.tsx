import { business, menuHighlights } from "@/data";
import { BagIcon, ClockIcon, CupIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./ui";

const steps = [
  { n: "01", title: "Open the order page", text: "Tap a button below — WhatsApp opens with our cafe." },
  { n: "02", title: "Choose pickup or delivery", text: "Tell us your items and where you are." },
  { n: "03", title: "We confirm in minutes", text: "Pay on pickup, or cash/EasyPaisa on delivery." },
];

export default function Order() {
  return (
    <section id="order" className="grain relative overflow-hidden bg-coffee-800 py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 animate-blob bg-coffee-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 animate-float-slow bg-almond-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading
            eyebrow="Order"
            tone="light"
            title="Order pickup or delivery in a few taps."
          >
            Open the order page, choose pickup or delivery, then select the option that works
            best for you. We pack everything fresh and keep it hot.
          </SectionHeading>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal ${["", "d1", "d2"][i]} rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-almond-300/40`}
            >
              <span className="font-display text-3xl text-almond-400/80">{s.n}</span>
              <h3 className="mt-3 font-display text-xl text-almond-50">{s.title}</h3>
              <p className="mt-2 text-sm text-almond-100/70">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Pickup / delivery cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <a
            href={`${business.socials.whatsapp}?text=${encodeURIComponent(
              "Hi KP Cafe! I'd like to place a PICKUP order.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group relative overflow-hidden rounded-[2rem] bg-almond-100 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-coffee-900/40"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coffee-700 text-almond-100">
                  <BagIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-3xl text-coffee-800">Pickup</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-coffee-700/80">
                  Order ahead and it will be waiting on the counter, hot and labelled with
                  your name. Ready in 5–8 minutes.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-coffee-700 px-5 py-2.5 text-sm font-semibold text-almond-50 transition-colors group-hover:bg-coffee-900">
                  <WhatsAppIcon className="h-4 w-4" />
                  Order pickup
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-almond-300/40 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          </a>

          <a
            href={`${business.socials.whatsapp}?text=${encodeURIComponent(
              "Hi KP Cafe! I'd like a DELIVERY order.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal d1 group relative overflow-hidden rounded-[2rem] bg-coffee-900 p-8 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-coffee-900/40"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-almond-200 text-coffee-800">
              <PinIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-3xl text-almond-50">Delivery</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-almond-100/70">
              We deliver within 5 km of Gulberg III — Gulberg, DHA Phase 1, Model Town and
              Garden Town. Free delivery over Rs 2,000.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-almond-200 px-5 py-2.5 text-sm font-semibold text-coffee-800 transition-colors group-hover:bg-white">
              <WhatsAppIcon className="h-4 w-4" />
              Order delivery
            </span>
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-coffee-500/40 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          </a>
        </div>

        {/* Menu highlights */}
        <div className="mt-16">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl text-almond-50 sm:text-3xl">
              A few things our regulars love
            </h3>
            <p className="text-sm text-almond-200/70">Full menu available in store</p>
          </div>
          <div className="mt-8 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {menuHighlights.map((item, i) => (
              <div
                key={item.name}
                className={`reveal ${["", "d1", "d2", "d3", "d4", "d5"][i % 6]} group flex items-center justify-between gap-4 border-b border-white/10 py-4 transition-colors hover:border-almond-300/50`}
              >
                <div className="flex items-start gap-3">
                  <CupIcon className="mt-1 h-5 w-5 shrink-0 text-almond-400 transition-transform duration-300 group-hover:-rotate-12" />
                  <div>
                    <p className="font-medium text-almond-50">{item.name}</p>
                    <p className="text-xs text-almond-100/60">{item.desc}</p>
                  </div>
                </div>
                <p className="shrink-0 font-display text-lg text-almond-300">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4 text-sm text-almond-100/70">
            <ClockIcon className="h-5 w-5 text-almond-300" />
            <span>Kitchen closes 30 minutes before the cafe.</span>
            <a
              href={business.phoneHref}
              className="font-semibold text-almond-200 underline decoration-almond-400 underline-offset-4"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
