import React from "react";
import "./ImpactSection.css";
import { motion } from "framer-motion";

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
        <h2 className="section-title">Impact in Numbers</h2>

        <div className="impact-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="impact-card"
             animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 12, // speed of scroll
              repeat: Infinity,
            }}
            >
              <span className="impact-icon">{stat.icon}</span>
              <p className="impact-text">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
