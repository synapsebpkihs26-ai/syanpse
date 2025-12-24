import { useEffect, useState } from "react";
import { socialLinks, socialSpotlightPosts } from "../data/content.js";

export default function SocialSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [embedState, setEmbedState] = useState({ loaded: false, timedOut: false });
  const totalPosts = socialSpotlightPosts.length;
  const activePost = socialSpotlightPosts[activeIndex];

  useEffect(() => {
    setEmbedState({ loaded: false, timedOut: false });
    const timer = setTimeout(() => {
      setEmbedState((prev) => ({ ...prev, timedOut: true }));
    }, 3500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const showFallback = embedState.timedOut && !embedState.loaded;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalPosts) % totalPosts);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPosts);
  };

  return (
    <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-ember">
      <div
        className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/12 to-plasma/12"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-[1.4fr_0.8fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-amber-100">
            <span>Social Spotlight</span>
            <span className="text-white/60">{activePost.platform}</span>
          </div>
          <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 sm:aspect-[16/10] lg:aspect-[4/5]">
            <iframe
              key={activePost.embedUrl}
              title={activePost.title}
              src={activePost.embedUrl}
              className={`h-full w-full ${showFallback ? "opacity-0" : "opacity-100"}`}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setEmbedState({ loaded: true, timedOut: false })}
            />
            {showFallback ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/70 p-6 text-center">
                <img
                  src={activePost.previewImage}
                  alt={`${activePost.title} preview`}
                  className="h-40 w-40 rounded-2xl object-cover shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-white/80">
                  This embed is unavailable here. Open the post on Instagram instead.
                </p>
                <a
                  href={activePost.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black"
                >
                  Open on Instagram
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex h-full flex-col gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Featured</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{activePost.title}</h3>
              <p className="mt-2 text-sm text-white/70">{activePost.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous post"
                className="rounded-full bg-white/10 p-2 text-sm text-white/70 transition hover:bg-white/20"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next post"
                className="rounded-full bg-white/10 p-2 text-sm text-white/70 transition hover:bg-white/20"
              >
                →
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  link.platform === activePost.platform
                    ? "bg-amber-300/20 text-amber-100 ring-1 ring-amber-200/50"
                    : "bg-white/10 text-white/70 ring-1 ring-white/10 hover:bg-white/20"
                }`}
              >
                {link.platform}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {socialSpotlightPosts.map((_, index) => (
                <button
                  key={`${activePost.platform}-${index}`}
                  type="button"
                  aria-label={`Go to post ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-6 rounded-full transition ${
                    index === activeIndex ? "bg-amber-300" : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <a
              href={activePost.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 hover:text-amber-100"
            >
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
