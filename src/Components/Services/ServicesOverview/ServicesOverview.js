import React from "react";
import "./ServicesOverview.css";
import servicesImage from "../../../Assests/Services.png"; // Replace with your actual image path

const ServicesOverview = () => {
  return (
    <section className="talent-staffing">
      <div className="talent-container">
        
        {/* Left Side - Text */}
        <div className="talent-content">
          <h6 className="section-title">🌐 Our Services</h6>
          <p>
            At Chiselon Technologies, our services are designed to meet the dual needs of
            businesses: finding the right people and building the right technologies.
          </p>
          <p>
            With expertise spanning Talent Acquisition, RPO, Staffing Solutions, and
            Technology Product Development, we bring together the best of both worlds.
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default ServicesOverview;
