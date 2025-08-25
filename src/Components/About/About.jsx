import React from "react";
import "./About.css";

import OurStory from "./OurStory";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";


import Timeline from "./Timeline";
import Closing from "./Closing";
import CoreValues from "./CoreValues";

const About = () => {
  return (
    <div className="about-page">
      <OurStory />
      <WhoWeAre />
      <MissionVision />
      <CoreValues/>

      <Timeline />
      <Closing />
    </div>
  );
};

export default About;
