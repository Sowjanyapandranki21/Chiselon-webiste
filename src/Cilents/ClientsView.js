
import React from "react";

const ClientsView = () => {
  const clientsList = [
    "AppOrchid", "Reveal Data", "IntraEdge", "MSG Global", "BBSSL", "Ability Commerce",
    "American Consulting Services", "Exwin", "Valor PayTech", "Transtrac Technologies",
    "RP WebApps", "Exwyn"
  ];

  return (
    <div className="overview">
      <h2 style={{color:"#007bff",fontWeight:'bold'}}>Our Esteemed Clients</h2>
      <p>{clientsList.join(", ")}</p>
    </div>
  );
};

export default ClientsView;
