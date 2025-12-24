import { useState } from "react";
import Container from "../components/Container.jsx";
import { socialLinks } from "../data/content.js";

const formEndpoint = "https://formspree.io/f/mldryzyy";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Unable to send message right now.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Contact</p>
            <h1 className="text-4xl font-black">Talk to Synapse</h1>
            <p className="text-sm text-white/70">
              Reach the Synapse team for partnerships, questions, or support.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="glass relative overflow-hidden rounded-3xl p-6">
            <div
              className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12"
              aria-hidden
            />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Send a message</p>

              {["name", "email"].map((field) => (
                <label key={field} className="block text-sm font-semibold text-white/80">
                  {field === "name" ? "Name" : "Email"}
                  <input
                    required
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white shadow-inner focus:border-amber-300 focus:outline-none"
                  />
                </label>
              ))}

              <label className="block text-sm font-semibold text-white/80">
                Message
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white shadow-inner focus:border-amber-300 focus:outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition ${
                    status === "loading"
                      ? "bg-white/10 text-white/60 ring-1 ring-white/10"
                      : "bg-gradient-to-r from-ember-500 via-amber-400 to-magenta text-black shadow-ember ring-2 ring-amber-200/70 hover:scale-[1.01]"
                  }`}
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
                >
                  Reset
                </button>
              </div>

              {status === "success" && (
                <p className="text-xs font-semibold text-amber-200">Message sent! We'll be in touch.</p>
              )}
              {error && <p className="text-xs font-semibold text-red-200">{error}</p>}
            </div>
          </form>

          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div
              className="absolute inset-0 bg-gradient-to-bl from-plasma/12 via-magenta/10 to-ember-500/12"
              aria-hidden
            />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-100">Official contact</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>📍 BPKIHS, Dharan, Nepal</p>
                <p>📧 synapse@bpkihs.edu</p>
                <p>📞 +977-9812345678</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="rounded-full bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
