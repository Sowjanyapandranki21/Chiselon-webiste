import React from "react";
import "./TechnologyServices.css";

// Example images (replace with your actual icons/images)
import softwareIcon from "../../../Assests/software.png";
import cloudIcon from "../../../Assests/cloud.png";
import dataIcon from "../../../Assests/data.png";
import securityIcon from "../../../Assests/security.png";
import iotIcon from "../../../Assests/Iot.png";

const services = [
  {
    icon: softwareIcon,
    title: "Custom Software Development",
    description: "Full-stack expertise in Java, .NET, Python, Node.js, React, Flutter, and more.",
  },
  {
    icon: cloudIcon,
    title: "Cloud & DevOps",
    description: "AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform.",
  },
  {
    icon: dataIcon,
    title: "Data & AI",
    description: "AI/ML models, Big Data, Predictive Analytics.",
  },
  {
    icon: securityIcon,
    title: "Cybersecurity & Networking",
    description: "Secure your apps, data, and infrastructure.",
  },
  {
    icon: iotIcon,
    title: "Embedded & IoT",
    description: "Healthcare, automotive, manufacturing integrations.",
  },
];

const TechnologyServices = () => {
  return (
    <section className="tech-services">
      <div className="container">
        <h3 className="section-title">Technology Services & Product Development</h3>
        <p>
          Beyond staffing, Chiselon helps businesses design, build, and scale software
          solutions that drive innovation and growth.
        </p>
        <ul className="expertise">
          {services.map((service, index) => (
            <li key={index} className="card">
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
