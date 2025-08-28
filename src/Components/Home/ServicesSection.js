import React from "react";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    title: "🔹 Technology Services",
    items: [
      "Software Development (Java, .NET, React, Flutter, etc.)",
      "Cloud & DevOps (AWS, Azure, GCP, Kubernetes, Docker)",
      "AI/ML, Data Science & Analytics",
      "Cybersecurity & Embedded Systems",
    ],
  },
  {
    title: "🔹 Talent Acquisition & Staffing",
    items: [
      "Recruitment Process Outsourcing (RPO)",
      "Contract & Permanent Staffing",
      "Executive Search & Leadership Hiring",
    ],
  },
  {
    title: "🔹 Proprietary Products",
    items: [
      "NITO – AI-powered test prep",
      "AestheTech – AI-driven clinic solution",
      "HRMS with Integrated Timesheet",
    ],
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services");
  };

  return (
    <section className="services-wrapper">
      <h2 className="services-heading">What We Do</h2>

      <div className="services-container">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="service-block"
            onClick={goToServices}
            role="button"
            tabIndex={0}
          >
            <h3 className="service-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i} className="service-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
