import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Friends.css'; // Import CSS file
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Friends = () => {
  const history = useHistory();
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8800/users/suhaib123');
        console.log('Friend requests:', response.data.user.requests);
        setFriendRequests(response.data.user.requests);
      } catch (error) {
        console.error('Error fetching friend requests:', error);
      }
    };
    fetchFriendRequests();
    
  }, []); 

  const handleHome = () => {
     history.push('/home');
  }
  const handleEvents = () => {
     history.push('/all');
  }
  const handleFriends = () => {
     history.push('/friend');
  } 
  const handleInvite = () => {
    history.push('/events');
  }
  const handleDecline = async (e) => {
    try{
      const response = await axios.delete(`http://localhost:8800/users/6617141ee2673858e0aede71/requests/suhaib123`);
      
      
    }catch(error){
      console.log(error);
    }}

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
          <a href="/about" className="support-link">About US</a>
        </div>
      </nav>
      <div className="content-container">
        <aside className="sidebar">
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon-white" />
            <button id="btn-1" onClick={handleHome}><span className="sidebar-text" >Home</span></button>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faClock} className="sidebar-icon-white" />
            <button id='btn-2' onClick={handleEvents}><span className="sidebar-text">Events</span></button>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon-white" />
            <button id='btn-3' onClick={handleFriends}><span className="sidebar-text">Friends</span></button>
          </div>
          <div className="sidebar-icon">
            <FontAwesomeIcon icon={faPlus} className="sidebar-icon-white" />
            <button id='btn-4' onClick={handleInvite}><span className="sidebar-text" >Invite</span></button>
          </div>
        </aside>
        <div className="main-content">
        <div className="trending-events-bar">
              <span className="trending-events-text">Pending Connection Requests</span>
        </div>
        {friendRequests.map((request, index) => (
          <div key={index} className="header">
            
              <div  className="friend-request">
                <div className="profile-photo"></div>
                <div className="friend-details">
                  <span className="username">{request}</span>
                  <div className="action-buttons">
                    <button className="accept-button">Accept</button>
                    <button className="decline-button" onClick={handleDecline} >Decline</button>
                  </div>
                </div>
              </div>
              </div>
            ))}
            <div className="trending-events-bar">
              <span className="trending-events-text">My friends</span>
        </div>
          </div>
          
      </div>
    </div>
  );
}

export default Friends;
