import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import BrochureButton from "../components/BrochureButton.jsx";
import brochurePdf from "../assets/brouchre/brouchre.pdf";
import {
  aboutDharan,
  contactDetails,
  culturalHighlights,
  culturalJudgingNote,
  culturalSchedule,
  esportsRules,
  feeCategories,
  feeNotes,
  googleFormUrl,
  keyDates,
  literatureEventsDetailed,
  literatureHighlights,
  logisticsInfo,
  paymentInfo,
  registrationInfo,
  sportsRules,
  synapseOverview,
} from "../data/content.js";

const formatValue = (value, fallback = "To be announced") => value || fallback;

export default function InfoPack() {
  const [showMoreDharan, setShowMoreDharan] = useState(false);

  const confirmationNumbers = useMemo(() => {
    if (!registrationInfo.confirmationNumbers.length) {
      return ["To be announced"];
    }
    return registrationInfo.confirmationNumbers;
  }, []);

  return (
    <section className="py-12">
      <Container className="space-y-12">
        <div className="glass relative overflow-hidden rounded-3xl p-8">
          <div
            className="absolute inset-0 bg-gradient-to-br from-ember-500/15 via-magenta/10 to-plasma/10"
            aria-hidden
          />
          <div className="relative space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">
              Synapse 2026 Information Pack
            </p>
            <h1 className="text-4xl font-black">{synapseOverview.title}</h1>
            <p className="text-sm text-white/70">
              {synapseOverview.tagline}
            </p>
            <div className="grid gap-4 text-sm text-white/80 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Host</p>
                <p className="mt-2 font-semibold">{synapseOverview.host}</p>
                <p className="text-white/60">{synapseOverview.location}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Dates</p>
                <p className="mt-2 font-semibold">{synapseOverview.dates}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Overview</p>
                <p className="mt-2 text-white/70">{synapseOverview.summary}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Brochure</p>
            <h2 className="text-2xl font-black">Download or preview the Synapse brochure</h2>
          </div>
          <div className="glass relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div
              className="absolute inset-0 bg-gradient-to-br from-plasma/12 via-magenta/10 to-ember-500/12"
              aria-hidden
            />
            <div className="relative space-y-4">
              <p className="text-sm text-white/70">
                Browse the official Synapse 2026 brochure or save it for offline sharing.
              </p>
              <BrochureButton />
              <div className="overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10">
                <iframe
                  title="Synapse 2026 Brochure"
                  src={brochurePdf}
                  className="h-[520px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Key dates</p>
            <h2 className="text-2xl font-black">Important milestones</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Opening ceremony", value: keyDates.openingCeremony },
              { label: "Closing ceremony", value: keyDates.closingCeremony },
              {
                label: "Registration deadline",
                value: formatValue(keyDates.registrationDeadline, "Coming soon"),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/5 p-4 text-sm text-white/80 ring-1 ring-white/10"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Registration</p>
            <h2 className="text-2xl font-black">Who can participate and how to join</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Eligibility</p>
              <p className="mt-2 text-white/70">{registrationInfo.eligibility}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold text-white">How to register</p>
                <ul className="space-y-2 text-[13px] text-white/70">
                  {registrationInfo.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Registration form</p>
              <p className="mt-2 text-white/70">
                {googleFormUrl
                  ? "Use the official Google Form to register your participants."
                  : "The official registration form will be shared soon."}
              </p>
              <button
                type="button"
                disabled={!"https://www.synapse2026.bpkihs.edu/registration"}
                onClick={() => "https://www.synapse2026.bpkihs.edu/registration" && window.open("https://www.synapse2026.bpkihs.edu/registration", "_blank")}
                className={`mt-4 w-full rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                  "https://www.synapse2026.bpkihs.edu/registration"
                    ? "bg-gradient-to-r from-ember-500 via-amber-400 to-magenta text-black shadow-ember ring-2 ring-amber-200/70 hover:scale-[1.01]"
                    : "cursor-not-allowed bg-white/10 text-white/50 ring-1 ring-white/10"
                }`}
              >
                { "https://www.synapse2026.bpkihs.edu/registration" ? "Open Google Form" : "Coming soon"}
              </button>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">Confirmation numbers</p>
                <ul className="mt-2 space-y-1 text-[13px] text-white/70">
                  {confirmationNumbers.map((number) => (
                    <li key={number} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                      <span>{number}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Fee categories</p>
            <h2 className="text-2xl font-black">Registration fees by category</h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="bg-white/10 text-xs uppercase tracking-[0.18em] text-amber-100">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Events included</th>
                  <th className="px-4 py-3">Base individual fee</th>
                  <th className="px-4 py-3">Additional event (same category)</th>
                  <th className="px-4 py-3">Additional event (different category)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {feeCategories.map((fee) => (
                  <tr key={fee.category} className="bg-black/40">
                    <td className="px-4 py-4 text-base font-semibold text-white">{fee.category}</td>
                    <td className="px-4 py-4 text-sm text-white/70">
                      {fee.events.join(", ")}
                    </td>
                    <td className="px-4 py-4">{fee.baseFee}</td>
                    <td className="px-4 py-4">{fee.sameCategoryFee}</td>
                    <td className="px-4 py-4">{fee.differentCategoryFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
            {feeNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Payment</p>
            <h2 className="text-2xl font-black">Payment options & security deposit</h2>
            <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Payment methods</p>
              <ul className="mt-3 space-y-2 text-[13px] text-white/70">
                {paymentInfo.methods.map((method) => (
                  <li key={method} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-1 text-[13px] text-white/70">
                <p>Account name: {formatValue(paymentInfo.accountName, "To be announced")}</p>
                <p>Account number: {formatValue(paymentInfo.accountNumber, "To be announced")}</p>
              </div>
              <p className="mt-4 text-white/70">{paymentInfo.securityDeposit}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Logistics</p>
            <h2 className="text-2xl font-black">Accommodation, transport & food</h2>
            <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80 ring-1 ring-white/10">
              {[
                { title: "Accommodation", items: logisticsInfo.accommodation },
                { title: "Transportation", items: logisticsInfo.transportation },
                { title: "Food arrangements", items: logisticsInfo.food },
              ].map((section) => (
                <div key={section.title} className="mb-4 last:mb-0">
                  <p className="text-sm font-semibold text-white">{section.title}</p>
                  <ul className="mt-2 space-y-2 text-[13px] text-white/70">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Events</p>
            <h2 className="text-2xl font-black">Sports, e-sports, literature, and culture</h2>
            <p className="text-sm text-white/70">
              Browse the event rules and schedules in expandable sections below.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Sports</h3>
              {sportsRules.map((sport) => (
                <details
                  key={sport.name}
                  className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">
                    {sport.name} <span className="text-white/50">({sport.category})</span>
                  </summary>
                  <div className="mt-4 space-y-4">
                    {sport.sections.map((section) => (
                      <div key={`${sport.name}-${section.title}`}>
                        <p className="text-sm font-semibold text-amber-100">{section.title}</p>
                        <ul className="mt-2 space-y-2 text-[13px] text-white/70">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span
                                className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">E-sports</h3>
              {esportsRules.map((sport) => (
                <details
                  key={sport.name}
                  className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">
                    {sport.name}
                  </summary>
                  <div className="mt-4 space-y-4">
                    {sport.sections.map((section) => (
                      <div key={`${sport.name}-${section.title}`}>
                        <p className="text-sm font-semibold text-amber-100">{section.title}</p>
                        <ul className="mt-2 space-y-2 text-[13px] text-white/70">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span
                                className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300"
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Literature</h3>
              <div className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10">
                <ul className="space-y-3 text-[13px] text-white/70">
                  {literatureHighlights.map((item) => (
                    <li key={item.title}>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {literatureEventsDetailed.map((event) => (
                <details
                  key={event.title}
                  className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">
                    {event.title}
                  </summary>
                  <ul className="mt-3 space-y-2 text-[13px] text-white/70">
                    {event.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cultural events (day-wise)</h3>
              <div className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10">
                <ul className="space-y-3 text-[13px] text-white/70">
                  {culturalHighlights.map((item) => (
                    <li key={item.title}>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {culturalSchedule.map((event) => (
                <details
                  key={event.title}
                  className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-white">
                    {event.day}: {event.title}
                  </summary>
                  <ul className="mt-3 space-y-2 text-[13px] text-white/70">
                    {event.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <p className="text-xs text-white/60">{culturalJudgingNote}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Contact details</p>
            <h2 className="text-2xl font-black">Organizing committee</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {contactDetails.map((person) => (
              <div
                key={person.name}
                className="rounded-3xl bg-white/5 p-5 text-sm text-white/80 ring-1 ring-white/10"
              >
                <p className="text-base font-semibold text-white">{person.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100">
                  {person.role}
                </p>
                <p className="mt-2 text-sm text-white/70">{person.phone}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">About Dharan</p>
            <h2 className="text-2xl font-black">Discover the host city</h2>
          </div>
          <div className="rounded-3xl bg-white/5 p-6 text-sm text-white/80 ring-1 ring-white/10">
            <p className="text-white/70">{aboutDharan.summary}</p>
            {showMoreDharan && (
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {aboutDharan.sections.map((section) => (
                  <div key={section.title}>
                    <p className="text-sm font-semibold text-white">{section.title}</p>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              type="button"
              onClick={() => setShowMoreDharan((prev) => !prev)}
              className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200"
            >
              {showMoreDharan ? "Show less" : "Read more"}
            </button>
          </div>
        </section>
      </Container>
    </section>
  );
}
