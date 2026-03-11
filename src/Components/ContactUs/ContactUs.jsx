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
  const [status, setStatus] = useState("");

  // Regex for validation


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData({ ...formData, phone: digitsOnly });
      }
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "email") {
        setErrors((prev) => ({
          ...prev,
          email: !emailRegex.test(value) ? "Please enter a valid email." : null,
        }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const to = "support@chiselontechnologies.com,vivekr@chiselontechnologies.com";;

    const subject = `New Website Inquiry from ${formData.name} | Chiselon`;

    const body = `
Dear Chiselon Team,

A new inquiry has been submitted through the official Chiselon Technologies website contact form. 
Please review the details below.

================================================================

CONTACT DETAILS

Name            : ${formData.name}
Email           : ${formData.email}
Phone Number    : ${formData.phone}
Organization    : ${formData.company || "Not Provided"}

================================================================

MESSAGE FROM THE SENDER

${formData.message}

================================================================

SUBMISSION INFORMATION

Source          : Chiselon Technologies Official Website
Submitted On    : ${indiaTime}

================================================================

Please review this inquiry and reach out to the sender if any additional information or follow-up is required.

Best regards,  
Chiselon Website Contact System  
Chiselon Technologies Pvt. Ltd.

----------------------------------------------------------------
This is an automated notification generated from the website contact form.
`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    // ✅ Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    setErrors({});
    setStatus("Form opened in Gmail successfully!");
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
              4/329-7, First Floor, Above Apollo Pharmacy,Kottai Pirivu,
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

              <input
                type="text"
                name="company"
                placeholder="Organization / Company"
                value={formData.company}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Message / Inquiry"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">
                📩 Send Message
              </button>
            </form>



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
