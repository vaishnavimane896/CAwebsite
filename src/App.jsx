import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Consaltation from "../src/pages/Consaltation";
import Profile from "@/pages/Profile";
import ScrollToTop from "@/components/layout/ScrollToTop"; // Import here

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <--- Place it right here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consaltation" element={<Consaltation />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}