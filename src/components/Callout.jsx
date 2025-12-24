export default function Callout({ title, children, tone = "info" }) {
  const tones = {
    info: "border-cyan-300/30 bg-cyan-500/10 shadow-[0_20px_60px_rgba(0,255,255,0.08)]",
    warn: "border-amber-300/30 bg-amber-500/10 shadow-[0_20px_60px_rgba(255,200,0,0.08)]",
    success:
      "border-emerald-300/30 bg-emerald-500/10 shadow-[0_20px_60px_rgba(52,211,153,0.12)]",
    danger:
      "border-rose-300/30 bg-rose-500/10 shadow-[0_20px_60px_rgba(244,63,94,0.15)]",
  };

  return (
    <div
      className={`neural-card rounded-3xl border p-5 backdrop-blur ${
        tones[tone] ?? tones.info
      }`}
    >
      <div className="text-sm font-extrabold uppercase tracking-[0.14em] text-white/90">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-white/80">
        {children}
      </div>
    </div>
  );
}
