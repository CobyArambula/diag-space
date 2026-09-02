import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Background, approach, and contact.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Bio copy goes here. This page is a good place for Person structured data
        once the details are final.
      </p>
    </div>
  );
}
