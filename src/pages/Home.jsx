import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider.jsx";
import SocialSpotlight from "../components/SocialSpotlight.jsx";
import Container from "../components/Container.jsx";
import InfoPopout from "../components/InfoPopout.jsx";
import { eventCategories } from "../data/content.js";

export default function Home() {
  const [activeNote, setActiveNote] = useState(null);

  const openNote = (payload) => setActiveNote(payload);
  const closeNote = () => setActiveNote(null);

  const openTrackNote = (item) =>
    openNote({
      title: `${item} track`,
      body: `${item} events come with curated judging and moments tailored to Synapse attendees. Tap "View all events" to see the entire lineup.`,
      actionHref: "/events",
      actionLabel: "Browse events",
    });

  const openCategoryNote = (cat) =>
    openNote({
      title: cat.title,
      body: `This category features highlights like ${cat.events
        .slice(0, 2)
        .map((ev) => ev.name)
        .join(" and ")} with more listed on the events page.`,
      actionHref: "/events",
      actionLabel: "Open events page",
    });

  return (
    <>
      <HeroSlider />

      <section className="py-10">
        <Container className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div
              className="absolute inset-0 bg-gradient-to-br from-ember-500/15 via-magenta/10 to-plasma/10"
              aria-hidden
            />
            <div className="relative flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
                Registration first
              </p>
              <h2 className="text-3xl font-black">The fastest path to the arena</h2>
              <p className="text-sm text-white/70">
                Sticky calls-to-action, guardrails, and server-safe flows. Register once, share
                everywhere, and bring your crew to BPKIHS.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/registration"
                  className="rounded-full bg-gradient-to-r from-ember-500 via-amber-400 to-magenta px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-black shadow-ember ring-2 ring-amber-100/70 transition hover:scale-[1.02]"
                >
                  Register now
                </Link>
                <Link
                  to="/events"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
                >
                  Explore events
                </Link>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Literature", "Culture", "Sports"].map((item) => (
                  <div
                    key={item}
                    role="button"
                    tabIndex={0}
                    onClick={() => openTrackNote(item)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openTrackNote(item);
                      }
                    }}
                    className="cursor-pointer rounded-2xl bg-white/5 p-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-amber-100 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div
              className="absolute inset-0 bg-gradient-to-bl from-plasma/15 via-magenta/12 to-ember-400/15"
              aria-hidden
            />
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Social rings</p>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="hero-dot" /> Live
                </div>
              </div>
              <p className="text-lg font-bold">Stay in the loop</p>
              <p className="text-sm text-white/70">
                Continuous social feed rotation with manual controls. Tap a platform to pause and
                jump to the latest post.
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/synapsebpkihs2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 px-5 py-3 text-xs font-semibold text-white/80 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                >
                  Synapse Instagram
                </a>
                <a
                  href="https://www.facebook.com/synapsebpkihs2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 px-5 py-3 text-xs font-semibold text-white/80 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                >
                  Synapse Facebook
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Event galaxies</p>
              <h2 className="text-3xl font-black">Categories with orange rings</h2>
            </div>
            <Link
              to="/events"
              className="rounded-full border border-amber-300/40 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-amber-500/10"
            >
              View all events
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventCategories.map((cat) => (
              <div
                key={cat.id}
                role="button"
                tabIndex={0}
                onClick={() => openCategoryNote(cat)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openCategoryNote(cat);
                  }
                }}
                className={`relative cursor-pointer overflow-hidden rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-ember focus:outline-none focus:ring-2 focus:ring-amber-300/60 ${
                  cat.highlight ? "ring-2 ring-amber-300/60" : ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12"
                  aria-hidden
                />

                <div className="relative space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
                    {cat.title}
                  </p>
                  <p className="text-xs text-white/70">Orange glow on sports to match the brief.</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-white/70">
                    {cat.events.slice(0, 3).map((ev) => (
                      <span
                        key={ev.name}
                        className="rounded-full bg-black/60 px-3 py-1 ring-1 ring-white/10"
                      >
                        {ev.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SocialSpotlight />
        </Container>
      </section>

      <InfoPopout
        open={!!activeNote}
        title={activeNote?.title}
        body={activeNote?.body}
        actionHref={activeNote?.actionHref}
        actionLabel={activeNote?.actionLabel}
        onClose={closeNote}
      />
    </>
  );
}
