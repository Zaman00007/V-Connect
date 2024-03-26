import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Aboutus.css'; // Import CSS file

const Aboutus = () => {
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
            <h2 className="team-heading">Our Team<br/></h2>
            <div className="team-members">
              <div className="team-member">
                <img src="./2.jpg" alt="Team Member 1" className="team-member-photo" />
                <p className="team-member-description">Suhaib Ahmad</p>
              </div>
              <div className="team-member">
                <img src="./mansi.png" alt="Team Member 2" className="team-member-photo" />
                <p className="team-member-description">Mansi Bhagoria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
