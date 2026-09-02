export const site = {
  name: "diag-space",
  title: "diag-space",
  description:
    "Personal portfolio of work, writing, and ways to get in touch.",
  // Replace with the production domain before launch (used by sitemap + Open Graph).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
] as const;
