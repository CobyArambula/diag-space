import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Book a time to talk.",
};

export default function SchedulePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">Schedule</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        A Cal.com embed will go here. Until then, this route exists so the
        sitemap and navigation stay stable.
      </p>
    </div>
  );
}
