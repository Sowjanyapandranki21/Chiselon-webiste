import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const handleContactClick = () => {
    window.location.href = "/contact"; // navigate to contact page
  };

  const handleHireClick = () => {
    const phoneNumber = "8807981081"; // include country code
    const message = encodeURIComponent("Hello! I am interested in hiring talent.");
    
    // WhatsApp app link (works on mobile)
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    
    // fallback to WhatsApp Web if app not installed
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Try opening app first
    const newWindow = window.open(whatsappAppUrl, "_blank");
    
    // If failed (desktop usually), open WhatsApp Web after short delay
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
        <p className="cta-subtext" >
          👉 Let’s collaborate to carve your success story.
        </p>
        <div className="cta-buttons">
          <button className="btn primary" onClick={handleHireClick}>
            Hire Talent
          </button>
          <button className="btn secondary" onClick={handleHireClick}>
            Build Technology Solutions
          </button>
          <button className="btn outline secondary" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
