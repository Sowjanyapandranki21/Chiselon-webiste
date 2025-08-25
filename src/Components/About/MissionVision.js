import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="missionvision-section">
      <div className="mission-container">
        <div className="mission-card fade-in-up">
          <h3 className="section-title">Our Mission</h3>
          <p>
            To empower organizations by delivering world-class talent acquisition solutions 
            and next-generation technology services, enabling them to grow sustainably, 
            stay competitive, and transform industries.
          </p>
        </div>
        <div className="mission-card fade-in-up">
          <h3 className="section-title">Our Vision</h3>
          <p>
            To be recognized globally as a leading partner in talent and technology, 
            known for our innovation, integrity, and impact on businesses and communities worldwide.
          </p>
        </div>
      </div>
     
    </section>

  );
};

export default MissionVision;
