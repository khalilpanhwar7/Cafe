import { useEffect, useState } from "react";
import { galleryItems } from "@/data";
import { useLockBodyScroll } from "@/hooks";
import { CloseIcon, ChevronLeft, ChevronRight } from "./Icons";
import { SectionHeading } from "./ui";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  useLockBodyScroll(index !== null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % galleryItems.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <section id="gallery" className="relative bg-almond-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading eyebrow="Gallery" title="See the shop before you stop by.">
            A glimpse of the KP Cafe storefront, the warm local atmosphere and the coffee
            bags you can take home.
          </SectionHeading>
        </div>

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <button
              key={item.src + i}
              type="button"
              onClick={() => setIndex(i)}
              className={`reveal ${["", "d1", "d2", "d3"][i % 4]} group relative overflow-hidden rounded-2xl ${
                item.span ?? ""
              }`}
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-coffee-900/0 transition-colors duration-500 group-hover:bg-coffee-900/45" />
              <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-xl bg-white/90 px-3 py-1.5 text-left text-[11px] font-medium text-coffee-800 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-coffee-900/95 p-4 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setIndex(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-almond-50 transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() =>
              setIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length))
            }
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-almond-50 transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() =>
              setIndex((i) => (i === null ? i : (i + 1) % galleryItems.length))
            }
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-almond-50 transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="max-h-[80vh] w-full max-w-4xl">
            <img
              src={galleryItems[index].src}
              alt={galleryItems[index].alt}
              className="max-h-[72vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-almond-200/80">
              {galleryItems[index].alt} · {index + 1} / {galleryItems.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
