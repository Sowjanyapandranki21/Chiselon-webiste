import React from "react";
import "./ImpactSection.css";

const stats = [
  { icon: "🚀", text: "640+ Candidates Placed" },
  { icon: "🌍", text: "15+ Global Clients" },
  { icon: "💡", text: "4+ Innovative Products" },
  { icon: "📈", text: "90%+ Client Retention" },
];

const ImpactSection = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="impact-title">Impact in Numbers</h2>
        <div className="impact-stats">
          {stats.map((stat, index) => (
            <div key={index} className="impact-card">
              <span className="impact-icon">{stat.icon}</span>
              <p className="impact-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
