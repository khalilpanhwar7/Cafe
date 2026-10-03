import { business } from "@/data";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from "./Icons";
import { SectionHeading, Socials } from "./ui";

const mapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=74.3306%2C31.5134%2C74.3566%2C31.5274&layer=mapnik&marker=31.5204%2C74.3436";
const directions =
  "https://www.google.com/maps/dir/?api=1&destination=MM+Alam+Road+Gulberg+III+Lahore";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-almond-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHeading eyebrow="Visit" title="Visit KP Cafe on MM Alam Road.">
            We are right in the middle of Gulberg III — look for the almond coloured awning,
            the bicycle out front and the smell of fresh espresso.
          </SectionHeading>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Info cards */}
          <div className="reveal space-y-4 lg:col-span-1">
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-3xl bg-almond-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-coffee-900/10"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-coffee-700 text-almond-100">
                <PinIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-500">
                  Address
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-coffee-800">
                  {business.address}
                </p>
                <p className="mt-2 text-sm font-medium text-coffee-600 underline decoration-almond-400 underline-offset-4 group-hover:text-coffee-800">
                  Get directions →
                </p>
              </div>
            </a>

            <a
              href={business.phoneHref}
              className="group flex gap-4 rounded-3xl bg-almond-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-coffee-900/10"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-coffee-700 text-almond-100">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-500">
                  Phone
                </p>
                <p className="mt-1 text-[15px] text-coffee-800">{business.phoneDisplay}</p>
                <p className="mt-2 text-sm font-medium text-coffee-600 group-hover:text-coffee-800">
                  Call or WhatsApp us
                </p>
              </div>
            </a>

            <div className="flex gap-4 rounded-3xl bg-coffee-800 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-almond-200 text-coffee-800">
                <ClockIcon className="h-6 w-6" />
              </span>
              <div className="w-full">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-almond-300">
                  Hours
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-almond-100/90">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between gap-4">
                      <span>{h.day}</span>
                      <span className="font-medium text-almond-200">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-coffee-200 bg-almond-100/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-500">
                Follow along
              </p>
              <p className="mt-2 text-sm text-coffee-700/80">
                New roasts, seasonal drinks and weekend specials.
              </p>
              <Socials className="mt-4" iconClass="h-5 w-5" />
            </div>
          </div>

          {/* Map */}
          <div className="reveal d1 lg:col-span-2">
            <div className="h-[28rem] overflow-hidden rounded-[2rem] border border-coffee-200 shadow-xl shadow-coffee-900/10 lg:h-full">
              <iframe
                title="Map showing KP Cafe on MM Alam Road, Gulberg III, Lahore"
                src={mapSrc}
                className="h-full w-full grayscale-[0.25] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="reveal d2 mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              Icon: WhatsAppIcon,
              title: "Message us",
              text: "Quickest way to reserve a table",
              href: business.socials.whatsapp,
            },
            {
              Icon: InstagramIcon,
              title: "Daily specials",
              text: "@kpcafe stories every morning",
              href: business.socials.instagram,
            },
            {
              Icon: FacebookIcon,
              title: "Events & offers",
              text: "Live music every Friday night",
              href: business.socials.facebook,
            },
          ].map(({ Icon, title, text, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-coffee-900/10"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-almond-200 text-coffee-700 transition-colors group-hover:bg-coffee-700 group-hover:text-almond-100">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-coffee-800">{title}</p>
                <p className="text-xs text-coffee-500">{text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
