import Container from "../components/Container.jsx";

export default function Confirmation() {
  return (
    <section className="py-12">
      <Container className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Confirmation</p>
        <h1 className="text-4xl font-black">You're in</h1>
        <div className="glass rounded-3xl p-6 text-sm text-white/70">
          This card keeps the glassmorphism aesthetic. Adjust contents when the live backend is wired.
        </div>
      </Container>
    </section>
  );
}
