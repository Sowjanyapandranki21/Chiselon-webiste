import React from "react";
import "./CallToAction.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate(); // ✅ get navigate function

  const handleContactClick = () => {
    navigate("/contact"); // ✅ route to your contact page
  };
  const handleBuildClick = () => {
  const phoneNumber = "8688767603"; // include country code
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
      <h6 className="cta-title">At Chiselon, our products are enablers of growth and transformation.</h6>
      <p style={{color:"black"}}>👉 Ready to explore how our products can work for you?</p>
      <div className="cta-buttons">
        <button className="btn primary" onClick={handleBuildClick}>Request a Demo</button>
        <button className="btn secondary" onClick={handleContactClick}>Contact Us</button>
      </div>
      </div>
    </section>
  );
};

export default CallToAction;
