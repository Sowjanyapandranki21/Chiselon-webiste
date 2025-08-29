import React from "react";
import "./WhoWeAre.css";
import teamImg from "../../Assests/home1.jpg"; // 👉 replace with your own image

const WhoWeAre = () => {
  return (
    <section className="whowe-section">
      <div className="whowe-container">
        {/* Left Image */}
        <div className="whowe-image fade-in-left">
          <img src={teamImg} alt="Who We Are" />
        </div>

        {/* Right Content */}
        <div className="whowe-text fade-in-right">
          <h3 className="section-title">Who We Are</h3>
          <p>
            We are a premier product development, recruitment consulting, RPO, 
            and staffing company, helping startups, SMEs, and enterprises scale 
            smarter and innovate faster.
          </p>
          <p>
            Our dual focus — people and technology — allows us to create 
            holistic solutions that address the evolving challenges of modern 
            businesses.
          </p>
          <p>
            At Chiselon, every project, whether it’s a C-suite leadership hire 
            or a full-scale technology platform, is guided by our commitment to 
            <em> excellence, innovation, and integrity</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
