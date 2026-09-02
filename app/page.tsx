export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm uppercase tracking-widest text-zinc-500">Portfolio</p>
      <h1 className="max-w-xl text-4xl font-semibold tracking-tight">
        diag-space
      </h1>
      <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        A starter for work, writing, and ways to get in touch. Newsletter signup
        and calendar booking will plug into this layout later.
      </p>
    </div>
  );
}
