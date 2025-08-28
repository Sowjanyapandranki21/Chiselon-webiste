import React from "react";
import "./WhoWeAre.css";
import teamImg from "../../Assests/Dashboard1.png"; // 👉 replace with your own image

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
            We are a premier{" "}
            <strong>
              Recruitment Consulting, RPO, Staffing, and Product Development
            </strong>{" "}
            company, helping startups, SMEs, and enterprises scale smarter and
            innovate faster.
          </p>
          <p>
            Our dual focus — <span className="highlight">people</span> and{" "}
            <span className="highlight">technology</span> — allows us to create
            holistic solutions that address the evolving challenges of modern
            businesses.
          </p>
          <p>
            At Chiselon, every project, whether it’s a{" "}
            <strong>C-suite leadership hire</strong> or a{" "}
            <strong>full-scale technology platform</strong>, is guided by our
            commitment to <em>excellence, innovation, and integrity</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
