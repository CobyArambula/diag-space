import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl px-6 py-6 text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
