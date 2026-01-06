import React from "react";
import "./TechnologyServices.css";


const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    title: "Custom Software Development",
    description:
      "End-to-end software solutions with full-stack expertise in Java, .NET, Python, Node.js, React, and Flutter.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture with AWS, Azure, GCP, Kubernetes, Docker, and CI/CD automation.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    title: "Data & AI Solutions",
    description:
      "AI/ML models, Data Analytics, and Business Intelligence that enable smarter decision-making.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4845/4845769.png",
    title: "Cybersecurity & Networking",
    description:
      "Comprehensive security assessments, threat monitoring, and compliance-driven protection.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048947.png",
    title: "Embedded & IoT Systems",
    description:
      "Connected systems for healthcare, automotive, and industrial IoT integrations.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3197/3197960.png",
    title: "UI/UX Design & Prototyping",
    description:
      "Human-centered designs with a focus on usability, accessibility, and responsive design.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3079/3079048.png",
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated testing for web, mobile, and enterprise applications ensuring flawless performance.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    title: "Mobile App Development",
    description:
      "Building high-performance Android and iOS apps using Flutter, React Native, and native SDKs.",
  },
];


const TechnologyServices = () => {
  return (
    <section className="tech-services">
      <div className="container">
        <h6 className="section-title">Technology Services & Product Development</h6>
        <p >
          Beyond product development, recruitment consulting, RPO,
          and staffing company, Chiselon helps businesses design, build, and scale software
          solutions that drive innovation and growth.
        </p>
        <ul className="expertise">
          {services.map((service, index) => (
            <li key={index} className="mission-card">
              <img src={service.icon} alt={service.title} className="card-icon" />
              <h4 className="card-title">{service.title}</h4>
              <p className="card-description">{service.description}</p>
            </li>
          ))}
        </ul>
        {/* <p className="approach">
          Our development follows agile principles with a focus on: <strong>Scalability, Performance, Security, and Business alignment.</strong>
        </p> */}
      </div>
    </section>
  );
};

export default TechnologyServices;
