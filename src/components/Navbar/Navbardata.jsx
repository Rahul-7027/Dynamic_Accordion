import React, { useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarData = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="menu-container">
      {/* Hamburger Menu */}
      <div className="ham-menu" onClick={handleActive}>
        <GiHamburgerMenu />
      </div>

      {/* Navigation Menu */}
      <ul className={`menu ${active ? "menu-mobile" : "menu-web"}`}>
        <li className="menu-item">CodeWithRahulBhati</li>
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Contact Us</li>
      </ul>
    </nav>
  );
};

export default NavbarData;
