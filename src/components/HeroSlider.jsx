import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../data/content.js";

const intervalMs = 5000;

export default function HeroSlider() {
  const slides = useMemo(() => heroSlides, []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const current = slides[index];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 bg-rings opacity-60" aria-hidden />
      <div className="absolute left-6 top-10 hidden h-32 w-32 rounded-full bg-gradient-to-br from-ember-500/35 via-magenta/30 to-plasma/30 blur-3xl md:block" />
      <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-magenta/30 via-ember-400/25 to-amber-200/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-100 ring-1 ring-white/10">
            <span className="hero-dot" /> Synapse • 2026
          </div>
          <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl">
            {current.title}
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">{current.caption}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/registration"
              className="rounded-full bg-gradient-to-r from-ember-500 via-amber-400 to-magenta px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-black shadow-ember ring-2 ring-amber-100/70 transition hover:scale-[1.02]"
            >
              Register Now
            </Link>
            {current.link && (
              <Link
                to={current.link.href}
                className="text-sm font-semibold text-amber-200 underline-offset-4 hover:underline"
              >
                {current.link.label}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-white/60">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-amber-300 shadow-ember" : "bg-white/20"}`}
              />
            ))}
            <span className="ml-3 text-white/50">Slide {index + 1} / {slides.length}</span>
          </div>
        </div>

        <div
          className="glass relative flex-1 overflow-hidden rounded-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <span className="hero-dot" />
              <span>{current.title}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <button
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                className="rounded-full bg-black/50 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
                className="rounded-full bg-black/50 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
