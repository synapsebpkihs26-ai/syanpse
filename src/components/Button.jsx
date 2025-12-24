export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
  className = "",
}) {
  const base =
    "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 text-slate-950 shadow-glow hover:brightness-110",
    secondary:
      "bg-slate-900/70 text-white hover:bg-slate-800 ring-1 ring-white/15",
    ghost: "bg-transparent text-white hover:bg-white/5 ring-1 ring-white/10",
    danger: "bg-gradient-to-r from-rose-500 to-orange-400 text-white shadow-glow",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-20" />
      <span className="relative">{children}</span>
    </button>
  );
}
