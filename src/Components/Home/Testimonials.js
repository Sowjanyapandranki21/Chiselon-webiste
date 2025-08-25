import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonial-card">
          <span className="quote-icon">“</span>
          <blockquote className="testimonial-text">
            Chiselon has been a game-changer for us in both hiring and technology
            solutions. Their ability to deliver on complex requirements, while
            ensuring transparency and speed, sets them apart.
          </blockquote>
          <p className="testimonial-author">— Client Testimonial</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
