import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";

const servicesData = [
  {
    title: "Technology Services",
    items: [
      "Software Development (Java, .NET, React, Flutter, etc.)",
      "Cloud & DevOps (AWS, Azure, GCP, Kubernetes, Docker)",
      "AI/ML, Data Science & Analytics",
      "Cybersecurity & Embedded Systems",
      "UI/UX Design & Frontend Engineering",
      "Quality Assurance & Automation Testing",
    ],
  },
  {
    title: "Talent Acquisition & Staffing",
    items: [
      "Recruitment Process Outsourcing (RPO)",
      "Contract & Permanent Staffing",
      "Executive Search & Leadership Hiring",
      "Campus Recruitment & Graduate Hiring Programs",
      "HR Consulting & Workforce Planning",
    ],
  },
  {
    title: "Proprietary Products",
    items: [
      "NITO – AI-powered mock test prep platform",
      "AestheTech – AI-powered clinic management system",
      "CHRMS – HRMS with integrated time & leave management",
      "SureCare – Uber-style platform for nursing and geriatric care",
      "DermaCare – Public app to book dermatology consultations at discounted prices",
    ],
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services");
  };

  return (
    <section className="services-section">
      <h3 className="section-heading">What We Do</h3>
      
      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="service-card"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
          >
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-card-list">
              {service.items.map((item, i) => (
                <li key={i} className="service-card-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
