import { useState } from "react";
import Container from "../components/Container.jsx";
import InfoPopout from "../components/InfoPopout.jsx";
import { sportsCategories } from "../data/content.js";

const literatureEvents = [
  {
    title: "Quiz Competition",
    description:
      "A contest testing analytical and intellectual abilities, enhancing academic and cultural interaction.",
  },
  {
    title: "Painting Competition",
    description:
      "A platform for students to express creativity and artistic skills through visual media.",
  },
  {
    title: "Poem Recitation",
    description:
      "Allows students to showcase linguistic skills and expression through poetry performance.",
  },
  {
    title: "Story Writing Competition",
    description: "Encourages creative expression and narrative writing skills.",
  },
  {
    title: "Debate Competition",
    description:
      "Develops public speaking, critical thinking, and structured argumentation skills.",
  },
  {
    title: "Open Mic",
    description:
      "An open platform for poetry, storytelling, music, and spoken-word performances.",
  },
];

const culturalEvents = [
  {
    title: "Inauguration Ceremony & Ramp Walk",
    description: "The official opening event of SYNAPSE, featuring a fashion runway.",
    image:
      "https://images.unsplash.com/photo-1496747611180-206a5c8c88cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "DJ Night & Mask Party",
    description:
      "The grand finale cultural event with DJ performances and a mask party theme.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Bhajan Night",
    description: "A spiritual evening with devotional music held at the BPKIHS Mandir.",
    image:
      "https://images.unsplash.com/photo-1429371527702-1bfdc0eeea7d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Unleashing Talents: Open Mic",
    description: "A relaxed performance platform with a special tribute segment.",
    image:
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Inter-College Dancing & Singing Competition",
    description: "Competitive performances showcasing musical and choreographic talents.",
    image:
      "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Events() {
  const [activeNote, setActiveNote] = useState(null);

  const openNote = (payload) => setActiveNote(payload);
  const closeNote = () => setActiveNote(null);

  const openEventNote = (event) =>
    openNote({
      title: event.title,
      body: event.description,
    });

  const openSportsNote = (section) =>
    openNote({
      title: section.title,
      body: section.description,
      actionHref: `/events/sports/${section.slug}`,
      actionLabel: "View category details",
    });

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Events</p>
            <h1 className="text-4xl font-black">Explore the Synapse lineup</h1>
            <p className="max-w-3xl text-sm text-white/70">
              Three distinct tracks bring SYNAPSE to life: thoughtful literature showdowns,
              expressive cultural showcases, and a multi-discipline sports carnival. Scroll
              through the highlights below to plan your festival day.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-14">
          <section className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
                  Literature Events
                </p>
                <h2 className="text-2xl font-black">Card-based showcase of every contest</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {literatureEvents.map((event) => (
                <div
                  key={event.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEventNote(event)}
                  onKeyDown={(evt) => {
                    if (evt.key === "Enter" || evt.key === " ") {
                      evt.preventDefault();
                      openEventNote(event);
                    }
                  }}
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass transition hover:-translate-y-1 hover:shadow-ember focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-ember-500/5 via-magenta/5 to-plasma/8 opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative space-y-2">
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <p className="text-sm text-white/70">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
                  Cultural Events
                </p>
                <h2 className="text-2xl font-black">Bold circles and expressive headlines</h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {culturalEvents.map((event) => (
                <div
                  key={event.title}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEventNote(event)}
                  onKeyDown={(evt) => {
                    if (evt.key === "Enter" || evt.key === " ") {
                      evt.preventDefault();
                      openEventNote(event);
                    }
                  }}
                  className="relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-ember focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-magenta/12 to-plasma/12"
                    aria-hidden
                  />
                  <div className="relative flex gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-200/60">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-black/20 via-transparent to-black/30"
                        aria-hidden
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      <p className="text-sm text-white/70">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
                  Sports Events
                </p>
                <h2 className="text-2xl font-black">Five subsections in vivid tiles</h2>
                <p className="text-sm text-white/70">
                  Outdoor grounds, indoor arenas, athletics, e-sports, and special recreational
                  slots all live here.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sportsCategories.map((section) => (
                <div
                  key={section.slug}
                  role="button"
                  tabIndex={0}
                  onClick={(evt) => {
                    evt.preventDefault();
                    openSportsNote(section);
                  }}
                  onKeyDown={(evt) => {
                    if (evt.key === "Enter" || evt.key === " ") {
                      evt.preventDefault();
                      openSportsNote(section);
                    }
                  }}
                  className="group relative block cursor-pointer overflow-hidden rounded-3xl border border-amber-200/30 bg-black/60 shadow-glow transition hover:-translate-y-1 hover:shadow-ember focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                >
                  <div className="absolute inset-0">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
                      aria-hidden
                    />
                  </div>

                  <div className="relative flex h-full flex-col gap-3 p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-black text-white">{section.title}</h3>
                      <span className="rounded-full bg-amber-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-100 ring-1 ring-amber-300/60">
                        View details
                      </span>
                    </div>

                    <p className="text-sm text-white/80">{section.description}</p>

                    <div className="flex flex-wrap gap-2 text-xs text-white/80">
                      {section.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 transition group-hover:bg-white/15"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>

      <InfoPopout
        open={!!activeNote}
        title={activeNote?.title}
        body={activeNote?.body}
        actionHref={activeNote?.actionHref}
        actionLabel={activeNote?.actionLabel}
        onClose={closeNote}
      />
    </section>
  );
}
