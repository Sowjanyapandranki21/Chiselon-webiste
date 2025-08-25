import React from "react";
import "./HeroSection.css";
import logo from "../../Assests/image1.png"; // replace with your actual image path
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const talkToExpert = () => {
    navigate("/services"); // Navigates to contact page
  };
  return (
    <section className="hero">
      <div className="container heroContent">
        {/* Left Side - Text */}
        <div className="heroText">
          {/* <h1 className="crave-title">Crave to Carve</h1> */}
          <p>
            At Chiselon Technologies, we empower businesses by bridging the gap between 
            people and technology. Whether it’s building high-performing teams through 
            recruitment or delivering cutting-edge digital products, we are committed 
            to driving growth, efficiency, and innovation worldwide.
          </p>
          <div className="heroBtns">
            <button className="btn secondaryBtn" onClick={talkToExpert}>Explore Solutions</button>
            {/* <button className="btn secondaryBtn" onClick={talkToExpert}>Talk to an Expert</button> */}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="heroImage">
          <img src={logo} alt="Chiselon Logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
