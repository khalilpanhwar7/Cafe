import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 1.98.53 3.9 1.53 5.6L4.5 28l7.55-1.98a11 11 0 0 0 3.99.74h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.12 4 16.04 4Zm0 20.15c-1.32 0-2.62-.36-3.76-1.03l-.27-.16-4.48 1.18 1.2-4.37-.17-.28a8.98 8.98 0 0 1-1.37-4.79c0-4.98 4.05-9.03 9.03-9.03 2.41 0 4.68.94 6.38 2.65a8.96 8.96 0 0 1 2.64 6.38c0 4.98-4.05 9.03-9.03 9.03Zm4.94-6.77c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.13-.18.28-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.88-.15-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.28-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.57.64.2 1.22.18 1.68.11.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.6V13h2.7v8h3.2Z" />
  </svg>
);

export const TikTokIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c.3 2.1 1.6 3.4 3.7 3.6v2.5c-1.3.1-2.5-.3-3.7-1.1v5.7A5.42 5.42 0 0 1 11 19a5.5 5.5 0 0 1-2.9-10.2v2.7a2.8 2.8 0 1 0 2 2.7V3h6.4Z" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 1.9" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
  </svg>
);

export const PlayIcon = (p: IconProps) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5.14v13.72L19 12 8 5.14Z" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const ChevronLeft = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ArrowUpIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const BagIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 7h12l1 13H5L6 7Z" />
    <path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);

export const CupIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
    <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
    <path d="M7 3.5c0 1 .8 1.2.8 2M11 3.5c0 1 .8 1.2.8 2" />
  </svg>
);

export const LeafIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 4C10 4 4 9 4 17c0 1.2.2 2.2.4 3" />
    <path d="M20 4c0 9-5.5 13-12 13-1.5 0-2.6-.2-3.6-.6C6 10 12 5 20 4Z" />
  </svg>
);

export const socialList = [
  { key: "whatsapp", label: "WhatsApp", Icon: WhatsAppIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "tiktok", label: "TikTok", Icon: TikTokIcon },
] as const;
