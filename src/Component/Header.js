import React from "react";
import Logo from "../img/Logo.svg";
import NavIcon from "../img/navIcon.png";

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-div">
          <img src={Logo} alt="Airavat Tour and Travel" />
        </div>

        <div className="nav-icon">
          <img className="navIcon" src={NavIcon} alt="" />
        </div>
        <div className="nav-menu">
          <ul className="nav-menu-list">
            <li className="nav-menu-list-item">
              <a className="menu-item" href="#">
                Home
              </a>
            </li>
            <li className="nav-menu-list-item">
              <a className="menu-item" href="#">
                About
              </a>
            </li>
            <li className="nav-menu-list-item">
              
              <a className="menu-item" href="#">
                Packages
              </a>
            </li>
            <li className="nav-menu-list-item">
              
              <a className="menu-item" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-menu-list-item">
              
              <a href="tel:+918000354629" className="call-us">
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
