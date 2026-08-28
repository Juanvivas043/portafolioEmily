import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-dvh flex-col justify-center gap-6 px-6 py-24 sm:px-12">
      <p className="text-sm font-bold tracking-[0.18em] text-mist uppercase">
        {site.roleLong}
      </p>
      <h1 className="font-display text-6xl leading-[0.96] uppercase sm:text-8xl">
        {site.tagline}
      </h1>
      <p className="max-w-prose text-lg leading-relaxed text-mist">
        {site.summary}
      </p>
    </main>
  );
}
