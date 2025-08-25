import React from "react";
import ServicesOverview from "./ServicesOverview/ServicesOverview";
import TalentStaffing from "./TalentStaffing/TalentStaffing";
import TechnologyServices from "./TechnologyServices/TechnologyServices";

import WhyChiselon from "./WhyChiselon/WhyChiselon";
import CallToAction from "./CallToAction/CallToAction";
import ProductsAndIndustries from "./ProductsAndIndustries";


const Services = () => {
  return (
    <main>
      <ServicesOverview />
      <TalentStaffing />
      <TechnologyServices />
      <ProductsAndIndustries />
  
      <WhyChiselon />
      <CallToAction />
    </main>
  );
};

export default Services;
