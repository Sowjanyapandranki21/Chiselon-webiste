import React from "react";
import "./HeroSection.css";
import logo from "../../Assests/image1.png"; // replace with your actual image path
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const talkToExpert = () => {
    navigate("/services"); // Navigates to services page
  };



  return (
    <div >
      {/* Hero Section */}
      <section className="hero" style={{marginBottom:"-200px"}}>
        <div className="container heroContent">
          {/* Left Side - Text */}
          <div className="heroText">
            <p style={{ color: "black" }}>
              At Chiselon Technologies, we empower businesses by bridging the gap
              between people and technology. Whether it’s building high-performing
              teams through recruitment or delivering cutting-edge digital products,
              we are committed to driving growth, efficiency, and innovation worldwide.
            </p>
            <div className="heroBtns">
              <button className="btn secondaryBtn" onClick={talkToExpert}>
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="heroImage">
            <img src={logo} alt="Chiselon Logo" />
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default HeroSection;
