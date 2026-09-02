import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">Work</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Case studies will live here. Each project should become its own page so
        search engines can index it.
      </p>
    </div>
  );
}
