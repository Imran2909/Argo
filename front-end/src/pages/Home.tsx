import React from "react";
import Hero from "../components/hero/Hero";
import TripSection from "../components/trip/TripSection";
import Header from "../components/layout/Header";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TripSection />
      <Footer />
    </div>
  );
}

export default Home;
