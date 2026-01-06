import React from "react";
import Overview from "./Overview";

import CaseStudyList from "./CaseStudyList";
import WhyClientsStay from "./WhyClientsStay";
import ClosingCTA from "./ClosingCTA";
import "./CaseStudies.css";
import ClientsView from "./ClientsView";

const CaseStudies = () => {
  return (
    <div className="case-studies-section">
      <Overview />
      <ClientsView />
      <CaseStudyList />
      <WhyClientsStay />
      <ClosingCTA />
    </div>
  );
};

export default CaseStudies;
