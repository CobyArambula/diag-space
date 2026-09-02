import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className="font-medium tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
