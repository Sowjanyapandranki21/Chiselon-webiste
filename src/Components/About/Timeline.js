import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const milestones = [
    { year: "2016", text: "Founded to revolutionize staffing." },
    { year: "2017-2018", text: "Expanded into IT & Non-IT recruitment." },
    { year: "2019", text: "Developed first product for the client Electus, an Edu-Tech project " },
    { year: "2020", text: "Partnered with global clients." },
    { year: "2021", text: "Completed 500+ candidate placements." },
    { year: "2022", text: "Expanded into Cloud, DevOps & AI services." },
    { year: "2023-24", text: "Introduced AestheTech (AI healthcare solution)." },
    { year: "Today", text: "Delivering talent + technology at scale." },
  ];

  return (
    <section className="timeline-section">
      <h3 className="section-title">Our Journey</h3>
      <div className="timeline-horizontal">
        {milestones.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* <div className="timeline-dot" /> */}
            <div className="timeline-date">{item.year}</div>
            <div className="timeline-content">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
