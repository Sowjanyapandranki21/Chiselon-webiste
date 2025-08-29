import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assests/logochiselon1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Chiselon Logo" />
        </div>

        {/* Navbar */}
        <nav className={`navBar ${isOpen ? "activeNavbar" : ""}`}>
          <ul className="navLists">
            <li><Link to="/" className="navLink">Home</Link></li>
            <li><Link to="/about" className="navLink">About</Link></li>
            <li><Link to="/services" className="navLink">Services</Link></li>
            <li><Link to="/products" className="navLink">Products</Link></li>

            {/* Dropdown */}
            <li className="dropdown">
              <div className="dropdown-toggle">
                {/* Click text to navigate */}
                <span
                  className="dropdown-text"
                  onClick={() => navigate("/clients")}
                >
                  Clients
                </span>

                {/* Click arrow to toggle dropdown */}
                <span
                  className="dropdown-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  {dropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                </span>
              </div>

              {dropdownOpen && (
                <ul className="dropdown-menu" id="industries-dropdown">
                  <li>
                    <Link to="/industries" className="dropdown-link">
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link to="/caseStudies" className="dropdown-link">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="dropdown-link">
                      Trends and Readings
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li><Link to="/careers" className="navLink">Careers</Link></li>
            <li><Link to="/contact" className="navLink">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobileMenu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
