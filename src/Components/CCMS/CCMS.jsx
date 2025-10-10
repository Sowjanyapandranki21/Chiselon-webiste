import React, { useState } from "react";
import { event } from "../../GA.js";
import {
  FaCalendarAlt,
  FaMobileAlt,
  FaFileAlt,
  FaAt,
  FaCreditCard,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Ccms.css";

const Ccms = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    event({
      action: "submit",
      category: "CCMS Form",
      label: "Free Demo Form Submitted",
      value: 1,
    });

    alert(`Thank you, ${formData.fullName}! Your demo request is submitted.`);
    setFormData({ fullName: "", clinicName: "", email: "", phone: "" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="ccms-container">
      {/* Hero Section */}
      <motion.section
        className="ccms-hero"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h1>The Complete Clinical-Care Management Suite (CCMS)</h1>
        <p>A Unified Platform for Patients, Doctors, and Clinic Administrators</p>
      </motion.section>

      {/* Flow Diagram Section */}
     {/* Flow Diagram Section */}
<motion.section
  className="clinic-flow-section"
  initial="hidden"
  whileInView="visible"
  variants={fadeUp}
>
  <h2>The Solution: Your Clinic’s Operating System</h2>
  <p>
    Chiselon Clinic Management System automates and streamlines every
    aspect of your practice—from patient intake to billing and analytics.
  </p>

 <div className="flow-diagram">
  {/* Row 1 */}
  <div className="flow-row row-1">
    <div className="flow-card">
      <FaCalendarAlt className="flow-icon" />
      <p>Patient Books Online</p>
    </div>
    <span className="flow-arrow">→</span>
    <div className="flow-card">
      <FaMobileAlt className="flow-icon" />
      <p>Digital Check-in & Reminders</p>
    </div>
    <span className="flow-arrow">→</span>
    <div className="flow-card">
      <FaFileAlt className="flow-icon" />
      <p>E-Visit & Integrated Notes</p>
    </div>
  </div>



  {/* Row 2 */}
  <div className="flow-row row-2">
    <span className="flow-arrow">←</span>
    <div className="flow-card">
      <FaAt className="flow-icon" />
      <p>Secure Patient Follow-up</p>
    </div>
  </div>

  

  {/* Row 3 */}
  <div className="flow-row row-3">
    <span className="flow-arrow">→</span>
    <div className="flow-card">
      <FaCreditCard className="flow-icon" />
      <p>Automated Billing</p>
    </div>
    <span className="flow-arrow">→</span>
    <div className="flow-card">
      <FaChartBar className="flow-icon" />
      <p>Practice Analytics</p>
    </div>
  </div>
</div>


</motion.section>

      {/* Cards Section */}
      <section className="ccms-cards">
        {[
          {
            title: "For Patients",
            text: "Your personal health hub, right in your pocket.",
            list: [
              "Effortless Scheduling",
              "Instant Record Access",
              "Informed Decisions",
              "Timely Reminders",
              "Health Tracking",
              "Seamless Payments",
            ],
          },
          {
            title: "For Doctors",
            text: "Focus on what matters most—your patients.",
            list: [
              "360° Patient View",
              "Streamlined Prescribing",
              "Comprehensive Care",
              "Visualize Progress",
              "Organized Calendar",
            ],
          },
          {
            title: "For Clinic Admins",
            text: "The command center for your entire practice.",
            list: [
              "Centralized Scheduling",
              "Secure Staff Access",
              "Effortless Doctor Management",
              "Operational Oversight",
              "End-to-End Workflow",
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="ccms-card"
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <ul>
              {card.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="ccms-testimonials">
        <h2>Trusted by Leading Dermatologists</h2>
        <div className="testimonial-grid">
          {[
            {
              quote:
                "Chiselon has been a game-changer. Our administrative overhead is down by half, and our patient satisfaction scores have never been higher.",
              author: "Dr. Eleanor Vance, Vance Dermatology",
            },
            {
              quote:
                "The transition was seamless. Secure patient access and automated billing helped us grow revenue by 15% this year.",
              author: "Dr. Marcus Thorne, Skin Health Specialists",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              whileHover={{ scale: 1.02 }}
            >
              <p>"{t.quote}"</p>
              <span>{t.author}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demo Form */}
      <section className="ccms-demo-section">
        <h2>Ready to Transform Your Practice?</h2>
        <p>
          Schedule a free, no-obligation demo and discover how Chiselon can
          optimize your dermatology workflow.
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
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            Schedule My Free Demo
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default Ccms;
