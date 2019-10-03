import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dark  mb-4"
      style={{ backgroundColor: "#FF0000" }}
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/roster">
              Roster
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/schedule">
              Schedule
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
