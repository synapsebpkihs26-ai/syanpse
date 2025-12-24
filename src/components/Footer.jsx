import Container from "./Container.jsx";
import { socialLinks } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">Synapse 2026</p>
          <p className="text-lg font-black">BPKIHS • Student Welfare Society</p>
          <p className="text-sm text-white/60">Dharan, Nepal</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
