import React from "react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import "./CoreValues.css";

const CoreValues = () => {
  return (
    <div className="values-card">
      {/* Left Section */}
      <div>
        <h3 className="section-titles" style={{textAlign:"center"}}>Our Core Values</h3>
        <ul className="values-list">
          <li>
            <FaCheckCircle className="icon check" />
            <div className="value-text">
              <strong>Integrity & Transparency</strong>
              <span className="desc">– Building trust through honesty and fairness.</span>
            </div>
          </li>
          <li>
            <FaCheckCircle className="icon check" />
            <div className="value-text">
              <strong>Innovation at Core</strong>
              <span className="desc">– Leveraging latest technologies.</span>
            </div>
          </li>
          <li>
            <FaCheckCircle className="icon check" />
            <div className="value-text">
              <strong>Excellence in Delivery</strong>
              <span className="desc">– Aiming for the highest quality.</span>
            </div>
          </li>
          <li>
            <FaCheckCircle className="icon check" />
            <div className="value-text">
              <strong>Client-Centricity</strong>
              <span className="desc">– Customizing solutions to fit business needs.</span>
            </div>
          </li>
          <li>
            <FaCheckCircle className="icon check" />
            <div className="value-text">
              <strong>Reliability</strong>
              <span className="desc">– Ensuring timeliness and consistency.</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <h3 className="section-titles">What Makes Us Unique</h3>
        <ul className="values-list">
          <li>
            <FaRocket className="icon rocket" />
            <div className="value-text">
              <strong>Dual Focus Model</strong>
              <span className="desc">– Combines staffing expertise with product development.</span>
            </div>
          </li>
          <li>
            <FaRocket className="icon rocket" />
            <div className="value-text">
              <strong>Proven Track Record</strong>
              <span className="desc">– 640+ candidates placed, digital solutions delivered.</span>
            </div>
          </li>
          <li>
            <FaRocket className="icon rocket" />
            <div className="value-text">
              <strong>Cross-Industry Experience</strong>
              <span className="desc">– IT, healthcare, education, consulting, and more.</span>
            </div>
          </li>
          <li>
            <FaRocket className="icon rocket" />
            <div className="value-text">
              <strong>Innovation DNA</strong>
              <span className="desc">– Harnessing AI/ML, Cloud, DevOps, Microservices.</span>
            </div>
          </li>
          <li>
            <FaRocket className="icon rocket" />
            <div className="value-text">
              <strong>Client-First Approach</strong>
              <span className="desc">– 90%+ client retention with measurable outcomes.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoreValues;
