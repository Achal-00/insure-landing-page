import React from "react";
import Navbar from "./Navbar/Navbar";
import LandingSection from "./LandingSection/LandingSection";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="text-custom-font relative">
      <Navbar />
      <LandingSection />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}
