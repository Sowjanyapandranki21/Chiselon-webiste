import React from "react";
import "./CallToAction.css";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate(); // ✅ get navigate function

  const handleContactClick = () => {
    navigate("/contact"); // ✅ route to your contact page
  };
  return (
    <section className="cta-section">
              <div className="particles"></div>
              <div className="cta-container">
      <h6 className="cta-title">At Chiselon, our products are enablers of growth and transformation.</h6>
      <p>👉 Ready to explore how our products can work for you?</p>
      <div className="cta-buttons">
        <button className="btn primary">Request a Demo</button>
        <button className="btn secondary" onClick={handleContactClick}>Contact Us</button>
      </div>
      </div>
    </section>
  );
};

export default CallToAction;
