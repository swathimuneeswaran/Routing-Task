import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="nav1">
        <ul className="nav justify-content-center my-navbar">
          <li className="nav-item">
            <Link to="/" className="links">
              All
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
            <Link to="/fullstack" className="links">
              Fullstack
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
            <Link to="/datascience" className="links">
              Data Science
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
            <Link to="/cybersecurity" className="links">
              Cyber Security
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
            <Link to="/career" className="links">
              Career
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
