export default function FormField({ label, hint, error, children }) {
  return (
    <label className="block">
      <div className="flex items-end justify-between gap-3">
        <div className="text-sm font-semibold text-white/90">{label}</div>
        {hint ? <div className="text-xs text-white/50">{hint}</div> : null}
      </div>
      <div className="mt-2">{children}</div>
      {error ? <div className="mt-2 text-xs font-semibold text-rose-300">{error}</div> : null}
    </label>
  );
}
