import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import ImageBoxSlider from "./ImageBoxSlider.jsx";
import synapseLogo from "../assets/synapse-2026-logo.jpeg";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat opacity-25 md:opacity-10 mix-blend-screen"
        style={{ backgroundImage: `url(${synapseLogo})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-aurora mix-blend-screen" aria-hidden />
      <div className="aurora-grid" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"
        aria-hidden
      />

      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        <main className="pb-20">{children}</main>
        <Footer />
      </div>

      {/* GLOBAL IMAGE SLIDER (shows on every page) */}
      <div className="fixed bottom-6 right-6 z-50 w-[260px] h-[150px] sm:w-[320px] sm:h-[180px] md:w-[420px] md:h-[240px]">
        <ImageBoxSlider interval={2500} />
      </div>
    </div>
  );
}
