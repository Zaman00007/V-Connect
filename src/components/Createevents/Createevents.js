import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 
import './Createevents.css';
import Nav from '../Nav/Nav';

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
      history.push('/all');
      
    } catch (error) {
      alert('Error creating event')
      console.error('Error creating event:', error);
      
    }
  };
  const history = useHistory();
  

  return (
    <div className="page-container">
      <Nav />
      <div className="content-container">
        
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