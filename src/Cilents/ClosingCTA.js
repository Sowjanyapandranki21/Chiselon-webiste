import React from "react";

const handleHireClick = () => {
  const phoneNumber = "8688767603"; // include country code
  const message = encodeURIComponent("Hello! I am interested in hiring talent."); // Matches "Let’s Talk"
  
  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  const newWindow = window.open(whatsappAppUrl, "_blank");
  setTimeout(() => {
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.open(whatsappWebUrl, "_blank");
    }
  }, 500);
};

const handleBuildClick = () => {
  const phoneNumber = "8688767603"; // include country code
  const message = encodeURIComponent("Hello! I would like to request a Case Study Deck."); // Matches "Request a Case Study Deck"
  
  const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  const newWindow = window.open(whatsappAppUrl, "_blank");
  setTimeout(() => {
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.open(whatsappWebUrl, "_blank");
    }
  }, 500);
};

const ClosingCTA = () => (
  <div className="closing-cta">
    <p>Our clients’ success is our biggest achievement. Whether it’s staffing needs or technology innovation, we are here to deliver solutions that scale with your business.</p>
    <div className="cta-buttons">
      <button className="primary-btn" onClick={handleHireClick}>Let’s Talk</button>
      <button className="secondary-btn" onClick={handleBuildClick}>Request a Case Study Deck</button>
    </div>
  </div>
);

export default ClosingCTA;
