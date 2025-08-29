import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./ContactUs.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 11.0306,
  lng: 76.9817,
};

const ContactUs = () => {
  const { isLoaded } = useJsApiLoader({

  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    error: null,
  });

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xgvlwdkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
      } else {
        setStatus({
          submitting: false,
          success: null,
          error: "❌ Something went wrong.",
        });
      }
    } catch {
      setStatus({
        submitting: false,
        success: null,
        error: "⚠️ Network error. Try again later.",
      });
    }
  };

  if (!isLoaded) return <p>Loading map...</p>;

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

            <p>
              📧 Email: <a href="mailto:info@chiselon.com">support@chiselontechnologies.com</a>
            </p>
            <p>📞 Phone: +91-8807981081</p>

            {/* Social Media */}
         
              {/* <h3>Connect with us</h3> */}
              <div className="social-icons">
                <a >
                  <FaFacebookF />
                </a>
                <a >
                  <FaInstagram />
                </a>
                <a href="https://wa.me/918807981081" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
      

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
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
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
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker
              position={center}
              title="Chiselon Technologies Pvt. Ltd. - Corporate Office, Coimbatore"
              onClick={() => {
                const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;
                window.open(googleMapsUrl, "_blank");
              }}
            />

            {showInfoWindow && (
              <InfoWindow
                position={center}
                onCloseClick={() => setShowInfoWindow(false)}
              >
                <div style={{ maxWidth: "200px" }}>
                  <p>
                    Chiselon Technologies Pvt. Ltd.<br />
                    Plot # 80, P&K Nest, CHIL IT Park Road,<br />
                    Saravanampatti, Coimbatore, Tamilnadu<br />
                    Pincode: 641035
                  </p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </section>

        {/* Closing Note */}
        <section className="closing-note">
          <p>
            No matter your need — hiring, staffing, product development, or innovation consulting —
            <b> Chiselon is here to partner with you.</b>
          </p>
          <p>👉 Let’s carve your success story today.</p>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;