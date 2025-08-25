import React from "react";
import "./Industries.css";

const ExpertiseList = ({ list = [] }) => {
  return (
    <div className="expertise-section">
      <h2 className="expertise-title">Why Our Industry Expertise Matters</h2>
      <ul className="expertise-list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseList;
