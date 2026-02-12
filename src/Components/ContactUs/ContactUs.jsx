import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
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
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

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

    // Add India time
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      submittedAt: indiaTime,
    };

    try {
      const response = await emailjs.send(
        "service_o5jy4mk",     // ✅ your Service ID
        "template_etxr8ld",    // ✅ your Template ID
        dataToSend,            // ✅ must match variables in template
        "dB2WIEgwSZqaXZd1l"    // ✅ your Public Key (not private key)
      );

      console.log("EmailJS Response:", response);

      if (response.status === 200) {
        setStatus({
          submitting: false,
          success: "✅ Message sent successfully!",
          error: null,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error("Unexpected response: " + response.text);
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        submitting: false,
        success: null,
        error: "❌ Something went wrong.",
      });
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
              Chiselon Technologies Pvt Ltd,
              4/329-6, First Floor, Above Apollo Pharmacy,Kottai Pirivu,
              Bilichi PO, Coimbatore<br />
              Pincode: 641019
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
          <p className="map-title">📍 Chiselon Technologies Pvt. Ltd.</p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=11.20436,76.96581&hl=en&z=17&output=embed"
              width="100%"
              height="400"
              style={{
                border: 0,
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chiselon Technologies Pvt. Ltd. Location"
            ></iframe>
          </div>
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
