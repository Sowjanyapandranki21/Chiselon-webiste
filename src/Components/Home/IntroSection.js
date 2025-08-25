import React from "react";
import "./IntroSection.css";
import teamImage from '../../Assests/team.png';

const IntroSection = () => {
  return (
    <section className="intro-section-stylish">
      {/* Decorative shapes */}
      <div className="shape-circle"></div>
      <div className="shape-diamond"></div>

      <div className="intro-container-stylish">
        {/* Left Image */}
        <div className="intro-image-left">
          <img src={teamImage} alt="Team working together" />
        </div>

        {/* Right Text */}
        <div className="intro-text-right">
          <h2>Who We Are</h2>
          <p>
            At Chiselon, we are more than a staffing company or a software provider — 
            we are a strategic growth partner. We help startups, SMEs, and global enterprises scale faster.
          </p>
          <p>
            Combining industry knowledge, recruitment expertise, and technology innovation, 
            we deliver results that truly matter.
          </p>
          <div className="intro-buttons">
            {/* <button className="btn-primary">Hire Talent</button>
            <button className="btn-secondary">Explore Solutions</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
