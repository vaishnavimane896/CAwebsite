
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Consaltation from "../src/pages/Consaltation";
import Profile from "@/pages/Profile"; // 'profile' (folder) and 'Profile' (file). Fixed this path to target the modularized folder
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consaltation" element={<Consaltation />} />
        {/* 2. Changed parameter to :slug so that useParams() inside your Profile component works perfectly */}
        <Route path="/Profile/:id" element={<Profile />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}