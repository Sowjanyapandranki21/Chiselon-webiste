import React from "react";
import "./Careers.css";

const Careers = () => {
  const jobs = [
    { role: "Full Stack Developer (Java/React)", exp: "3–6 years" },
    { role: "Cloud & DevOps Engineer (AWS/Azure)", exp: "4–8 years" },
    { role: "Recruitment Specialist (IT/Non-IT)", exp: "2–5 years" },
    { role: "QA Automation Engineer (Selenium/Cypress)", exp: "3–6 years" },
  ];

  return (
    <div className="careers-page">
      {/* Hero */}
     <section className="overview">
        <h5 className="section-title">Join Us in Shaping the Future of Talent and Technology</h5>
        <p>
          At Chiselon Technologies Pvt. Ltd., we believe people are the foundation of innovation.
          Come grow your career with us.
        </p>
      </section>

      {/* Life at Chiselon - Timeline */}
      <section className="employee-value" style={{marginTop:"-4rem"}}>
        <h3 className="section-title">Life at Chiselon</h3>
        <div className="timeline" >
          {[
            { emoji: "🚀", title: "Global Exposure", desc: "Work with clients worldwide." },
            { emoji: "💡", title: "Cutting-Edge Tech", desc: "Hands-on AI, Cloud & DevOps." },
            { emoji: "🌱", title: "Career Growth", desc: "Learning, mentorship & leadership." },
            { emoji: "🤝", title: "Collaboration", desc: "Inclusive, innovative culture." },
            { emoji: "🎯", title: "Work-Life Balance", desc: "Flexible models to thrive." },
            { emoji: "🌟", title: "Team-Driven Innovation", desc: "Fostering creativity and collaboration." },
            { emoji: "🎉", title: "Celebrating Milestones", desc: "Recognizing achievements across teams." },
            { emoji: "🏆", title: "Recognition & Rewards", desc: "Incentives for excellence and impact." },
            { emoji: "🌍", title: "Diversity & Inclusion", desc: "Commitment to an equitable workplace." },
         { emoji: "💼", title: "Careers", desc: "Grow your career with us." }
          ].map((item, index) => (
            <div key={index} className="timeline-item mission-card">
              <span>{item.emoji}</span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Employee Value Proposition */}
      <section className="employee-value">
        <h3 className="section-title">Employee Value Proposition</h3>
        <p>
          At Chiselon, we don’t just offer jobs — we offer career journeys.
          Whether you are a fresher looking to start strong or an experienced
          professional seeking the next challenge, Chiselon is a place where you
          can learn, lead, and grow.
        </p>
      </section>

      {/* Current Openings */}
      <section className="employee-value">
        <h3 className="section-title">Current Openings</h3>
        <div className="table-wrapper">
          <table className="openings-table">
            <thead >
              <tr>
                <th style={{textAlign:"center"}}>Role</th>
                <th style={{textAlign:"center"}}>Experience</th>
                <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index}>
                  <td style={{textAlign:"center"}}>{job.role}</td>
                  <td style={{textAlign:"center"}}>{job.exp}</td>
                  <td style={{textAlign:"center"}}>
                    <button
                      className="btn primary"
                      onClick={() => {
                        const email = "udaypukkalla@gmail.com";
                        const subject = encodeURIComponent(
                          `${job.role} – Job Application`
                        );
                        const body = encodeURIComponent(
                          `Dear Chiselon Team,\n\nI am interested in applying for the ${job.role} position at Chiselon Technologies Pvt. Ltd. Please find my resume attached.\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`
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
        </div>
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
