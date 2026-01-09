import React from "react";
import "./ChiselonOpenings.css";
import { ChiselonOpeningsData } from "./ChiselonOpeningsData";

const ChiselonOpenings = () => {

  // ✅ APPLY FUNCTION (ADDED)
  const handleApply = (job) => {
    const to = "support@chiselontechnologies.com,vivekr@chiselontechnologies.com";

    const subject = encodeURIComponent(`Application for ${job.title}`);

    const body = encodeURIComponent(
      `Hello,

I am interested in applying for the position of ${job.title}.

Job Details:
Department: ${job.department}
Location: ${job.location}
Experience: ${job.experience}

Please find my resume attached.

Regards,`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };


  return (
    <div className="careers-page">

      {/* HERO SECTION */}
      <section className="overview">
        <h6 className="section-title">
          Be part of the team shaping the future of talent and technology.
        </h6>
        <p style={{ maxWidth: "900px", margin: "0 auto 60px", lineHeight: "1.5", fontSize: "18px" }}>
          At our core, we are a people-driven company—focused on empowering individuals to learn, grow, and lead.
          By joining our team, you become part of a collaborative environment where innovation, creativity,
          and continuous improvement are valued. We work on exciting challenges that help businesses evolve while
          providing you the space to build meaningful careers.
          <br /><br />
          Here, your skills contribute to real impact. We invest in professional development, celebrate talent,
          and encourage ownership, enabling every team member to thrive and succeed.
        </p>
      </section>


      {/* JOB OPENINGS */}
      <section className="client-value">
        <h6 className="section-title">Current Open Positions</h6>

        <div className="job-grid">
          {ChiselonOpeningsData.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-header">
                <h3 style={{ color: "blue", fontSize: "14px" }}>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>

              {/* <p className="department">{job.department}</p> */}

              <div className="job-info">
                <span>📍 {job.location}</span>
                <span>🕒 {job.experience}</span>
              </div>

              <p className="description">{job.description}</p>

              <div className="skills">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>

              {/* ✅ APPLY NOW FIXED */}
              <button
                className="apply-btn"
                onClick={() => handleApply(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <br /><br />  <br /><br />
      {/* CLIENT VALUE SECTION */}
      <section className="client-value">
        <h6 className="section-title">Growth, Opportunity & Support</h6>

        <div className="value-grid">

          <div className="value-card">
            <h4>Meaningful Work</h4>
            <p>
              Be part of projects that create real business impact and drive technological innovation.
            </p>
          </div>

          <div className="value-card">
            <h4>Career Growth</h4>
            <p>
              Access learning, mentorship, and development pathways that accelerate your professional journey.
            </p>
          </div>

          <div className="value-card">
            <h4>Collaborative Culture</h4>
            <p>
              Work in a supportive environment where teamwork, respect, and shared success matter.
            </p>
          </div>

          <div className="value-card">
            <h4>Ownership & Responsibility</h4>
            <p>
              Take ownership early, contribute to strategic decisions, and grow as a leader.
            </p>
          </div>

          <div className="value-card">
            <h4>Innovation Mindset</h4>
            <p>
              Experiment, explore, and solve challenges with creativity in a future-focused workplace.
            </p>
          </div>

          <div className="value-card">
            <h4>Competitive Benefits</h4>
            <p>
              Enjoy compensation, recognition, and well-being programs designed for long-term success.
            </p>
          </div>

        </div>
      </section>
      <br />
      <br />
      {/* CTA */}
      <section className="career-cta">
        <h2>Build Your Career With Us</h2>
        <p>
          Share your profile with our hiring team and we’ll connect you to roles that match your skills and aspirations.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@chiselontechnologies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Share Your Resume
        </a>
      </section>


    </div>
  );
};

export default ChiselonOpenings;
