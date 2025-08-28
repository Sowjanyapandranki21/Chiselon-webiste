import React from "react";
import "./HeroSection.css";
import logo from "../../Assests/image1.png"; // replace with your actual image path
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const talkToExpert = () => {
    navigate("/services"); // Navigates to services page
  };

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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container heroContent">
          {/* Left Side - Text */}
          <div className="heroText">
            <p style={{ color: "black" }}>
              At Chiselon Technologies, we empower businesses by bridging the gap
              between people and technology. Whether it’s building high-performing
              teams through recruitment or delivering cutting-edge digital products,
              we are committed to driving growth, efficiency, and innovation worldwide.
            </p>
            <div className="heroBtns">
              <button className="btn secondaryBtn" onClick={talkToExpert}>
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="heroImage">
            <img src={logo} alt="Chiselon Logo" />
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default HeroSection;
