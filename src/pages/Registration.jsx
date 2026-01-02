import { useState } from "react";
import Container from "../components/Container.jsx";
import {
  googleFormUrl,
  idCardSections,
  keyDates,
  registrationRules,
} from "../data/content.js";

export default function Registration() {
  const [agree, setAgree] = useState(false);

  return (
    <section className="py-12">
      <Container className="space-y-10">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">
              Synapse 2026 · BPKIHS Dharan
            </p>
            <h1 className="text-4xl font-black leading-tight">
              Registration with Rules-first safety
            </h1>
            <p className="text-sm text-white/70">
              Review the Rules & Regulations, acknowledge them, and then proceed
              to the official registration form when it opens.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-100">
              Registration deadline:{" "}
              {keyDates.registrationDeadline || "Coming soon"}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          {/* Rules & Regulations */}
          <div className="glass relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div
              className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12"
              aria-hidden
            />
            <div className="relative flex flex-col gap-6 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-100">
                    Rules & Regulations
                  </p>
                  <h2 className="text-xl font-extrabold">
                    RULES & REGULATIONS – Synapse 2026, BPKIHS Dharan
                  </h2>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                  Mandatory Review
                </span>
              </div>

              <div className="relative max-h-[620px] space-y-4 overflow-y-auto pr-2 text-sm text-white/80">
                {registrationRules.map((section, idx) => (
                  <div
                    key={section.title}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-100 ring-1 ring-amber-200/50">
                        {idx + 1}
                      </span>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-white">
                          {section.title}
                        </p>
                        <ul className="space-y-1 text-[13px] text-white/75">
                          {section.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span
                                className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300"
                                aria-hidden
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ID Card & Registration */}
          <div className="glass relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div
              className="absolute inset-0 bg-gradient-to-br from-plasma/12 via-magenta/10 to-ember-500/12"
              aria-hidden
            />
            <div className="relative flex h-full flex-col gap-6 p-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">
                  ID Card & Registration
                </p>
                <h2 className="text-xl font-extrabold">ID CARD</h2>
                <p className="text-sm text-white/70">
                  Walk through why the BR ID Card matters, how to secure it, and
                  what conduct keeps access active during Synapse.
                </p>
              </div>

              <div className="space-y-4 text-sm text-white/80">
                {idCardSections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                  >
                    <p className="text-sm font-semibold text-white">
                      {section.title}
                    </p>
                    <ul className="mt-2 space-y-1 text-[13px] text-white/75">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-300"
                            aria-hidden
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto space-y-4 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-amber-100">
                  Bottom CTA
                </p>

                {/* Agree checkbox moved here */}
                <label className="flex items-center gap-3 text-sm font-semibold text-amber-100">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="h-5 w-5 rounded border-white/30 bg-black/50 text-amber-400 focus:ring-amber-300"
                  />
                  I agree to the Rules & Regulations
                </label>

                <button
                  disabled={!agree || !googleFormUrl}
                  onClick={() =>
                    googleFormUrl && window.open(googleFormUrl, "_blank")
                  }
                  className={`w-full rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] shadow-ember transition ${
                    agree && googleFormUrl
                      ? "bg-gradient-to-r from-ember-500 via-amber-400 to-magenta text-black ring-2 ring-amber-200/70 hover:scale-[1.01]"
                      : "cursor-not-allowed bg-white/10 text-white/50 ring-1 ring-white/10"
                  }`}
                >
                  {googleFormUrl
                    ? "Register via Google Form"
                    : "Registration coming soon"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
