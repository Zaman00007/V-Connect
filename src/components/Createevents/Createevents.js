import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Createevents.css'; // Import CSS file

const Createevents = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventVenue: '',
    maxPeople: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/events/', formData);
      console.log('Event created:', response.data);
      // You can handle success response here, like showing a success message to the user
    } catch (error) {
      console.error('Error creating event:', error);
      // You can handle error here, like showing an error message to the user
    }
  };

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
            <form className="event-form" onSubmit={handleSubmit}>
              <h2>Create an Event</h2>
              <div className="input-group">
                <label>Event Name:</label>
                <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Event Date:</label>
                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Event Time:</label>
                <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Event Venue:</label>
                <input type="text" name="eventVenue" value={formData.eventVenue} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Max People:</label>
                <input type="number" name="maxPeople" value={formData.maxPeople} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Description:</label>
                <textarea rows="4" maxLength="100" name="description" value={formData.description} onChange={handleChange}></textarea>
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
