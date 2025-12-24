import { useEffect, useMemo, useState } from "react";

// Vite: auto-import all images from src/assets/picture
const imageModules = import.meta.glob("../assets/picture/*.{png,jpg,jpeg,webp,gif}", {
  eager: true,
});

// Fisher–Yates shuffle (true random)
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ImageBoxSlider({
  interval = 2500,
  className = "",
  showControls = false,
}) {
  const images = useMemo(() => {
    const list = Object.values(imageModules).map((mod) => mod.default);
    return shuffle(list); // 👈 RANDOM ORDER
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  const prev = () =>
    images.length && setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () =>
    images.length && setIndex((i) => (i + 1) % images.length);

  if (!images.length) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 ${className}`}
      >
        <div className="grid h-full w-full place-items-center px-6 text-center">
          <p className="text-sm text-white/70">
            No images found in <span className="text-white/90">src/assets/picture</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 ${className}`}
    >
      <img
        key={images[index]}
        src={images[index]}
        alt="Synapse highlights"
        className="h-full w-full object-cover"
        loading="lazy"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/10"
        aria-hidden
      />

      {showControls && images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/10 transition hover:bg-black/55"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/10 transition hover:bg-black/55"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
