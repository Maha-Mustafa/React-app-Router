import React from "react";
import logo from "./images/logo.png";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className="header">
      <div id="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>React</span>
        </Link>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/home">Docs</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </div>
      <div id="input-cont">
        <i className="fas fa-search icon"></i>
        <input type="search" placeholder="Search" />
      </div>
      <div className="navbar right-item">
        <ul>
          <li>
            <Link to="/"><span className="small">v</span>16.13.1</Link>
          </li>
          <li>
            <Link to="/"><i className="fas fa-language"></i>Languages</Link>
          </li>
          <li>
            <Link>GitHub <span className="small">
              <i className="fas fa-external-link-alt"></i>
            </span></Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
