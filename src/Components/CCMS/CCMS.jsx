import React, { useState, useEffect } from "react";
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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
import Explore from "../../Assests/explore.png";
import useWindowWidth from "./useWindowWidth.js";

const testimonials = [
  {
    text: "CCMS has made managing my clinic so much easier. The automation tools handle appointments, billing, and follow-ups seamlessly. It saves me valuable time that I can now spend with my patients.",
    author: "Dr. Sharma",
    region: "Telangana",
    best: false
  },
  {
    text: "This system is perfect for busy doctors like me. From scheduling to patient reminders, everything runs smoothly. The support team is responsive and professional.",
    author: "Dr. Reddy",
    region: "Kerala",
    best: false
  },
  {
    text: "I appreciate how simple and intuitive CCMS is to use. It keeps my records organized and automates repetitive tasks, which makes daily practice stress-free.",
    author: "Dr. Mehta",
    region: "Chennai",
    best: false
  },
  {
    text: "The automation features are a game changer. My staff and I have noticed a big improvement in efficiency and patient satisfaction since we started using CCMS.",
    author: "Dr. Anjali Menon",
    region: "Kerala",
    best: false
  },
  {
    text: "CCMS has streamlined my workflow and reduced administrative hassles. I can now focus more on providing quality care rather than managing paperwork.",
    author: "Dr. Ramesh Rao",
    region: "Telangana",
    best: false
  },
  {
    text: "As a dentist, time management is crucial. CCMS automates so many routine tasks — it’s reliable, easy to learn, and a great asset for any medical professional.",
    author: "Dr. Priya Subramanian",
    region: "Chennai",
    best: false
  }
];


const Ccms = () => {

  const [showVideo, setShowVideo] = useState(false);

  const images = Array.from({ length: 20 }, (_, i) => require(`../../Assests/${i + 1}.jpg`));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let firstTimeout = setTimeout(() => {
      setCurrentIndex(1); // Move to second image after 1 minute (60000ms)

      // After the first image, start regular 7s interval
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 5000);

      // Cleanup interval when component unmounts
      return () => clearInterval(interval);
    }, 30000);

    return () => clearTimeout(firstTimeout);
  }, [images.length]);

  const width = useWindowWidth();

  const [formData, setFormData] = useState({
    fullNameOrClinicName: "",
    email: "",
    phone: "",
    preferredTime: "",
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

    // Check if required fields are filled
    const { fullNameOrClinicName, email, phone } = formData;
    if (!fullNameOrClinicName || !email || !phone) {
      alert("Please fill all required fields before submitting!");
      return;
    }

    // Prepare WhatsApp message
    const message = `Hello! I would like to request a Demo.\n\nFull Name / Clinic Name: ${formData.fullNameOrClinicName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Time: ${formData.preferredTime || "Not specified"}`;

    // Open WhatsApp
    openWhatsApp(message);

    // Reset form
    setFormData({ fullNameOrClinicName: "", email: "", phone: "", preferredTime: "" });
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
      {/* Fixed Button Outside the Section */}
      <motion.button
        type="button"
        className="demo-top-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => openWhatsApp("Hello! I would like to request a Demo.")}
      >
        Request a Demo
      </motion.button>
      <br />
      {/* Hero Section */}
      <motion.section
        className="ccms-hero"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h1 style={{ margin: 0 }}>Chiselon Clinic Management Suite (CCMS)</h1>
        <p style={{ margin: 0, fontWeight: "bold", color: "black" }}>
          A Unified Platform for Patients, Doctors, and Clinic Administrators
        </p>
      </motion.section>
      {/* =====================
     CHART SLIDER SECTION
====================== */}
      <motion.section className="ccms-overview-section">
        <h3 className="section-title" style={{ margin: 0 }}>
          Solving Real Problems in Indian Clinics—One Innovation at a Time
        </h3>

        <section className="clinic-card-section" style={{ margin: 0, padding: 0 }}>
          <div className="clinic-slider-container">
            {/* Left arrow */}
            <button
              className="arrow-btn left"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            >
              ‹
            </button>

            {/* Image card */}
            <div className="clinic-card-wrapper">
              <img
                src={images[currentIndex]}
                alt={`Clinic ${currentIndex + 1}`}
                className="clinic-fullwidth-image"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="clinic-explore-btn"
                onClick={() => setShowVideo(true)}
              >
                Explore More
              </motion.button>
            </div>

            {/* Right arrow */}
            <button
              className="arrow-btn right"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
            >
              ›
            </button>
          </div>

          {/* Video modal */}
          {showVideo && (
            <div
              className="video-modal-overlay"
              onClick={() => setShowVideo(false)}
            >
              <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/Z_Whr7dd5aQ?autoplay=1&mute=1&controls=1&modestbranding=1"
                    title="CCMS Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="clinic-video"
                  ></iframe>

                  <button
                    className="close-video-btn"
                    onClick={() => setShowVideo(false)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </motion.section>
      <br />
      <section className="ccms-video-section">
        <h3 className="section-title">
          Explore our CCMS suite - our Patient App, Doctor App and Admin App
        </h3>

        <div className="video-cards-grid">
          {[
            {
              title: "Clinic Admin",
              image: ClinicImage,
              videoId: "sgM_ycXNNRU",
              link: "https://www.youtube.com/watch?v=sgM_ycXNNRU",
            },
            {
              title: "Doctor Web App",
              image: DoctorWebImage,
              videoSrc: require("../../Assests/doctor_app.mp4"), // ✅ Local video
            },
            {
              title: "Patient App",
              image: Customer,
              videoId: "u8dyZ3Vo5RY",
              link: "https://youtu.be/u8dyZ3Vo5RY",
            },
          ].map((card, index) => (
            <div key={index} className="video-card-wrapper">
              <h4 className="video-card-title">{card.title}</h4>

              <div className="video-card-frame" style={{ cursor: "pointer" }}>
                {card.videoSrc ? (
                  // ✅ Local MP4 video
                  <video
                    src={card.videoSrc}
                    width="100%"
                    height="200"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    style={{ borderRadius: "8px", objectFit: "cover" }}
                  />
                ) : (
                  // ✅ YouTube embed with autoplay and mute
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${card.videoId}?autoplay=1&mute=1&loop=1&playlist=${card.videoId}&controls=0&modestbranding=1&playsinline=1`}
                    title={card.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: "8px" }}
                  ></iframe>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="ccms-testimonials">
        <h3 className="section-title" style={{ margin: "0 0 10px 0" }}>Testimonials</h3>
        <div className="testimonial-slider">
          <motion.div
            className="testimonial-track"
            animate={{ x: ["0%", "-50%"] }} // continuous scroll
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className={`testimonial-card ${t.best ? "best" : ""}`}
              >
                <p className="text">"{t.text}"</p>
                <p className="author">- {t.author}</p>
                <p className="region">{t.region}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <br /><br /><br />
      {/* Demo Form */}
      <section className="ccms-demo-section">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h3 className="section-title" style={{ margin: 0 }}>
            Ready to Transform Your Practice?
          </h3>
          <p style={{ fontWeight: "bold", margin: 0 }}>
            Schedule a free, no-obligation demo and discover how Chiselon can
            optimize your dermatology/dental workflow.
          </p>
        </div>
        <br />

        <form className="ccms-demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="fullNameOrClinicName"
              placeholder="Full Name / Clinic Name"
              value={formData.fullNameOrClinicName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="preferredTime"
              placeholder="Preferred Time (optional)"
              value={formData.preferredTime}
              onChange={handleChange}
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
