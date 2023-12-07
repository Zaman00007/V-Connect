import React from "react";
import "./Right.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Right() {
  return (
  
      <div className="Events">
        <div className="events-heading">
          <h2>Events</h2>
        </div>
        <div className="about-link">
          
          <Link to="/about">About</Link>
        </div>

        
      </div>
    
  );
}

export default Right;
