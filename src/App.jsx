import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import SportsCategory from "./pages/SportsCategory.jsx";
import Registration from "./pages/Registration.jsx";
import Payment from "./pages/Payment.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import InfoPack from "./pages/InfoPack.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/sports/:slug" element={<SportsCategory />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info-pack" element={<InfoPack />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
