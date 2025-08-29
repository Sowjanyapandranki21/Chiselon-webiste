
import React from "react";

const ClientsView = () => {
  const clientsList = [
    "AppOrchid", "Reveal Data", "IntraEdge", "MSG Global", "BBSSL", "Ability Commerce",
    "American Consulting Services", "Exwin", "Valor PayTech", "Transtrac Technologies",
    "RP WebApps", "Exwyn"
  ];

  return (
    <div className="overview" style={{ marginTop: "-50px" }}>
      <h2 className="section-title">Our Esteemed Clients</h2>
      <p>{clientsList.join(", ")}</p>
    </div>
  );
};

export default ClientsView;
