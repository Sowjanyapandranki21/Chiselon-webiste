import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const phoneNumber = "918807981081"; // country code + number

  // Function to open WhatsApp with a custom message
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
        <h6 className="cta-title">
          At Chiselon, our products are enablers of growth and transformation.
        </h6>
        <p>👉 Ready to explore how our products can work for you?</p>
        <div className="cta-buttons">
          <button
            className="btn primary"
            onClick={() =>
              openWhatsApp("Hello! I would like to request a Demo.")
            }
          >
            Request a Demo
          </button>
          <button
            className="btn secondary"
            onClick={() =>
              openWhatsApp("Hello! I would like to get in touch with your team.")
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
