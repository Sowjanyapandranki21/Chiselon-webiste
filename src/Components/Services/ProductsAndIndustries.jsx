import React from "react";
import "./ProductsAndIndustries.css";

const ProductsAndIndustries = () => {


  const industries = [
    { icon: "💻", title: "Technology", description: "IT teams & enterprise software." },
    { icon: "🏥", title: "Healthcare", description: "AI-driven platforms & staffing." },
    { icon: "📚", title: "Education", description: "eLearning & exam prep systems." },
    { icon: "💰", title: "Finance", description: "Secure, compliance-focused digital platforms." }
  ];

  return (
    <section className="tech-services">
      <div className="container">
        <h6 className="section-title">Industries We Serve</h6>
        <ul className="expertise">
          {industries.map((service, index) => (
            <li key={index} className="mission-card">
              <span className="card-icon">{service.icon}</span>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-description">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsAndIndustries;
