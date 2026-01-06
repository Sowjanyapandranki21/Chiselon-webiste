import React from "react";
import "./WhyChiselon.css";
const trustPoints = [
  "Proven expertise in both people and technology",
  "Tailored, scalable models for different business sizes",
  "640+ successful placements & multiple high-impact product launches",
  " Over 90% client retention due to consistency & transparency",
  "Partnerships with global leaders like IntraEdge, AppOrchid, Reveal Data, MSG Global",
];
const WhyChiselon = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <h2 className="section-title">Why Chiselon Services?</h2>
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

export default WhyChiselon;
