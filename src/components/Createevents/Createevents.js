import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Createevents.css'; // Import CSS file

const Createevents = () => {
  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} className="menu-icon-white" />
        </div>
        <div className="navbar-logo">
          <img src="./vconnectlogo.png" alt="logo" style={{ height: '30px', width: 'auto' }}></img>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Explore" className="search-bar" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" />
          <FontAwesomeIcon icon={faCog} className="navbar-icon" />
          <a href="#" className="support-link">Support</a>
        </div>
      </nav>
      <div className="content-container">
        <aside className="sidebar">
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon-white" />
            <span className="sidebar-text">Home</span>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faClock} className="sidebar-icon-white" />
            <span className="sidebar-text">Events</span>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon-white" />
            <span className="sidebar-text">Friends</span>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faPlus} className="sidebar-icon-white" />
            <span className="sidebar-text">Invite</span>
          </div>
        </aside>
        <div className="main-content">
          <div className="header">
            <form className="event-form">
              <h2>Create an Event</h2>
              <div className="input-group">
                <label>Event Name:</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Event Date:</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Event Time:</label>
                <input type="time" />
              </div>
              <div className="input-group">
                <label>Event Venue:</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Max People:</label>
                <input type="number" />
              </div>
              <div className="input-group">
                <label>Description:</label>
                <textarea rows="4" maxLength="100"></textarea>
              </div>
              <button type="submit">Create Event</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createevents;
