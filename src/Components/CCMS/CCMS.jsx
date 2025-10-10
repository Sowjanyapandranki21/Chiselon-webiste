import React, { useState } from "react";
import { event } from "../../GA.js"; // GA event helper
import {
  FaCalendarAlt,
  FaMobileAlt,
  FaFileAlt,
  FaAt,
  FaCreditCard,
  FaChartBar
} from "react-icons/fa";

import { motion } from "framer-motion";
import "./Ccms.css"; // Your styles

const Ccms = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // GA event tracking
    event({
      action: "submit",
      category: "CCMS Form",
      label: "Free Demo Form Submitted",
      value: 1,
    });

    // For now, just alert form data (replace with real API)
    alert(`Thank you, ${formData.fullName}! Your demo request is submitted.`);

    // Reset form
    setFormData({ fullName: "", clinicName: "", email: "", phone: "" });
  };



  return (
    <div className="ccms-container">
      {/* Hero Section */}
      <section className="ccms-hero">
        <h1>The Complete Clinical-Care Management Suite (CCMS)</h1>
        <p>A Unified Platform for Patients, Doctors, and Clinic Administrators</p>
      </section>

      {/* NEW: Clinic Operating System Flow Section */}
      {/* FLOW SECTION */}
      <section className="clinic-flow-section">
        <h2>The Solution: Your Clinic’s Operating System</h2>
        <p>
          Chiselon Clinic Management System is more than just software; it’s a complete
          operating system that automates and streamlines every aspect of your practice,
          from patient intake to billing.
        </p>

        {/* Flow Grid */}
        <div className="flow-container">
          {/* Top Row */}
          <div className="flow-row">
            <motion.div className="flow-card dark">
              <FaCalendarAlt size={32} color="#8EF24B" />
              <p>Patient Books Online</p>
            </motion.div>
            <span className="flow-arrow">→</span>

            <motion.div className="flow-card light">
              <FaMobileAlt size={32} color="#8EF24B" />
              <p>Digital Check-in & Reminders</p>
            </motion.div>
            <span className="flow-arrow">→</span>

            <motion.div className="flow-card dark">
              <FaFileAlt size={32} color="#8EF24B" />
              <p>E-Visit & Integrated Notes</p>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flow-row">
            <motion.div className="flow-card light">
              <FaCreditCard size={32} color="#8EF24B" />
              <p>Automated Billing</p>
            </motion.div>
            <span className="flow-arrow">→</span>

            <motion.div className="flow-card dark">
              <FaChartBar size={32} color="#8EF24B" />
              <p>Practice Analytics</p>
            </motion.div>
            <span className="flow-arrow reverse">←</span>

            <motion.div className="flow-card dark">
              <FaAt size={32} color="#8EF24B" />
              <p>Secure Patient Follow-up</p>
            </motion.div>
            <span className="flow-arrow">→</span>
          </div>
        </div>
      </section>

      {/* Cards section */}
      <section className="ccms-cards">
        <div className="ccms-card">
          <h2>For Patients</h2>
          <p>Your personal health hub, right in your pocket.</p>
          <ul>
            <li>Effortless Scheduling</li>
            <li>Instant Record Access</li>
            <li>Informed Decisions</li>
            <li>Timely Reminders</li>
            <li>Health Tracking</li>
            <li>Seamless Payments</li>
          </ul>
        </div>
        <div className="ccms-card">
          <h2>For Doctors</h2>
          <p>Focus on what matters most—your patients.</p>
          <ul>
            <li>360° Patient View</li>
            <li>Streamlined Prescribing</li>
            <li>Comprehensive Care</li>
            <li>Visualize Progress</li>
            <li>Organized Calendar</li>
          </ul>
        </div>
        <div className="ccms-card">
          <h2>For Clinic Admins</h2>
          <p>The command center for your entire practice.</p>
          <ul>
            <li>Centralized Scheduling</li>
            <li>Secure Staff Access</li>
            <li>Effortless Doctor Management</li>
            <li>Operational Oversight</li>
            <li>End-to-End Workflow</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "40px",
            fontWeight: "700",
            color: "#1a73e8",
          }}
        >
          Trusted by Leading Dermatologists
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f0fcff",
              padding: "30px",
              borderRadius: "12px",
              flex: "1 1 300px",
              maxWidth: "500px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              borderLeft: "5px solid #1a73e8",
            }}
          >
            <p style={{ fontStyle: "italic", color: "#333", marginBottom: "15px" }}>
              "Chiselon has been a game-changer. Our administrative overhead is down by
              half, and our patient satisfaction scores have never been higher. I can't
              imagine running my practice without it."
            </p>
            <p style={{ fontWeight: "700", margin: 0 }}>
              - Dr. Eleanor Vance, Vance Dermatology
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f0fcff",
              padding: "30px",
              borderRadius: "12px",
              flex: "1 1 300px",
              maxWidth: "500px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              borderLeft: "5px solid #1a73e8",
            }}
          >
            <p style={{ fontStyle: "italic", color: "#333", marginBottom: "15px" }}>
              "The transition was seamless. The ability to access patient records securely
              from anywhere and the automated billing features have directly contributed
              to a 15% growth in our revenue this year."
            </p>
            <p style={{ fontWeight: "700", margin: 0 }}>
              - Dr. Marcus Thorne, Skin Health Specialists
            </p>
          </div>
        </div>
      </div>

      {/* Demo Form */}
      <div className="ccms-demo-section">
        <h2>Ready to Transform Your Practice?</h2>
        <p>
          Schedule a free, no-obligation demo to see how Chiselon Clinic Management
          System can be tailored to the unique needs of your dermatology practice.
        </p>

        <form className="ccms-demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="clinicName"
              placeholder="Clinic Name"
              value={formData.clinicName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Schedule My Free Demo</button>
        </form>
      </div>
    </div>
  );
};

export default Ccms;
