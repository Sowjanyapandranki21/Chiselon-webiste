import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="overlay">
          <h1>Join Us in Shaping the Future of Talent and Technology</h1>
          <p style={{color:"black"}}>
            At Chiselon Technologies Pvt. Ltd., we believe people are the foundation of innovation.
            Come grow your career with us.
          </p>
        </div>
      </section>

      {/* Why Work With Chiselon - Timeline Layout */}
      <section className="careers-timeline">
        <h3 className="section-title">Life at Chiselon</h3>
        <div className="timeline">
          <div className="timeline-item">
            🚀 <strong>Global Exposure</strong>
            <p>Work with clients worldwide.</p>
          </div>
          <div className="timeline-item">
            💡 <strong>Cutting-Edge Tech</strong>
            <p>Hands-on AI, Cloud & DevOps.</p>
          </div>
          <div className="timeline-item">
            🌱 <strong>Career Growth</strong>
            <p>Learning, mentorship & leadership.</p>
          </div>
          <div className="timeline-item">
            🤝 <strong>Collaboration</strong>
            <p>Inclusive, innovative culture.</p>
          </div>
          <div className="timeline-item">
            🎯 <strong>Work-Life Balance</strong>
            <p>Flexible models to thrive.</p>
          </div>
          <div className="timeline-item">
            🌟 <strong>Team-Driven Innovation</strong>
            <p>Fostering creativity and collaboration.</p>
          </div>
          <div className="timeline-item">
            🎉 <strong>Celebrating Milestones</strong>
            <p>Recognizing achievements across teams.</p>
          </div>
          <div className="timeline-item">
            🏆 <strong>Recognition & Rewards</strong>
            <p>Incentives for excellence and impact.</p>
          </div>
          <div className="timeline-item">
            🌍 <strong>Diversity & Inclusion</strong>
            <p>Commitment to an equitable workplace.</p>
          </div>
        </div>
      </section>


      {/* EVP - Alternating Layout */}
      {/* Employee Value Proposition */}
      <section className="employee-value">
        <h2 className="section-title">Employee Value Proposition</h2>
        <p style={{color:"black"}}>
          At Chiselon, we don’t just offer jobs — we offer career journeys.
          Whether you are a fresher looking to start strong or an experienced
          professional seeking the next challenge, Chiselon is a place where you
          can learn, lead, and grow.
        </p>
      </section>




      {/* Current Openings */}
   <section className="careers-openings">
  <h2 className="section-title">Current Openings</h2>
  <table className="openings-table">
    <thead>
      <tr>
        <th>Role</th>
        <th>Experience</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody style={{color:"black"}}>
      {[
        { role: "Full Stack Developer (Java/React)", exp: "3–6 years" },
        { role: "Cloud & DevOps Engineer (AWS/Azure)", exp: "4–8 years" },
        { role: "Recruitment Specialist (IT/Non-IT)", exp: "2–5 years" },
        { role: "QA Automation Engineer (Selenium/Cypress)", exp: "3–6 years" },
      ].map((job, index) => (
        <tr key={index}>
          <td>{job.role}</td>
          <td>{job.exp}</td>
          <td>
            <button
              className="btn primary"
              onClick={() => {
                const email = "udaypukkalla@gmail.com"; // recipient
                const subject = encodeURIComponent(`${job.role} – Job Application`);
                const body = encodeURIComponent(
                  `Dear Chiselon Team,

I am interested in applying for the ${job.role} position at Chiselon Technologies Pvt. Ltd. Please find my resume attached.

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
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</section>



      {/* CTA Banner */}
      <section className="cta-banner">
        <h2 style={{color:"black"}}>Shape Your Future with Us 🚀</h2>
        <div className="cta-buttons">
          <button className="btn-light">Explore Opportunities</button>
          <button className="btn-dark">Submit Your Resume</button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
