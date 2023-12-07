import React from "react";
import "./Right.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";

function Right() {
  return (
    <Router>
      <div className="Events">
        <div className="events-heading">
          <h2>Events</h2>
        </div>
        <div className="about-link">
          {/* <Link to="/about">
            <h2>About Us</h2>
          </Link> */}
          <Link to="/About">About</Link>
        </div>

        
      </div>
    </Router>
  );
}

export default Right;
