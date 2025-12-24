export default function EventCard({ event, category, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(event)}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-glass transition hover:-translate-y-1 hover:shadow-ember ${
        category?.highlight ? "ring-2 ring-amber-300/50" : ""
      }`}
    >
      <div className="h-44 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-amber-200/80">
          <span>{category?.title}</span>
          <span className="rounded-full bg-amber-500/15 px-2 py-1 text-[10px] font-bold text-amber-100 ring-1 ring-amber-200/40">
            Spotlight
          </span>
        </div>
        <p className="text-lg font-bold text-white">{event.name}</p>
        <p className="text-sm text-white/70">{event.description}</p>
        <div className="mt-auto space-y-1 text-xs text-white/60">
          <p>📅 {event.date}</p>
          <p>📍 {event.venue}</p>
        </div>
      </div>
    </button>
  );
}
