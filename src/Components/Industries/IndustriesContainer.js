import React, { useState } from "react";

export const industriesData = [
  {
    title: "Digital Innovation & IT Solutions",
    challenge: "The IT industry is fast-paced, dynamic, and highly competitive, with continuous demand for niche skills, scalable and robust products, innovative solutions, and rapid adoption of emerging technologies.",
    solution: [
      "Talent acquisition for full-stack developers, cloud engineers, QA automation specialists, and niche tech roles.",
      "Development of enterprise-grade software using modern stacks like Java, .NET, Python, Node.js, React, Angular, Flutter.",
      "DevOps and cloud solutions on AWS, Azure, and GCP.",
      "Cybersecurity and data-driven analytics for future-ready businesses."
    ],
    impact: "We help IT companies scale faster, reduce project delivery timelines, and build secure, high-performing platforms."
  },
  {
    title: "Healthcare Technology & Life Sciences",
    challenge: "The healthcare sector faces challenges in patient management, availability of skilled professionals, adoption of AI-driven diagnostics, operational efficiency, and ensuring high-quality patient care.",
    solution: [
      "AestheTech – AI-powered clinic management system with imaging support and AI-assist for junior doctors.",
      "Quantum Quest (SureCare) – On-demand staffing platform for nurses and healthcare professionals.",
      "Recruitment of specialized talent in healthcare IT, hospital management, and medical R&D."
    ],
    impact: "Our solutions improve patient outcomes, reduce operational bottlenecks, and ensure availability of skilled professionals."
  },
  {
    title: "Financial Services & Consulting Excellence",
    challenge: "The financial sector requires precision, compliance, and secure IT solutions, while consulting firms need specialized talent to efficiently handle complex client projects, deliver timely results, and drive business growth.",
    solution: [
      "RPO services for BFSI and consulting firms to close niche roles faster.",
      "Development of secure, compliant digital platforms with AI/ML-driven analytics.",
      "Workforce management through HRMS with integrated payroll and compliance."
    ],
    impact: "Improved compliance, reduced costs, faster hiring, and secure technology systems."
  },
  {
    title: "Energy, Utilities & Sustainable Solutions",
    challenge: "Energy and utility companies must adopt renewable energy sources, modernize infrastructure, ensure regulatory compliance, maintain sustainability, and implement smart technologies for efficient operations.",
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
            <h3>{industry.title}</h3>
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
