import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation
import "./navbar.css";
import logo from "../../Assests/logochiselon1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation(); // ✅ track route changes

  // ✅ whenever route changes, close dropdown + mobile menu
  React.useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
  <div className="logo">
  <img src={logo} alt="Chiselon Logo" className="logo-img" />
  <div className="logo-text-wrapper">
    <h2 className="logo-text">Chiselon Technologies</h2>
    <p className="logo-subtitle">Crave to Carve</p>
  </div>
</div>
        {/* Navbar */}
        <nav className={`navBar ${isOpen ? "activeNavbar" : ""}`}>
          <ul className="navLists">
            <li>
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="navLink">
                Products
              </Link>
            </li>

            {/* Industries Dropdown */}
            <li className="navLink dropdown">
              <div
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Industries {dropdownOpen ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>

              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/industries" className="dropdown-link">
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link to="/caseStudies" className="dropdown-link">
                      Case Studies / Clients
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="dropdown-link">
                      Careers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
 <li>
              <Link to="/blog" className="navLink">
              Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navLink">
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
