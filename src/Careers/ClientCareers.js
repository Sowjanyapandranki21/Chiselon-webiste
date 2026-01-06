import React from "react";
import "./ClientCareers.css";
import { careersData } from "./careersData";

const ClientCareers = () => {

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
        <h6 className="section-title">Join our client in shaping the future of Talent and Technology</h6>
        <p>
          We enable organizations to build high-performing teams by providing access to
          expertly vetted professionals across technology, design, and quality assurance. Our client-centric
          approach ensures seamless talent integration that accelerates innovation, enhances operational efficiency,
          and supports sustainable, scalable business growth.
        </p>
      </section>

      {/* CLIENT VALUE SECTION */}
      <section className="client-value">
        <h6 className="section-title">How We Support Our Clients</h6>

        <div className="value-grid">
          <div className="value-card">
            <h4>Pre-Vetted Talent</h4>
            <p>
              Professionals screened for technical excellence, communication
              skills, and domain expertise.
            </p>
          </div>

          <div className="value-card">
            <h4>Flexible Engagement Models</h4>
            <p>
              Full-time, contract, and project-based hiring aligned to your
              business needs.
            </p>
          </div>

          <div className="value-card">
            <h4>Reliable & Faster Hiring</h4>
            <p>
              Streamlined recruitment processes ensuring speed without
              compromising on quality.
            </p>
          </div>
        </div>
      </section>

      <br />

      {/* JOB OPENINGS */}
      <section className="client-value">
        <h6 className="section-title">Current Open Positions</h6>

        <div className="job-grid">
          {careersData.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-header">
                <h4 style={{ color: "blue" }}>{job.title}</h4>
                <span className="job-type">{job.type}</span>
              </div>

              <p className="department">{job.department}</p>

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

      <br />

      {/* CTA */}
      <section className="career-cta">
        <h2>Build High-Performing Teams with Confidence</h2>
        <p>
          Share your hiring needs with us, and our experts will connect you with
          skilled professionals tailored to your business goals.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chiselontechnologies.com,vivekr@chiselontechnologies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Contact Hiring Team
        </a>
      </section>

    </div>
  );
};

export default ClientCareers;
