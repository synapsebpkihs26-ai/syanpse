import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function InfoPopout({
  open,
  title,
  body,
  actionHref,
  actionLabel,
  onClose,
  image,
  imageAlt,
}) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-popout-title"
      onClick={handleClose}
    >
      <div
        className="info-popout relative w-full max-w-md overflow-hidden rounded-3xl border border-amber-300/40 bg-midnight shadow-ember"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-ember-500/15 via-magenta/12 to-plasma/12"
          aria-hidden
        />

        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-xs text-white/80 transition hover:bg-white/20"
          onClick={handleClose}
          aria-label="Close pop-out"
        >
          ✕
        </button>

        <div className="relative space-y-4 p-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-100">
            <span className="hero-dot" /> Quick note
          </div>

          <div className="flex gap-4">
            {image ? (
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
                <img
                  src={image}
                  alt={imageAlt || `${title} logo`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}
            <div className="space-y-2">
              <h3 id="info-popout-title" className="text-xl font-bold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/70">{body}</p>
            </div>
          </div>

          {actionHref && actionLabel ? (
            <div className="pt-2">
              <Link
                to={actionHref}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-400"
              >
                {actionLabel}
              </Link>
            </div>
          ) : null}

          <div className="text-right">
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
