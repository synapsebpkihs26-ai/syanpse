import { useState } from "react";
import Container from "../components/Container.jsx";
import InfoPopout from "../components/InfoPopout.jsx";
import { aboutSections } from "../data/content.js";

export default function About() {
  const [activeNote, setActiveNote] = useState(null);

  const openNote = (payload) => setActiveNote(payload);
  const closeNote = () => setActiveNote(null);

  const buildPayload = (section) => ({
    title: section.title,
    body:
      section.longDescription ||
      section.note ||
      `${section.body} This pillar keeps Synapse authentic and purposeful.`,
    image: section.logo,
    imageAlt: `${section.title} logo`,
  });

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">
              About Synapse
            </p>
            <h1 className="text-4xl font-black">BPKIHS • SWS • Synapse</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Three pillars, one festival. Explore the institutions shaping Synapse 2026.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {aboutSections.map((section) => (
            <button
              key={section.title}
              type="button"
              onClick={() => openNote(buildPayload(section))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openNote(buildPayload(section));
                }
              }}
              className="group card-ring relative overflow-hidden rounded-3xl bg-white/5 p-6 text-left ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-ember hover:ring-ember-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
                    <img
                      src={section.logo}
                      alt={`${section.title} logo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-base font-semibold uppercase tracking-[0.16em] text-amber-100">
                    {section.title}
                  </p>
                </div>
                <p className="text-sm text-white/80">{section.body}</p>
                <p className="text-xs font-medium text-amber-200/80">
                  Discover the story
                </p>
              </div>
            </button>
          ))}
        </div>

        <InfoPopout
          open={!!activeNote}
          title={activeNote?.title}
          body={activeNote?.body}
          image={activeNote?.image}
          imageAlt={activeNote?.imageAlt}
          onClose={closeNote}
        />
      </Container>
    </section>
  );
}


