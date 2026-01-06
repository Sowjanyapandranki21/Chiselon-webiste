import React from "react";
import "./CTASection.css";

const CTASection = () => {
  const phoneNumber = "918807981081"; // include country code for India

  // Helper function to open WhatsApp with a custom message
  const openWhatsApp = (message) => {
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
    <section className="cta-section">
      <div className="particles"></div>
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to build smarter teams or innovative solutions?
        </h2>
        <p className="cta-subtext">👉 Let’s shape your future together.</p>
        <div className="cta-buttons">
          <button
            className="btn primary"
            onClick={() =>
              openWhatsApp("Hello! I would like to contact your team for collaboration.")
            }
          >
            🚀 Contact Us
          </button>
          <button
            className="btn secondary"
            onClick={() =>
              openWhatsApp("Hello! I would like to request a Demo.")
            }
          >
            💡 Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
