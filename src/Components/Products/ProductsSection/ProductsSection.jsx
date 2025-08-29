import React, { useState } from "react";
import "./ProductsSection.css";
import NITO from "../../../Assests/NITO.jpg";
import AestheTech from "../../../Assests/AI.jpg";
import QuantumQuest from "../../../Assests/SureCare.jpg";
import HRMS from "../../../Assests/CHMS.jpg";

const products = [
  {
    description: "Advanced mock test platform for students preparing for competitive exams.",
    image: NITO,
    features: [
      "Adaptive test engine with customizable difficulty levels.",
      "Real-time analytics & performance reports for students.",
      "Secure, scalable cloud-based architecture.",
      "Multi-device compatibility",
    ],
    impact: "Helps students build confidence and track progress effectively.",
  },
  {
    description: "Comprehensive clinic management platform for dermatology and multi-specialty clinics.",
    image: AestheTech,
    features: [
      "Patient management (records, history, appointments).",
      "AI-assisted imaging & diagnosis support.",
      "Doctor support modules and task management.",
      "Digital prescriptions, billing, and inventory integration",
    ],
    impact: "Improves patient outcomes and operational efficiency.",
  },
  {
    description: "On-demand healthcare staffing platform connecting nurses with hospitals and patients.",
    image: QuantumQuest,
    features: [
      "Real-time nurse availability matching.",
      "Secure scheduling and shift management.",
      "Verified nursing professionals.",
      "Integrated payments and compliance tracking",
    ],
    impact: "Ensures timely patient care and flexible work opportunities.",
  },
  {
    description: "Smart HR platform to manage workforce seamlessly.",
    image: HRMS,
    features: [
      "Timesheet management with project-wise tracking.",
      "Leave management with approval workflows.",
      "Integrated payroll compatibility.",
      "Employee self-service portal",
    ],
    impact: "Increases productivity and reduces manual errors.",
  },
];

const ProductsSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="products-section">
      {products.map((p, index) => (
        <div key={index} className="product-card">
          <div className="card-image">
            <img src={p.image} alt={`Product ${index + 1}`} />
          </div>

          <div className="card-content">
            <p>{p.description}</p>
          </div>

          <div className="btn-wrapper">
            <button className="view-btn" onClick={() => toggleExpand(index)}>
              {expanded[index] ? "View Less" : "View More"}
            </button>
          </div>

          <div className={`product-details ${expanded[index] ? "active" : ""}`}>
            <ul>
              {p.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p><strong>Impact:</strong> {p.impact}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsSection;
