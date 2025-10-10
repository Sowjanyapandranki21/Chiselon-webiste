import React from "react";
import "./Ccms.css";

const Ccms = () => {
  const checkMark = "✓ ";

  return (
    <div className="ccms-container">
      <section className="ccms-hero">
        <h1>The Complete Clinical-Care Management Suite (CCMS)</h1>
        <p>A Unified Platform for Patients, Doctors, and Clinic Administrators</p>
      </section>

      <section className="ccms-cards">
        <div className="ccms-card">
          <h2>For Patients</h2>
          <p>Your personal health hub, right in your pocket.</p>
          <ul>
            <li>{checkMark}Effortless Scheduling: Book, cancel, and reschedule for self & family 24/7.</li>
            <li>{checkMark}Instant Record Access: View & download reports, images, and videos on the go.</li>
            <li>{checkMark}Informed Decisions: Access doctor profiles, procedure details, and provide e-consent.</li>
            <li>{checkMark}Timely Reminders: Never miss an appointment with smart WhatsApp alerts.</li>
            <li>{checkMark}Health Tracking: Monitor medication intake and track treatment progress.</li>
            <li>{checkMark}Seamless Payments: Conveniently pay online or at the clinic.</li>
          </ul>
        </div>

        <div className="ccms-card">
          <h2>For Doctors</h2>
          <p>Focus on what matters most—your patients.</p>
          <ul>
            <li>{checkMark}360° Patient View: Get instant access to patient-entered symptoms and history.</li>
            <li>{checkMark}Streamlined Prescribing: Use smart templates to write prescriptions in seconds.</li>
            <li>{checkMark}Comprehensive Care: Order tests, treatments, and meds from a global database.</li>
            <li>{checkMark}Visualize Progress: Upload & compare "Before and After" images to build patient trust.</li>
            <li>{checkMark}Organized Calendar: View a full fortnight of appointments and events at a glance.</li>
          </ul>
        </div>

        <div className="ccms-card">
          <h2>For Clinic Admins</h2>
          <p>The command center for your entire practice.</p>
          <ul>
            <li>{checkMark}Centralized Scheduling: Manage all clinic appointments and procedures from one hub.</li>
            <li>{checkMark}Secure Staff Access: Role-based logins for reception, nursing, lab, and pharmacy.</li>
            <li>{checkMark}Effortless Doctor Management: Onboard staff and manage schedules & profiles with ease.</li>
            <li>{checkMark}Operational Oversight: Manage reports, consent forms, services, and more.</li>
            <li>{checkMark}End-to-End Workflow: Streamline complex medical procedures from start to finish.</li>
          </ul>
        </div>
      </section>

      <section className="ccms-ecosystem">
        <h2>A Seamlessly Integrated Ecosystem</h2>
        <p>Data flows effortlessly between your patients, doctors, and admin staff, creating a single source of truth.</p>
        <p><strong>Patient App</strong> | <strong>Clinic Platform</strong></p>
        <p>...connecting doctors, staff, and patients in real-time.</p>
      </section>

      <section className="ccms-cta">
        <h2>Ready to Transform Your Practice?</h2>
        <p>Contact us for a personalized demo and see how the CCMS Suite can streamline your operations, enhance patient care, and grow your clinic.</p>
        <button>Request a Free Demo</button>
      </section>
    </div>
  );
};

export default Ccms;
