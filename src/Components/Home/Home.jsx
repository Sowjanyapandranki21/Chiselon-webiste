import React from "react";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import TrustSection from "./TrustSection";
import ImpactSection from "./ImpactSection";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";
import "./home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TrustSection />
      <ImpactSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
