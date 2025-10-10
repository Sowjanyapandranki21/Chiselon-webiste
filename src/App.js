import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import HomePage from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Services from "./Components/Services/Services";
import Products from "./Components/Products/Products";
import Industries from "./Components/Industries/Industries";
import Careers from "./Careers/Careers";
import CaseStudies from "./Cilents/CaseStudies";
import Blog from "./Components/Blog/Blog";
import Clients from "./Cilent/Client";
import Ccms from "./Components/CCMS/CCMS";

// GA
import { pageview } from "./GA";

const AppRoutes = () => {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/trendsReading" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/ccms" element={<Ccms />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <ScrollToTop />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
