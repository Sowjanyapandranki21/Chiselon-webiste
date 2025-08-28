import React from "react";
import "./TrustSection.css";

const trustPoints = [
  "640+ successful placements with 26-day average closure",
  "Dual focus: client solutions + innovative products",
  "Innovation at core: AI/ML, Cloud, DevOps",
  "Trusted by global brands like AppOrchid, Valor PayTech",
  "Excellence: quality, timeliness & security",
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="section-title">Why Clients Trust Us</h2>
        <ul className="trust-list">
          {trustPoints.map((point, index) => (
            <li key={index} className="trust-item">
              <span className="trust-icon">✔</span>
              <span className="trust-text">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustSection;
