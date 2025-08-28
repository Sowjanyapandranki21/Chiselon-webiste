import React from "react";
import "./OurStory.css";
import storyImg from "../../Assests/teamwork.png"; // 👈 replace with your image path

const OurStory = () => {
  return (
    <section className="ourstory-section">
      <div className="ourstory-container">
        {/* Left Content */}
        <div className="ourstory-text fade-in-left">
          <h2 className="section-title">Our Story</h2>
          <p style={{color:"black"}}>
            At <strong>Chiselon Technologies Pvt. Ltd.</strong>, we believe in
            carving possibilities into realities. Founded with the mission to bridge
            the gap between talent and technology, Chiselon has emerged as a trusted
            partner for businesses across industries.
          </p>
          <p style={{color:"black"}}>
            From our beginnings as a recruitment consulting firm, we have grown into
            a multi-dimensional organization that delivers both talent acquisition
            excellence and cutting-edge technology solutions. Today, we work with
            global clients, delivering not just people and platforms, but partnerships
            that fuel long-term success.
          </p>
        </div>

        {/* Right Image */}
        <div className="ourstory-image fade-in-right">
          <img src={storyImg} alt="Our Story" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
