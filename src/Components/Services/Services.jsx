import React from "react";
import ServicesOverview from "./ServicesOverview/ServicesOverview";
import TalentStaffing from "./TalentStaffing/TalentStaffing";
import TechnologyServices from "./TechnologyServices/TechnologyServices";

import WhyChiselon from "./WhyChiselon/WhyChiselon";
import CallToAction from "./CallToAction/CallToAction";
import ProductsAndIndustries from "./ProductsAndIndustries";


const Services = () => {
  return (
   <div className="homepage">
      <ServicesOverview />
      <TechnologyServices />
      <TalentStaffing />
      
      <ProductsAndIndustries />
  
      {/* <WhyChiselon /> */}
      <CallToAction />
   </div>
  );
};

export default Services;
