import { useState } from "react";
import Container from "../components/Container.jsx";
import TeamCard from "../components/TeamCard.jsx";
import InfoPopout from "../components/InfoPopout.jsx";
import { teamSections } from "../data/content.js";

export default function Team() {
  const [activeNote, setActiveNote] = useState(null);

  const openNote = (payload) => setActiveNote(payload);
  const closeNote = () => setActiveNote(null);

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Team</p>
            <h1 className="text-4xl font-black">Organizing Committee & Sub-committees</h1>
            <p className="text-sm text-white/70">
              Coordinators, office bearers, and committee members powering Synapse 2026.
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {teamSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">{section.title}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.members.map((member) => (
                  <TeamCard
                    key={member.name}
                    member={member}
                    onClick={() =>
                      openNote({
                        title: member.name,
                        body:
                          member.description ||
                          `${member.name} drives the ${member.role.toLowerCase()} lane for Synapse and keeps operations nimble.`,
                      })
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <InfoPopout
          open={!!activeNote}
          title={activeNote?.title}
          body={activeNote?.body}
          onClose={closeNote}
        />
      </Container>
    </section>
  );
}
