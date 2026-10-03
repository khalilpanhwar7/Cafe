import { useEffect, useState } from "react";
import { images } from "@/data";
import { useLockBodyScroll } from "@/hooks";
import { CloseIcon, PlayIcon } from "./Icons";

const scenes = [images.videoCover, images.interiorNight, images.barista, images.plants];
const captions = [
  "Morning light on the counter",
  "Evening rush, warm lamps on",
  "Packing your coffee bag fresh",
  "The plant corner everyone loves",
];

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [scene, setScene] = useState(0);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    setScene(0);
    const timer = setInterval(() => setScene((s) => (s + 1) % scenes.length), 3200);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="video" className="relative bg-coffee-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
          <img
            src={images.videoCover}
            alt="KP Cafe shop video preview"
            className="h-[22rem] w-full object-cover sm:h-[30rem]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/85 via-coffee-900/25 to-coffee-900/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative grid h-20 w-20 place-items-center rounded-full bg-almond-100/95 text-coffee-800 transition-transform duration-300 hover:scale-110"
              aria-label="Play shop video"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-almond-200/50" />
              <PlayIcon className="ml-1 h-8 w-8" />
            </button>
            <p className="mt-6 font-display text-2xl text-almond-50 sm:text-3xl">
              Take a 40 second tour
            </p>
            <p className="mt-2 text-sm text-almond-100/70">Shop video · KP Cafe, Gulberg III</p>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-coffee-900/95 p-4 backdrop-blur">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-almond-50 transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black">
            <div className="relative aspect-video">
              {scenes.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={captions[i]}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    i === scene ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transform: i === scene ? "scale(1.05)" : "scale(1)" }}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-red-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    Playing
                  </span>
                  <p className="text-sm text-white/90">{captions[scene]}</p>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    key={scene}
                    className="h-full rounded-full bg-almond-300"
                    style={{ width: "100%", transition: "width 3.2s linear" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
