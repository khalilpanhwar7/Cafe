import { useEffect, useState } from "react";
import { reviews } from "@/data";
import { ChevronLeft, ChevronRight, StarIcon } from "./Icons";
import { SectionHeading, Stars } from "./ui";

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const compute = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return perView;
}

export default function Reviews() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5200);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="reviews" className="grain relative overflow-hidden bg-almond-100 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 animate-blob bg-almond-300/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal">
            <SectionHeading
              eyebrow="Reviews"
              title="Loved for the coffee, pastries and warm service."
            >
              Highlights from customers who stopped in for coffee, brunch, pastries and a
              relaxing break.
            </SectionHeading>
          </div>

          <div className="reveal d1 flex flex-col gap-6 rounded-3xl bg-almond-50 p-6 shadow-lg shadow-coffee-900/5 sm:flex-row sm:items-center">
            <div className="text-center sm:text-left">
              <p className="font-display text-5xl text-coffee-800">4.8</p>
              <Stars count={5} className="mt-2 justify-center sm:justify-start" />
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-coffee-500">
                1,200+ Google reviews
              </p>
            </div>
            <div className="flex-1 space-y-1.5">
              {[
                { s: 5, p: 82 },
                { s: 4, p: 12 },
                { s: 3, p: 4 },
                { s: 2, p: 1 },
                { s: 1, p: 1 },
              ].map((row) => (
                <div key={row.s} className="flex items-center gap-2 text-xs text-coffee-600">
                  <span className="w-3">{row.s}</span>
                  <StarIcon className="h-3 w-3 text-almond-400" />
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-almond-200">
                    <span
                      className="block h-full rounded-full bg-coffee-500 transition-[width] duration-1000"
                      style={{ width: `${row.p}%` }}
                    />
                  </span>
                  <span className="w-8 text-right">{row.p}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="reveal d2 relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="w-full shrink-0 px-0 sm:w-1/2 sm:px-3 lg:w-1/3"
                >
                  <article className="flex h-full flex-col justify-between rounded-3xl bg-almond-50 p-7 shadow-lg shadow-coffee-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-coffee-900/10">
                    <div>
                      <Stars count={r.stars} />
                      <p className="mt-4 text-[15px] leading-relaxed text-coffee-700">
                        “{r.text}”
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t border-coffee-200/70 pt-5">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-coffee-700 font-display text-almond-100">
                        {r.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-coffee-800">{r.name}</p>
                        <p className="text-xs text-coffee-500">{r.meta}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i <= 0 ? maxIndex : i - 1))}
              className="grid h-11 w-11 place-items-center rounded-full bg-almond-50 text-coffee-700 shadow transition-all duration-300 hover:bg-coffee-700 hover:text-almond-50"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-coffee-700" : "w-2 bg-coffee-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
              className="grid h-11 w-11 place-items-center rounded-full bg-almond-50 text-coffee-700 shadow transition-all duration-300 hover:bg-coffee-700 hover:text-almond-50"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
