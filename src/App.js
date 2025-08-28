import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

// ScrollToTop
import ScrollToTop from "./Components/ScrollToTop"; // ✅ import

const App = () => {
  return (
    <Router>
  <Navbar />
  <div className="main-content">
    <ScrollToTop /> {/* scroll only inside this container */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </div>
</Router>

  );
};

export default App;
