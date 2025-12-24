import Container from "../components/Container.jsx";

export default function Payment() {
  return (
    <section className="py-12">
      <Container className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Payment flow</p>
        <h1 className="text-4xl font-black">Payments</h1>
        <div className="glass rounded-3xl p-6 text-sm text-white/70">
          Payment instructions and transaction options will be available after registration
          confirmation. If you need assistance, contact the Synapse support team.
        </div>
      </Container>
    </section>
  );
}
