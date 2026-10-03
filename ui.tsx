import type { ReactNode } from "react";
import { business } from "@/data";
import { socialList } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className={`h-px w-10 ${isLight ? "bg-almond-300/60" : "bg-coffee-400/60"}`}
        />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            isLight ? "text-almond-200" : "text-coffee-500"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl ${
          isLight ? "text-almond-50" : "text-coffee-800"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-almond-100/85" : "text-coffee-700/85"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

export function Socials({
  className = "",
  iconClass = "h-4 w-4",
  size = "md",
  variant = "dark",
}: {
  className?: string;
  iconClass?: string;
  size?: "sm" | "md";
  variant?: "dark" | "light";
}) {
  const box =
    size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const styles =
    variant === "light"
      ? "bg-white/10 text-almond-100 ring-1 ring-white/20 hover:bg-white/20 hover:text-white"
      : "bg-almond-100 text-coffee-700 ring-1 ring-coffee-200 hover:bg-coffee-700 hover:text-almond-50";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialList.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={business.socials[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`${box} ${styles} grid place-items-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-coffee-900/20`}
        >
          <Icon className={iconClass} />
        </a>
      ))}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-almond-200/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-coffee-700 ${className}`}
    >
      {children}
    </span>
  );
}

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? "text-almond-400" : "text-almond-200/50"}`}
          fill="currentColor"
        >
          <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
        </svg>
      ))}
    </div>
  );
}
