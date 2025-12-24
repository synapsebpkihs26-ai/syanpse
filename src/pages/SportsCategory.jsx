import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container.jsx";
import InfoPopout from "../components/InfoPopout.jsx";
import { sportsCategories } from "../data/content.js";

export default function SportsCategory() {
  const { slug } = useParams();
  const [activeNote, setActiveNote] = useState(null);
  const category = sportsCategories.find((item) => item.slug === slug);

  const openNote = (payload) => setActiveNote(payload);
  const closeNote = () => setActiveNote(null);

  if (!category) {
    return (
      <section className="py-16 text-center">
        <Container>
          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Sports Events</p>
            <h1 className="text-4xl font-black">Category not found</h1>
            <p className="text-sm text-white/70">
              The sports category you are looking for does not exist. Please return to the events page and choose another option.
            </p>
            <div className="flex justify-center">
              <Link
                to="/events"
                className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-400"
              >
                Back to Events
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="pb-16 pt-10">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" aria-hidden />
        </div>
        <Container>
          <div className="relative grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
            <div className="space-y-4 py-10 lg:py-16">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Sports Events</p>
              <h1 className="text-4xl font-black text-white">{category.title}</h1>
              <p className="max-w-3xl text-sm text-white/80">{category.summary}</p>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-glass">
                <h2 className="text-lg font-semibold text-white">All sports in this category</h2>
                <p className="text-sm text-white/70">{category.description}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        openNote({
                          title: item,
                          body: `${item} fixtures will include schedules, venues, and bracket updates as Synapse announcements roll out.`,
                        })
                      }
                      onKeyDown={(event) =>
                        ["Enter", " "].includes(event.key) &&
                        openNote({
                          title: item,
                          body: `${item} fixtures will include schedules, venues, and bracket updates as Synapse announcements roll out.`,
                        })
                      }
                      className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 cursor-pointer transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/events"
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-glass ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  Back to Events
                </Link>
                <Link
                  to="/registration"
                  className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg transition hover:bg-amber-400"
                >
                  Register your team
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl border border-amber-200/40 bg-white/5 p-6 shadow-ember">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 via-magenta/10 to-plasma/10" aria-hidden />
              <div className="relative space-y-4">
                <h3 className="text-lg font-semibold text-white">Category quick facts</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                    <span>Dedicated fixtures for every listed sport with schedule and venue announcements coming soon.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                    <span>Singles and doubles formats will be honored wherever applicable to the sport.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                    <span>Participants must complete BR ID registration before tournament check-in.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <InfoPopout
        open={!!activeNote}
        title={activeNote?.title}
        body={activeNote?.body}
        onClose={closeNote}
      />
    </section>
  );
}
