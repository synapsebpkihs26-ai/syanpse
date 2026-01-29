import { useEffect, useMemo, useRef, useState } from "react";
import Container from "../components/Container.jsx";

export default function Sponsors() {
  const sponsorImages = useMemo(() => {
    const modules = import.meta.glob("../assets/imagess/*.png", {
      eager: true,
      import: "default",
    });

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, src]) => src);
  }, []);

  const sponsorNames = useMemo(
    () => sponsorImages.map((_, index) => `Sponsor ${index + 1}`),
    [sponsorImages],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSponsor, setActiveSponsor] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    sponsorImages.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [sponsorImages]);

  useEffect(() => {
    if (!sponsorImages.length) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => {
          if (sponsorImages.length === 1) return prev;

          let nextIndex = prev;
          while (nextIndex === prev) {
            nextIndex = Math.floor(Math.random() * sponsorImages.length);
          }
          return nextIndex;
        });
        setIsVisible(true);
      }, 240);
    }, 800);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [sponsorImages]);

  const activeLogo = sponsorImages[activeIndex];
  const activeName = sponsorNames[activeIndex];

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">
              Sponsors
            </p>
            <h1 className="text-4xl font-black">Thank you to our sponsors</h1>
            <p className="text-sm text-white/70">
              Your partnership fuels the Synapse 2026 experience across every arena.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {/* FEATURED SPONSOR */}
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
            <div
              className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12"
              aria-hidden
            />
            <div className="relative flex flex-col items-center gap-8">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
                OUR SPONSORS
              </p>

              <div className="flex h-72 w-full items-center justify-center rounded-3xl bg-black/40 ring-1 ring-white/10">
                {activeLogo && (
                  <img
                    src={activeLogo}
                    alt={activeName}
                    className={`h-56 w-[92%] object-contain transition-opacity duration-500 sm:h-60 sm:w-[85%] lg:h-64 lg:w-[75%] ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>

              <p className="text-sm text-white/70">
                FEATURING ALL PARTNERS WHO MAKE SYNAPSE 2026 POSSIBLE.
              </p>
            </div>
          </div>

          {/* ALL SPONSORS GRID */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-100">
                Full sponsor list
              </p>
              <h2 className="text-2xl font-black">All sponsors</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sponsorImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() =>
                    setActiveSponsor({ src, name: sponsorNames[index] })
                  }
                  className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 hover:bg-white/10 transition"
                >
                  <span className="text-sm font-semibold text-white">
                    {sponsorNames[index]}
                  </span>
                  <img
                    src={src}
                    alt={sponsorNames[index]}
                    loading="lazy"
                    className="h-36 w-full object-contain sm:h-40 lg:h-44"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* MODAL */}
      {activeSponsor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl rounded-3xl bg-midnight p-8 ring-1 ring-white/10">
            <button
              type="button"
              onClick={() => setActiveSponsor(null)}
              className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-6">
              <p className="text-lg font-semibold text-white">
                {activeSponsor.name}
              </p>
              <img
                src={activeSponsor.src}
                alt={activeSponsor.name}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
