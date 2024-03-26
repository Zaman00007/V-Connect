import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Allevents.css'; // Import CSS file

const Allevents = () => {
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
            <div className="square-box">
              <div className="box-content">
                <span className="event-name">Events 1</span>
                <button className="close-button">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button className="accept-button">Accept</button>
              </div>
            </div>
            <div className="square-box">
              <div className="box-content">
                <span className="event-name">Events 2</span>
                <button className="close-button">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button className="accept-button">Accept</button>
              </div>
            </div>
            <div className="square-box">
              <div className="box-content">
                <span className="event-name">Events 3</span>
                <button className="close-button">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
                <button className="accept-button">Accept</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Allevents;
