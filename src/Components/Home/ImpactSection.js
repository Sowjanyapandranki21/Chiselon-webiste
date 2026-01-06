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
  // Duplicate stats twice for seamless scroll
  const repeatedStats = [...stats, ...stats];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <h2 className="section-title">Impact in Numbers</h2>
        <div className="impact-stats-wrapper">
          <motion.div
            className="impact-stats"
            animate={{ x: ["0%", "-50%"] }} // move left by half
            transition={{
              repeat: Infinity,
              duration: 20,  // slower for smoothness
              ease: "linear",
            }}
          >
            {repeatedStats.map((stat, index) => (
              <div key={index} className="impact-card">
                <motion.span
                  className="impact-icon"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                >
                  {stat.icon}
                </motion.span>
                <p className="impact-text">{stat.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
