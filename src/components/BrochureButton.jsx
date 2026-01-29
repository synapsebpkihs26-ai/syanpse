import brochurePdf from "../assets/brouchre/brouchre.pdf";

export default function BrochureButton({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={brochurePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-ember-500 via-amber-400 to-magenta px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-black shadow-ember ring-2 ring-amber-100/70 transition hover:scale-[1.02]"
      >
        View Synapse Brochure
      </a>
      <a
        href={brochurePdf}
        download
        className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white/80 hover:bg-white/5"
      >
        Download PDF
      </a>
    </div>
  );
}
