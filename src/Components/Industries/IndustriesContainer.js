import React, { useState } from "react";

const IndustriesContainer = ({ industries = [] }) => {
  const [expanded, setExpanded] = React.useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="products-section">
      {industries.map((p, index) => (   // <-- use "industries", not "products"
        <div key={index} className="product-card">
          <div className="card-content">
            <h2>{p.title}</h2>
            <p>{p.challenge}</p>
          </div>

          <div className="btn-wrapper">
            <button className="view-btn" onClick={() => toggleExpand(index)}>
              {expanded[index] ? "View Less" : "View More"}
            </button>
          </div>

          {expanded[index] && (
            <div className="product-details active">
              <ul>
                {p.solution.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p><strong>Impact:</strong> {p.impact}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};


export default IndustriesContainer;
