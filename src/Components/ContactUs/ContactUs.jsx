import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  // Regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only digits and max 10 digits
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, phone: digitsOnly });
        setErrors((prev) => ({ ...prev, phone: null }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
      // Live email validation
      if (name === "email") {
        setErrors((prev) => ({
          ...prev,
          email: !emailRegex.test(value) ? "Please enter a valid email." : null,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Email validation
    if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email.";

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus({ submitting: true, success: null, error: null });

    // India time
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const dataToSend = { ...formData, submittedAt: indiaTime };

    try {
      const response = await fetch("https://formspree.io/f/xgvlwdkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setStatus({ submitting: false, success: "✅ Message sent successfully!", error: null });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setErrors({});
      } else {
        setStatus({ submitting: false, success: null, error: "❌ Something went wrong." });
      }
    } catch {
      setStatus({ submitting: false, success: null, error: "⚠ Network error. Try again later." });
    }
  };

  return (
    <div className="homepage">
      <div className="contact-page">
        {/* Headline Section */}
        <section className="headline">
          <h2 className="section-title">Let’s Build Success Together.</h2>
          <p style={{ color: "black" }}>
            At <b>Chiselon Technologies Pvt. Ltd.</b>, we’re always ready to listen,
            collaborate, and deliver. Whether you’re a business looking for talent
            acquisition services, a partner exploring technology solutions, or a
            professional seeking career opportunities — we’d love to hear from you.
          </p>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-info">
            <h2 className="section-title">Get in Touch</h2>
            <p>
              📍 <b>Registered Office</b><br />
              Chiselon Technologies Pvt. Ltd.<br />
              Plot No. 413, 2nd Floor, Road No. 22, Jubilee Hills, Hyderabad<br />
              Pincode: 500033
            </p>
            <p>
              📍 <b>Corporate Office</b><br />
              Chiselon Technologies Pvt. Ltd.<br />
              Plot # 80, P&K Nest, CHIL IT Park Road, Saravanampatti, Coimbatore, Tamilnadu <br />
              Pincode: 641035
            </p>
            <p>📧 Email: <a href="mailto:support@chiselontechnologies.com">support@chiselontechnologies.com</a></p>
            <p>📞 Phone: +91-8807981081</p>

            {/* Social Media */}
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100077512130654" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/chiselon_tech?igsh=MWV5bnptejVhMmsyag==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/918807981081" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.linkedin.com/company/chiselon-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Contact Form</h2>
            <form onSubmit={handleSubmit} className="contact-form">


              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
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
              {errors.email && <p className="error-msg">{errors.email}</p>}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="error-msg">{errors.phone}</p>}

              <input type="text" name="company" placeholder="Organization / Company" value={formData.company} onChange={handleChange} />

              <textarea name="message" placeholder="Message / Inquiry" value={formData.message} onChange={handleChange} required />

              <button type="submit" disabled={status.submitting}>
                📩 {status.submitting ? "Sending..." : "Get in Touch"}
              </button>
            </form>

            {status.success && <p className="success-msg">{status.success}</p>}
            {status.error && <p className="error-msg">{status.error}</p>}
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us Here</h2>
          <iframe
            title="Chiselon Technologies Pvt. Ltd."
            src="https://www.google.com/maps?q=Chiselon+Technologies+Pvt.+Ltd.@11.0306,76.9817&z=15&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* Closing Note */}
        <section className="closing-note">
          <p>
            No matter your need — hiring, staffing, product development, or innovation consulting — <b>Chiselon is here to partner with you.</b>
          </p>
          <p>👉 Let’s carve your success story today.</p>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
