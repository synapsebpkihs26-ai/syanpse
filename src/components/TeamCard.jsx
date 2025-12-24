import Button from "./Button.jsx";

function getInitials(name = "") {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function TeamCard({ member, onClick }) {
  const initials = getInitials(member?.name);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/25 to-cyan-500/20 text-sm font-bold text-white ring-1 ring-white/10">
          {initials || "•"}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-white">
            {member?.name}
          </h3>
          <p className="mt-1 text-sm text-white/70">{member?.role}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-white/60">
          Tap for details
        </span>
        <Button
          variant="ghost"
          onClick={onClick}
          className="px-4 py-2 text-xs"
          aria-label={`View details for ${member?.name ?? "team member"}`}
        >
          View
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-500/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
      </div>
    </div>
  );
}
