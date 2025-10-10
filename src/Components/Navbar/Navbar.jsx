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

  const isActive = (path) => location.pathname === path;
  const isClientSection = () =>
    ["/clients", "/industries", "/caseStudies", "/trendsReading"].includes(
      location.pathname
    );

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="Chiselon Logo" />
        </div>

        {/* Navbar */}
        <nav className={`navBar ${isOpen ? "activeNavbar" : ""}`}>
          <ul className="navLists">
            <li>
              <Link to="/" className={`navLink ${isActive("/") ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`navLink ${isActive("/about") ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`navLink ${isActive("/services") ? "active" : ""}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`navLink ${isActive("/products") ? "active" : ""}`}
              >
                Products
              </Link>
            </li>

            {/* Dropdown */}
            <li className="dropdown">
              <div className="dropdown-toggle">
                <span
                  className={`dropdown-text ${
                    isClientSection() ? "active" : ""
                  }`}
                  onClick={() => navigate("/clients")}
                >
                  Clients
                </span>
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
                    <Link
                      to="/industries"
                      className={`dropdown-link ${
                        isActive("/industries") ? "active" : ""
                      }`}
                    >
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/caseStudies"
                      className={`dropdown-link ${
                        isActive("/caseStudies") ? "active" : ""
                      }`}
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/trendsReading"
                      className={`dropdown-link ${
                        isActive("/trendsReading") ? "active" : ""
                      }`}
                    >
                      Trends and Readings
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/careers"
                className={`navLink ${isActive("/careers") ? "active" : ""}`}
              >
                Careers
              </Link>
            </li>
              <li>
              <Link
                to="/ccms"
                className={`navLink ${isActive("/ccms") ? "active" : ""}`}
              >
                CCMS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`navLink ${isActive("/contact") ? "active" : ""}`}
              >
                Contact
              </Link>
            </li>
           
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
