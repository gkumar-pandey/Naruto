import React from "react";
import Narutologoimg from "../Assets/naruto-logo.png"
import './Navbar.css'
import knohalogo from "../Assets/hiddenleaf-symbol.png"
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="left-logo">
          <img src={knohalogo} alt="" />
        </div>
        
        <div className="menu-bar">
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
