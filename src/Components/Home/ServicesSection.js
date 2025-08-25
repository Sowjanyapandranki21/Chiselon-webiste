import React from "react"; 
import { useNavigate } from "react-router-dom"; // import the hook

const ServicesSection = () => {
  const navigate = useNavigate(); // get the navigate function

  const handleClick = () => {
    navigate("/services"); // navigate to contact page
  };

  return (
    <section className="services">
      <h3 className="section-title">What We Do</h3>
      <div className="services-grid">
        <div className="service-card" onClick={handleClick} style={{ cursor: "pointer" }}>
          <h3>🔹 Technology Services</h3>
          <ul>
            <li>Software Development (Java, .NET, React, Flutter, etc.)</li>
            <li>Cloud & DevOps (AWS, Azure, GCP, Kubernetes, Docker)</li>
            <li>AI/ML, Data Science & Analytics</li>
            <li>Cybersecurity & Embedded Systems</li>
          </ul>
        </div>
        
        <div className="service-card" onClick={handleClick} style={{ cursor: "pointer" }}>
          <h3>🔹 Talent Acquisition & Staffing</h3>
          <ul>
            <li>Recruitment Process Outsourcing (RPO)</li>
            <li>Contract & Permanent Staffing</li>
            <li>Executive Search & Leadership Hiring</li>
          </ul>
        </div>

        <div className="service-card" onClick={handleClick} style={{ cursor: "pointer" }}>
          <h3>🔹 Proprietary Products</h3>
          <ul>
            <li>NITO – AI-powered test prep</li>
            <li>AestheTech – AI-driven clinic solution</li>
            <li>HRMS with Integrated Timesheet</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
