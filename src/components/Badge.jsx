export default function Badge({ children, tone = "pink" }) {
  const toneClasses =
    tone === "cyan"
      ? "bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-300/40"
      : tone === "violet"
      ? "bg-violet-500/15 text-violet-100 ring-1 ring-violet-300/40"
      : "bg-pink-500/15 text-pink-100 ring-1 ring-pink-300/40";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-sm ${toneClasses}`}
    >
      {children}
    </span>
  );
}
