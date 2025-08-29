import React from "react";


const WhyClientsStay = () => {
  const points = [
    {
      icon: "📈",
      title: "Proven Track Record",
      description: "640+ successful placements and multiple product implementations."
    },
    {
      icon: "🏥",
      title: "Domain Expertise",
      description: "Deep understanding of IT, healthcare, education, and consulting industries."
    },
    {
      icon: "🤝",
      title: "Client-Centric Model",
      description: "Transparent processes and tailored solutions."
    },
    {
      icon: "💎",
      title: "Long-Term Value",
      description: "Over 90% client retention — proof of trust and consistent delivery."
    }
  ];

  return (
    <section className="why-clients-stay">
      <div className="container">
        <h2 className="section-title">Why Clients Stay With Us</h2>
        <p className="overview-text">
          Empowering businesses with 640+ successful placements, 
           industry expertise, and solutions built on trust and long-term value.
        </p>
        <div className="cards-container">
          {points.map((point, index) => (
            <div key={index} className="benefit-card">
              <div className="icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsStay;
