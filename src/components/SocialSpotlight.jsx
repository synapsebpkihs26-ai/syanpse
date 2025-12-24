import { featuredSocials } from "../data/content.js";
import Button from "./Button.jsx";

export default function SocialSpotlight() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Social Spotlight
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-white/70">
            Follow Synapse 2026 for the latest announcements, highlights, and updates.
          </p>
        </div>
        <div className="text-sm text-white/60">
          Official channels
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredSocials.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
          >
            <div className="grid gap-4 p-5 sm:grid-cols-[140px_1fr] sm:items-start">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-28"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
                    {item.platform}
                  </span>
                  {item.handle ? (
                    <span className="text-xs text-white/60">{item.handle}</span>
                  ) : null}
                </div>

                <h3 className="mt-2 truncate text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.blurb}</p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Button className="px-4 py-2 text-xs">Open</Button>
                  </a>
                  {item.embedUrl ? (
                    <a
                      href={item.embedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline"
                    >
                      Embed link
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
