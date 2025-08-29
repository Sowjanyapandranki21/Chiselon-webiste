import React, { useState } from "react";

export const industriesData = [
  {
    title: "Information Technology & Digital Services",
    challenge: "The IT industry is fast-paced, with continuous demand for niche skills, scalable products, and innovation.",
    solution: [
      "Talent acquisition for full-stack developers, cloud engineers, QA automation specialists, and niche tech roles.",
      "Development of enterprise-grade software using modern stacks like Java, .NET, Python, Node.js, React, Angular, Flutter.",
      "DevOps and cloud solutions on AWS, Azure, and GCP.",
      "Cybersecurity and data-driven analytics for future-ready businesses."
    ],
    impact: "We help IT companies scale faster, reduce project delivery timelines, and build secure, high-performing platforms."
  },
  {
    title: "Healthcare & Life Sciences",
    challenge: "The healthcare sector faces challenges of patient management, skilled workforce availability, and adoption of AI-driven diagnostics.",
    solution: [
      "AestheTech – AI-powered clinic management system with imaging support and AI-assist for junior doctors.",
      "Quantum Quest (SureCare) – On-demand staffing platform for nurses and healthcare professionals.",
      "Recruitment of specialized talent in healthcare IT, hospital management, and medical R&D."
    ],
    impact: "Our solutions improve patient outcomes, reduce operational bottlenecks, and ensure availability of skilled professionals."
  },

  {
    title: "Finance & Consulting",
    challenge: "The financial sector requires precision, compliance, and secure IT solutions, while consulting firms need niche talent quickly.",
    solution: [
      "RPO services for BFSI and consulting firms to close niche roles faster.",
      "Development of secure, compliant digital platforms with AI/ML-driven analytics.",
      "Workforce management through HRMS with integrated payroll and compliance."
    ],
    impact: "Improved compliance, reduced costs, faster hiring, and secure technology systems."
  },
  

  {
    title: "Energy & Utilities",
    challenge: "Energy and utility companies must adopt renewable sources, modernize infrastructure, ensure regulatory compliance, sustainability with affordability.",
    solution: [
      "Smart grid and renewable energy management systems.",
      "AI-powered energy demand forecasting and consumption analytics.",
      "Recruitment for renewable energy engineers, environmental specialists, and compliance officers.",
      "IoT-enabled monitoring systems for water, power, and natural resources."
    ],
    impact: "We drive sustainability, efficiency, and compliance for energy and utility providers worldwide."
  },

];

const IndustriesContainer = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="products-section">
      {industriesData.map((industry, index) => (
        <div key={industry.title} className="product-card">
          <div className="card-content">
            <h2>{industry.title}</h2>
            <p className="challenge-text">{industry.challenge}</p>
          </div>

          <div className="btn-wrapper">
            <button className="view-btn" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "View Less" : "View More"}
            </button>
          </div>

          <div className={`product-details ${expandedIndex === index ? "active" : ""}`}>
            {expandedIndex === index && (
              <>
                <ul>
                  {industry.solution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p><strong>Impact:</strong> {industry.impact}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndustriesContainer;
