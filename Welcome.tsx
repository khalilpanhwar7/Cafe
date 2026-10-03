import { images } from "@/data";
import { CupIcon, LeafIcon, ClockIcon, BagIcon } from "./Icons";
import { SectionHeading } from "./ui";

const features = [
  {
    Icon: CupIcon,
    title: "Dine in",
    text: "Slow corners, warm light and outlets at every table.",
  },
  {
    Icon: BagIcon,
    title: "Take away",
    text: "Ready in 3 minutes — call ahead and skip the queue.",
  },
  {
    Icon: ClockIcon,
    title: "Order ahead",
    text: "Pickup or delivery in a few taps, straight from your phone.",
  },
  {
    Icon: LeafIcon,
    title: "Roasted fresh",
    text: "Small batch beans roasted every week, never sitting stale.",
  },
];

export default function Welcome() {
  return (
    <section id="welcome" className="relative bg-almond-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute top-10 left-0 h-64 w-64 animate-float-slow rounded-full bg-almond-200/50 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image collage */}
        <div className="reveal-left relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-coffee-900/20">
            <img
              src={images.welcome}
              alt="Warm cozy interior of KP Cafe"
              className="h-[26rem] w-full object-cover sm:h-[32rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -left-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-almond-50 shadow-xl shadow-coffee-900/20 sm:block animate-float">
            <img
              src={images.heartLatte}
              alt="Cappuccino with heart latte art"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-8 -right-3 hidden w-40 overflow-hidden rounded-2xl border-4 border-almond-50 shadow-xl shadow-coffee-900/20 sm:block animate-float-slow">
            <img
              src={images.beansBag}
              alt="Roasted coffee beans"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 right-2 hidden rounded-2xl bg-coffee-700 px-5 py-4 text-almond-50 shadow-xl shadow-coffee-900/30 md:block">
            <p className="font-display text-2xl">Since 2017</p>
            <p className="text-xs text-almond-200/80">Brewing on MM Alam Road</p>
          </div>
        </div>

        {/* Copy */}
        <div className="reveal-right order-1 lg:order-2">
          <SectionHeading eyebrow="Welcome" title="A small cafe with a very warm heart.">
            Come in for a proper coffee break, a fresh pastry, a warm crepe, a bagel, or a
            calm moment before the rest of your day. Everything is made to order, and the
            kettle is always on.
          </SectionHeading>

          <p className="mt-6 text-base leading-relaxed text-coffee-700/80">
            You can dine in, take away, order ahead, or bring the KP Cafe taste home with
            roasted coffee bags from our online store. Our baristas grind to order and will
            happily help you pick a roast that suits your mornings.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(({ Icon, title, text }, i) => (
              <div key={title} className={`reveal ${["", "d1", "d2", "d3"][i]} group`}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-almond-200 text-coffee-700 transition-all duration-300 group-hover:bg-coffee-700 group-hover:text-almond-100">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-coffee-800">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-coffee-700/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
