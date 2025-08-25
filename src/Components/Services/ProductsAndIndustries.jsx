import React from "react";
import "./ProductsAndIndustries.css";

const ProductsAndIndustries = () => {
  const products = [
    { icon: "📘", title: "NITO (Electus)", description: "Mock-test platform for IIT/JEE, GATE, TTC, competitive exams." },
    { icon: "🏥", title: "AestheTech", description: "AI-powered clinic management system with imaging & doctor collaboration." },
    { icon: "⚕️", title: "Quantum Quest (SureCare)", description: "Healthcare staffing platform — “Uber for Nurses”." },
    { icon: "📊", title: "HRMS Suite", description: "Timesheet & Leave Management system for HR operations." }
  ];

  const industries = [
    { icon: "💻", title: "Technology", description: "IT teams & enterprise software." },
    { icon: "🏥", title: "Healthcare", description: "AI-driven platforms & staffing." },
    { icon: "📚", title: "Education", description: "eLearning & exam prep systems." },
    { icon: "💰", title: "Finance", description: "Secure, compliance-focused digital platforms." }
  ];

  return (
    <section className="products-industries">
      <div className="container">
        <div className="side-by-side">
  {/* Left section */}
  <div className="section-block left-block">
    <h3 className="section-title">Proprietary Products</h3>
    <div className="card-container">
      {products.map((p, i) => (
        <div key={i} className="card">
          <span className="card-icon">{p.icon}</span>
          <div className="card-content">
            <strong>{p.title}:</strong> {p.description}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Right section */}
  <div className="section-block right-block">
    <h3 className="section-title">Industries We Serve</h3>
    <div className="card-container">
      {industries.map((ind, i) => (
        <div key={i} className="card">
          <span className="card-icon">{ind.icon}</span>
          <div className="card-content">
            <strong>{ind.title}:</strong> {ind.description}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ProductsAndIndustries;
