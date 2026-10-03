import { beans, business, images } from "@/data";
import { BagIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading, Stars } from "./ui";

export default function Beans() {
  return (
    <section id="beans" className="relative overflow-hidden bg-almond-100 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 animate-float-slow rounded-full bg-almond-300/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="reveal">
            <SectionHeading eyebrow="Coffee bags" title="Bring KP Cafe home.">
              Choose from Almond Cream, Midnight Espresso and Sunrise Original blends —
              roasted in small batches, packed the same week and ready to order online.
            </SectionHeading>
          </div>
          <div className="reveal d1 grid grid-cols-3 gap-4 rounded-3xl bg-almond-50 p-5 shadow-lg shadow-coffee-900/5">
            {["250g bags", "Free grinding", "Nationwide"].map((t, i) => (
              <div key={t} className="text-center">
                <p className="font-display text-3xl text-coffee-700">{["3", "Any", "2–4"][i]}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-coffee-500">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {beans.map((b, i) => (
            <article
              key={b.name}
              className={`reveal ${["", "d2", "d3"][i]} group flex flex-col overflow-hidden rounded-[2rem] bg-almond-50 shadow-lg shadow-coffee-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-coffee-900/20`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-coffee-800/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-almond-100 backdrop-blur">
                  {b.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Stars count={5} />
                <h3 className="mt-3 font-display text-2xl text-coffee-800">{b.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-coffee-500">
                  {b.origin}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-coffee-700/80">{b.notes}</p>
                <div className="mt-6 flex items-center justify-between border-t border-coffee-200/70 pt-5">
                  <div>
                    <p className="font-display text-xl text-coffee-800">{b.price}</p>
                    <p className="text-xs text-coffee-500">{b.weight} bag</p>
                  </div>
                  <a
                    href={`${business.socials.whatsapp}?text=${encodeURIComponent(
                      `Hi KP Cafe! I'd like to order the ${b.name} (${b.weight}).`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-coffee-700 px-4 py-2.5 text-sm font-semibold text-almond-50 transition-all duration-300 hover:bg-coffee-900"
                  >
                    <BagIcon className="h-4 w-4" />
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-[2rem] bg-coffee-800">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl text-almond-50 sm:text-4xl">
                Not sure which roast is yours?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-almond-100/75">
                Tell us how you brew at home — French press, moka pot, espresso machine — and
                we will match you with the right grind and roast, then ship it anywhere in
                Pakistan.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`${business.socials.whatsapp}?text=${encodeURIComponent(
                    "Hi KP Cafe! I'd like help choosing a coffee bag.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-almond-200 px-6 py-3 text-sm font-semibold text-coffee-800 transition-colors hover:bg-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Shop all coffee beans
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-almond-200/40 px-6 py-3 text-sm font-semibold text-almond-50 transition-colors hover:bg-white/10"
                >
                  See the roastery
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images.beansShelf}
                alt="Coffee bags displayed on a shelf"
                loading="lazy"
                className="h-40 w-full rounded-2xl object-cover sm:h-52"
              />
              <img
                src={images.barista}
                alt="Barista packing coffee bags"
                loading="lazy"
                className="h-40 w-full translate-y-6 rounded-2xl object-cover sm:h-52"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
