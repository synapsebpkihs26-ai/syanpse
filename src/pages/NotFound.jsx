import { useNavigate } from "react-router-dom";
import Container from "../components/Container.jsx";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <section className="py-20">
      <Container>
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-ember-500/12 via-magenta/10 to-plasma/12" aria-hidden />
          <div className="relative space-y-4">
            <div className="text-6xl font-black">404</div>
            <div className="text-lg font-bold">Page not found</div>
            <p className="text-sm text-white/70">The page you requested does not exist.</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => nav("/")}
                className="rounded-full bg-gradient-to-r from-ember-500 via-amber-400 to-magenta px-5 py-3 text-sm font-bold text-black shadow-ember ring-2 ring-amber-200/70"
              >
                Go Home
              </button>
              <button
                onClick={() => nav("/events")}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/5"
              >
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
