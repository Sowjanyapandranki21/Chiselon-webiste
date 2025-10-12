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
import DoctorWebImage from "../../Assests/ic_launcher.png";
import ClinicImage from "../../Assests/DermaLOgo_1.png";
import Customer from "../../Assests/DermaLOgo_1.png";
import MainAdmin from "../../Assests/DermaLOgo_1.png";
import useWindowWidth from "./useWindowWidth.js";
const Ccms = () => {
  const width = useWindowWidth();

  // Dynamic sizes based on screen width
  const pieHeight = width < 480 ? 250 : width < 768 ? 220 : 260;
  const innerRadius = width < 480 ? 50 : 90;
  const outerRadius = width < 480 ? 80 : 130;
  const xFontSize = width < 480 ? 8 : 10;
  const yFontSize = width < 480 ? 8 : 10;
  const labelFontSize = width < 480 ? 10 : 14;
  const [formData, setFormData] = useState({
    fullName: "",
    clinicName: "",
    email: "",
    phone: "",
  });
  const [activeSlide, setActiveSlide] = useState(0);
  // 🔄 Animation cycle every 100 seconds
  const animations = ["rotateX", "rotateY", "scaleUp", "fadeIn"];
  const [animationClass, setAnimationClass] = useState(animations[0]);

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % animations.length;
      setAnimationClass(animations[index]);
    }, 100000); // change every 100 seconds

    return () => clearInterval(interval);
  }, []);
  // Auto-scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 0 : prev + 1));
    }, 5000); // auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { fullName, clinicName, email, phone } = formData;
    if (!fullName || !clinicName || !email || !phone) {
      alert("Please fill all fields before submitting!");
      return;
    }

    // Prepare WhatsApp message
    const message = `Hello! I would like to request a Demo.\n\nFull Name: ${fullName}\nClinic Name: ${clinicName}\nEmail: ${email}\nPhone: ${phone}`;

    // Open WhatsApp
    openWhatsApp(message);

    // Reset form
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
    { name: "Manual\nPatient Data Entry", hours: 6 },
    { name: "Appointment\nScheduling", hours: 4 },
    { name: "Billing\nand Coding", hours: 3 },
    { name: "Managing\nPatient Follow-ups", hours: 2 },
  ];

  // Custom Tooltip for PieChart
  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value, index } = payload[0];
      const fill = COLORS[index % COLORS.length];

      return (
        <div
          className="rounded-lg px-3 py-2 shadow-md text-sm"
          style={{
            border: "1px solid #e5e7eb",
            backgroundColor: "#000",
            color: "#fff",
            minWidth: "170px",
          }}
        >
          <div className="flex items-start gap-2">
            {/* Color Dot */}
            <span
              className="w-3 h-3 rounded-full mt-1"
              style={{ backgroundColor: fill }}
            ></span>

            {/* Text Block */}
            <div>
              <div className="font-semibold mb-1">{name}</div>
              <div>
                Hours per Week: <strong>{value}</strong>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomBarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, hours } = payload[0].payload;

      return (
        <div
          className="rounded-lg px-3 py-2 shadow-md text-sm"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            border: "1px solid #e5e7eb",
          }}
        >
          <div className="font-semibold mb-1">{name}</div>
          <div>Hours Lost per Week: <strong>{hours}</strong></div>
        </div>
      );
    }
    return null;
  };

  const openWhatsApp = (message) => {
    const phoneNumber = "918688767603"; // country code + number
    const encodedMessage = encodeURIComponent(message);
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const newWindow = window.open(whatsappAppUrl, "_blank");
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        window.open(whatsappWebUrl, "_blank");
      }
    }, 500);
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
        <p style={{ fontWeight: "bold", color: "black" }}>A Unified Platform for Patients, Doctors, and Clinic Administrators</p>
      </motion.section>

      {/* =====================
     CHART SLIDER SECTION
====================== */}
      <motion.section
        className="ccms-overview-section"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <div className="text-center max-w-3xl mx-auto mt-8 mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0115ae] mb-4 text-center">
            Is Your Practice Overwhelmed?
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto px-4">
            The demands of a modern dermatology/dental practice are immense. From patient
            communication gaps to inefficient workflows, the administrative burden can detract
            from what truly matters: patient care.
          </p>
        </div>


        <div className="overview-slider">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Slide 1 - Donut Chart */}
            <div className="overview-slide">
              <div className="overview-card">
                <h3>🕒 Breakdown of a Dermatologist's Work Week</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-2xl mx-auto px-4">
                  A significant portion of the week is consumed by non-clinical tasks.
                  Our goal is to shift the balance back towards patient-focused activities.
                </p>

                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={pieHeight}>
                    <PieChart>
                      <Pie
                        data={workWeekData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        paddingAngle={0.5}
                        startAngle={90}
                        endAngle={-270}
                        cornerRadius={2}
                        stroke="none"
                      >
                        {workWeekData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                      <span>
                        {item.name}: {item.value}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide 2 - Bar Chart */}
            <div className="overview-slide">
              <div className="overview-card" style={{ padding: "20px 10px" }}>
                <h3>↗ Top Practice Inefficiencies</h3>
                <p className="text-gray-700 text-base sm:text-base md:text-lg leading-relaxed text-center break-words px-4">
                  Manual, repetitive tasks are the biggest drain on time and resources,
                  leading to potential errors and staff burnout.
                </p>

                <div
                  className="chart-container"
                  style={{
                    height: width < 480 ? 350 : width < 768 ? 400 : 450,
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={inefficiencyData}
                      margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: width < 480 ? 140 : 120,
                      }}
                    >
                      <XAxis
                        dataKey="name"
                        interval={0}
                        tick={({ x, y, payload }) => {
                          const fontSize = width < 480 ? 8 : 10;
                          const lines = payload.value.split("\n"); // split by \n for wrapping
                          return (
                            <g transform={`translate(${x},${y + 10})`}>
                              {lines.map((line, index) => (
                                <text
                                  key={index}
                                  x={0}
                                  y={index * (fontSize + 2)}
                                  textAnchor="middle"
                                  fontSize={fontSize}
                                  fill="#666"
                                >
                                  {line}
                                </text>
                              ))}
                            </g>
                          );
                        }}
                        height={width < 480 ? 100 : 70} // increase height for small screens
                        label={{
                          // value: "Task Category",
                          position: "insideBottom",
                          offset: width < 480 ? -70 : -50,
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      />
                      <YAxis
                        tick={{ fontSize: width < 480 ? 8 : 10 }}
                        label={{
                          value: "Hours Lost/Week",
                          angle: -90,
                          position: "insideLeft",
                          offset: 10,
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      />
                      <Tooltip content={<CustomBarTooltip />} />
                      <Bar
                        dataKey="hours"
                        radius={[8, 8, 0, 0]}
                        fill="#2A3FAA"
                        barSize={width < 480 ? 30 : 50} // smaller bars for mobile
                        label={{
                          position: "top",
                          fontSize: width < 480 ? 10 : 14,
                          fill: "#2A3FAA",
                        }}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Dots */}
          <div className="slider-dots">
            {[0, 1].map((index) => (
              <span
                key={index}
                className={`dot ${activeSlide === index ? "active" : ""}`}
                onClick={() => setActiveSlide(index)}
              ></span>
            ))}
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
        <h3 className="section-title">The Solution: CCMS - Your Clinic’s Operating System</h3>

        <p className="section-subtitle">
          Chiselon Clinic Management System automates and streamlines every aspect of your
          practice—from patient intake to billing and analytics.
        </p>
        <br />
        <div className="flow-diagram">
          {/* Row 1 */}
          <div className="flow-row row-1">
            <div className="flow-card">
              <FaCalendarAlt className="flow-icon" />
              <p><strong>Patient Books Online</strong></p>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-card">
              <FaMobileAlt className="flow-icon" />
              <p><strong>Digital Check-in & Reminders</strong></p>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-card">
              <FaFileAlt className="flow-icon" />
              <p><strong>E-Visit & Integrated Notes</strong></p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flow-row row-2">
            <div className="flow-card">
              <FaAt className="flow-icon" />
              <p><strong>Secure Patient Follow-up</strong></p>
            </div>
            <span className="flow-arrow">←</span>
            <div className="flow-card">
              <FaCreditCard className="flow-icon" />
              <p><strong>Automated Billing</strong></p>
            </div>
            <span className="flow-arrow">←</span>
            <div className="flow-card">
              <FaChartBar className="flow-icon" />
              <p><strong>Practice Analytics</strong></p>
            </div>
          </div>
        </div>
      </motion.section>

      <br />
      {/* ==========================
      
       3 Cards Video Section
=========================== */}
      <section className="ccms-video-cards">
        <h3 className="section-title">
          Explore our CCMS suite - our patient App, Doctor App and Admin App
        </h3>
        <div className="cards-container">
          {[

            {
              title: "Clinic Admin",
              image: ClinicImage,
              video: "https://www.youtube.com/embed/u8dyZ3Vo5RY?autoplay=1&mute=1&loop=1&playlist=u8dyZ3Vo5RY",
              link: "https://youtu.be/u8dyZ3Vo5RY",
            },
            {
              title: "Doctor Web App",
              image: DoctorWebImage,
              video: "https://www.youtube.com/embed/u8dyZ3Vo5RY?autoplay=1&mute=1&loop=1&playlist=u8dyZ3Vo5RY",
              link: "https://youtu.be/u8dyZ3Vo5RY",
            },


            {
              title: "Patient App",
              image: Customer,
              video: "https://www.youtube.com/embed/u8dyZ3Vo5RY?autoplay=1&mute=1&loop=1&playlist=u8dyZ3Vo5RY",
              link: "https://youtu.be/u8dyZ3Vo5RY",
            },
          ].map((card, index) => (
            <div key={index} className="video-card">
              <div className="icon">
                <img src={card.image} alt={card.title} className="card-image" />
              </div>
              <h4 style={{ textAlign: "center", color: "#0115ae" }}>{card.title}</h4>

              <div className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src={card.video}
                  title={card.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
                style={{ display: "block", textAlign: "center", marginTop: "10px" }}
              >
                Link
              </a>
            </div>
          ))}
        </div>
      </section>
      <br />

      {/* Cards Section */}
      <section className="ccms-cards">
        {/* Your cards code unchanged */}
      </section>

      {/* Testimonials */}
      <section className="ccms-testimonials">
        {/* Your testimonials code unchanged */}
      </section>

      {/* Demo Form */}
      <section className="ccms-demo-section">
        <h3 className="section-title">Ready to Transform Your Practice?</h3>
        <p style={{ fontWeight: "bold", marginTop: 0 }}>
          Schedule a free, no-obligation demo and discover how Chiselon can
          optimize your dermatology/dental workflow.
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
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Demo
          </motion.button>

        </form>
      </section>
    </div>
  );
};

export default Ccms;
