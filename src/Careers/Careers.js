import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="overlay">
          <h1>Join Us in Shaping the Future of Talent and Technology</h1>
          <p>
            At Chiselon Technologies Pvt. Ltd., we believe people are the foundation of innovation.
            Come grow your career with us.
          </p>
        </div>
      </section>

      {/* Why Work With Chiselon - Timeline Layout */}
      <section className="careers-timeline">
        <h2>Why Work With Chiselon?</h2>
        <div className="timeline">
          <div className="timeline-item">🚀 Global Exposure <p>Work with clients worldwide.</p></div>
          <div className="timeline-item">💡 Cutting-Edge Tech <p>Hands-on AI, Cloud & DevOps.</p></div>
          <div className="timeline-item">🌱 Career Growth <p>Learning, mentorship & leadership.</p></div>
          <div className="timeline-item">🤝 Collaboration <p>Inclusive, innovative culture.</p></div>
          <div className="timeline-item">🎯 Work-Life Balance <p>Flexible models to thrive.</p></div>
        </div>
      </section>

      {/* EVP - Alternating Layout */}
      {/* Employee Value Proposition */}
      <section className="employee-value">
        <h2>Employee Value Proposition</h2>
        <p>
          At Chiselon, we don’t just offer jobs — we offer career journeys.
          Whether you are a fresher looking to start strong or an experienced
          professional seeking the next challenge, Chiselon is a place where you
          can learn, lead, and grow.
        </p>
      </section>

      {/* Life at Chiselon */}
      <section className="life-at-chiselon">
        <h2>Life at Chiselon</h2>
        <ul>
          <li>🌟 Team-driven innovation culture</li>
          <li>🎉 Celebrating milestones & achievements</li>
          <li>🏆 Recognition and rewards for excellence</li>
          <li>🌍 Commitment to diversity and inclusion</li>
        </ul>
      </section>


      {/* Current Openings */}
      <section className="careers-openings">
        <h2>Current Openings</h2>
        <table className="openings-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Stack Developer (Java/React)</td>
              <td>3–6 years</td>
            </tr>
            <tr>
              <td>Cloud & DevOps Engineer (AWS/Azure)</td>
              <td>4–8 years</td>
            </tr>
            <tr>
              <td>Recruitment Specialist (IT/Non-IT)</td>
              <td>2–5 years</td>
            </tr>
            <tr>
              <td>QA Automation Engineer (Selenium/Cypress)</td>
              <td>3–6 years</td>
            </tr>
          </tbody>
        </table>

        <p className="apply-now">
          📩 Apply via <a href="mailto:careers@chiselon.com">careers@chiselon.com</a>
          {" "}
          <button
  className="btn primary"
  onClick={() => {
    const email = "udaypukkalla@gmail.com";
    const subject = encodeURIComponent("Job Application");
    const body = encodeURIComponent(
      `Dear Chiselon Team,

I am interested in applying for a position at Chiselon Technologies Pvt. Ltd. Please find my resume attached.

Looking forward to your response.

Best regards,
[Your Name]`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }}
>
  Apply
</button>


        </p>
      </section>


      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Shape Your Future with Us 🚀</h2>
        <div className="cta-buttons">
          <button className="btn-light">Explore Opportunities</button>
          <button className="btn-dark">Submit Your Resume</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
