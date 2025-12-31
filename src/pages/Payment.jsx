import Container from "../components/Container.jsx";
import { paymentInfo } from "../data/content.js";

export default function Payment() {
  return (
    <section className="py-12">
      <Container className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-100">Payment flow</p>
        <h1 className="text-4xl font-black">Payments</h1>
        <div className="glass rounded-3xl p-6 text-sm text-white/70">
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
            <p>Account name: {paymentInfo.accountName || "To be announced"}</p>
            <p>Account number: {paymentInfo.accountNumber || "To be announced"}</p>
          </div>
          <p className="mt-4 text-white/70">{paymentInfo.securityDeposit}</p>
        </div>
      </Container>
    </section>
  );
}
