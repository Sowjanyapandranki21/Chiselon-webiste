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
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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

  // ======================
  // DATA FOR NEW SECTION
  // ======================
  const workWeekData = [
    { name: "Patient Care", value: 50 },
    { name: "Administrative Tasks", value: 25 },
    { name: "Research & Development", value: 15 },
    { name: "Meetings & Communication", value: 10 },
  ];

  const COLORS = ["#2A3FAA", "#A9E34B", "#A4B8FF", "#C4C4C4"];

  const inefficiencyData = [
    { name: "Manual Patient Data Entry", hours: 6 },
    { name: "Appointment Scheduling", hours: 4 },
    { name: "Billing and Coding", hours: 3 },
    { name: "Managing Patient Follow-ups", hours: 2 },
  ];
  // Custom Tooltip for PieChart
// Custom Tooltip for PieChart
const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, color } = payload[0]; // payload includes color from the slice
    return (
      <div className="bg-white p-2 shadow-lg border rounded">
        {/* Category name with colored dot */}
        <p className="flex items-center gap-2 mb-1">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          ></span>
          {name}
        </p>
        {/* Hours per week */}
        <p>Hours per week: {value}h</p>
      </div>
    );
  }
  return null;
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

      {/* ==========================
           NEW SECTION STARTS HERE
      =========================== */}
      <motion.section
        className="ccms-overview-section"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0115ae] mb-6">
            Is Your Practice Overwhelmed?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            The demands of a modern dermatology practice are immense. From patient
            communication gaps to inefficient workflows, the administrative burden
            can detract from what truly matters: patient care.
          </p>
        </div>


      <div className="overview-charts">
  {/* Donut Chart */}
  <div className="overview-card">
    <h3>🕒 Breakdown of a Dermatologist's Work Week</h3>
    <p>
      A significant portion of the week is consumed by non-clinical tasks.
      Our goal is to shift the balance back towards patient-focused
      activities.
    </p>

    <div className="chart-container">
    <ResponsiveContainer width="100%" height={260}>
  <PieChart>
    <Pie
      data={workWeekData}
      dataKey="value"
      nameKey="name"
      innerRadius={70}
      outerRadius={100}
      paddingAngle={3}
    >
      {workWeekData.map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>
    <Tooltip content={<CustomPieTooltip />} />
  </PieChart>
</ResponsiveContainer>

    </div>

    <div className="chart-legend">
      {workWeekData.map((item, i) => (
        <div key={i} className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: COLORS[i] }}
          ></div>
          <span>{item.name}: {item.value}h</span>
        </div>
      ))}
    </div>
  </div>

  {/* Bar Chart */}
  <div className="overview-card">
    <h3>↗ Top Practice Inefficiencies</h3>
    <p>
      Manual, repetitive tasks are the biggest drain on time and resources,
      leading to potential errors and staff burnout.
    </p>

    <div className="chart-container">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={inefficiencyData}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <XAxis dataKey="name" angle={-15} textAnchor="end" interval={0} height={70} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" radius={[8, 8, 0, 0]} fill="#2A3FAA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

      </motion.section>
      {/* ==========================
           NEW SECTION ENDS HERE
      =========================== */}

      {/* Flow Diagram Section */}
      <motion.section
        className="clinic-flow-section"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h3 className="section-title" style={{ textAlign: "center" }}>
          The Solution: Your Clinic’s Operating System
        </h3>
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
      <br />

      {/* Cards Section */}
      <section className="ccms-cards">
        {[ /* your cards stay unchanged */].map((card, i) => (
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
        <h3 className="section-title">Trusted by Leading Dermatologists</h3>
        <div className="testimonial-grid">
          {[ /* testimonials unchanged */].map((t, i) => (
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
        <h3 className="section-title">Ready to Transform Your Practice?</h3>
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
            Request a Demo
          </motion.button>
        </form>
      </section>
    </div>
  );
};

export default Ccms;
