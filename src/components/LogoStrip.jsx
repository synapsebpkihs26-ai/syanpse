import synapseLogo from "../assets/synapse-2026-logo.jpeg";
import bpkihsLogo from "../assets/bpkihs-logo.jpeg";
import swsLogo from "../assets/student-welfare-society.jpeg";

export default function LogoStrip({ compact = false }) {
  const size = compact ? "h-9" : "h-11";
  return (
    <div className="flex items-center gap-3">
      <img src={synapseLogo} alt="Synapse 2026" className={`${size} w-auto rounded-xl ring-1 ring-white/10`} />
      <img src={bpkihsLogo} alt="BPKIHS" className={`${size} w-auto rounded-xl ring-1 ring-white/10`} />
      <img src={swsLogo} alt="Student Welfare Society" className={`${size} w-auto rounded-xl ring-1 ring-white/10`} />
    </div>
  );
}
