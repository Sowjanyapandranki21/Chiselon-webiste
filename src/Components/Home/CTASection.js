import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./CTASection.css";

const CTASection = () => {
  const navigate = useNavigate(); // ✅ get navigate function

  const handleContactClick = () => {
    navigate("/contact"); // ✅ route to your contact page
  };

  const handleBuildClick = () => {
    const phoneNumber = "8807981081"; // include country code
    const message = encodeURIComponent("Hello! I would like to request a Demo."); // Matches "Request a Case Study Deck"

    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const newWindow = window.open(whatsappAppUrl, "_blank");
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.open(whatsappWebUrl, "_blank");
      }
    }, 500);
  };

  return (
    <section className="cta-section">
      <div className="particles"></div>
      <div className="cta-container">
        <h2 className="cta-title">
          <p className="section-titles">Ready to build smarter teams or innovative solutions ?</p> {" "}

        </h2>
        <p className="cta-subtext" >👉 Let’s shape your future together.</p>
        <div className="cta-buttons">
          <button className="btn primary" onClick={handleContactClick}>
            🚀 Contact Us
          </button>
          <button className="btn secondary" onClick={handleBuildClick}>
            💡 Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
