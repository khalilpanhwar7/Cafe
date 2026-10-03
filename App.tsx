import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Order from "@/components/Order";
import Beans from "@/components/Beans";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { ArrowUpIcon, WhatsAppIcon } from "@/components/Icons";
import { business } from "@/data";
import { useRevealOnScroll, useScrolled } from "@/hooks";

function FloatingButtons() {
  const scrolled = useScrolled(500);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 transition-all duration-500 sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-12 w-12 place-items-center rounded-full bg-coffee-800 text-almond-100 shadow-lg shadow-coffee-900/30 transition-all duration-500 hover:bg-coffee-700 ${
          scrolled ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      <a
        href={`${business.socials.whatsapp}?text=${encodeURIComponent(
          "Hi KP Cafe! I'd like to know more.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-almond-50 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Order />
        <Beans />
        <Gallery />
        <VideoSection />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
