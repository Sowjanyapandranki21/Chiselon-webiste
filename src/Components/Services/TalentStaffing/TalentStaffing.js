import React from "react";
import "./TalentStaffing.css";
import talentImg from "../../../Assests/talent1.png"; // 👉 replace with the chosen image

const TalentStaffing = () => {
  return (
    <section className="talent-staffing">
      <div className="talent-container">
        
        {/* Left Side Image */}
        {/* <div className="talent-image">
          <img src={talentImg} alt="Talent Acquisition & Staffing Solutions" />
        </div> */}

        {/* Right Side Content */}
        {/* <div className="talent-content">
          <h6 className="section-title">
             Talent Acquisition & Staffing Solutions
          </h6>
          <p>
            Building the right team is the foundation of business success. Our
            end-to-end recruitment and staffing solutions ensure you find the
            right talent, at the right time, for the right role.
          </p>

          <ul className="offerings">
            <li>
              <strong>Recruitment Process Outsourcing (RPO):</strong> End-to-end
              hiring management with reduced time-to-hire and cost savings.
            </li>
            <li>
              <strong>Contract & Permanent Staffing:</strong> Flexible models
              that help you scale your workforce efficiently.
            </li>
            <li>
              <strong>Executive Search & Leadership Hiring:</strong> Identify
              and onboard high-impact leaders for your organization’s future.
            </li>
          </ul>

          <div className="highlights">
            <p>✅ Access to a large pool of pre-vetted talent</p>
            <p>✅ Strong technical screening & domain expertise</p>
            <p>✅ Scalable solutions customized for startups, SMEs, and enterprises</p>
            <p>✅ Over 90% client retention rate</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TalentStaffing;
