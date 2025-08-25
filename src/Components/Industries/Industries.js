import React from "react";
import Overview from "./Overview";
import IndustriesContainer from "./IndustriesContainer";
import ExpertiseList from "./ExpertiseList";
import { industriesData, expertiseList } from "./data";
import "./Industries.css";

const Industries = () => {
  return (
    <div className="industries-section">
      <Overview />
      <IndustriesContainer industries={industriesData} />
      <ExpertiseList list={expertiseList} />
    </div>
  );
};

export default Industries;
