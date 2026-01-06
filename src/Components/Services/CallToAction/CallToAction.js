import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const phoneNumber = "918807981081"; // country code + number

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
        <p className="cta-subtext">
          👉 Let’s collaborate to carve your success story.
        </p>
        <div className="cta-buttons">
          <button
            className="btn primary"
            onClick={() =>
              openWhatsApp("Hello! I am interested in hiring talent.")
            }
          >
            Hire Talent
          </button>
          <button
            className="btn secondary"
            onClick={() =>
              openWhatsApp("Hello! I would like to build technology solutions with your team.")
            }
          >
            Build Technology Solutions
          </button>
          <button
            className="btn outline secondary"
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
