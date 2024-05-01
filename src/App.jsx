import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Tittle from "./Components/Title/Tittle";
import Hotel from "./Components/Hotel/Hotel";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subtitle="Our Services" title="What We Offer" />
        <Services />
        <Tittle subtitle="Gallery" title="Hotel Photos" />
        <Hotel />
        <Tittle subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
