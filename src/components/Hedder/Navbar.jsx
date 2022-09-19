import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FcConferenceCall } from "react-icons/fc";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="Navbar">
          <Link to="/" className="logo">
              <FcConferenceCall />
          </Link>

          <ul>
            <Link to="/">
              <li>
                <a href="#a">Home</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a href="#a">Contact</a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a href="#a">About Us</a>
              </li>
            </Link>
          </ul>
          <Link to="log-in">
            <a className="log-in" href="#a">Student log in</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
