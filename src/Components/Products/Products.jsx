import React from "react";
import Overview from "./Overview/Overview";
import ProductsSection from "./ProductsSection/ProductsSection";
import CallToAction from "./CallToAction/CallToAction";

const Products = () => {
  return (
    <div>
      <Overview />
      <ProductsSection />
      <CallToAction />
    </div>
  );
};

export default Products;
