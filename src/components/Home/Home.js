import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClock, faUserFriends, faPlus, faBars, faSearch, faBell, faUserCircle, faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.css'; 
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Home = () => {
  const history = useHistory();
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
  const [events, setEvents] = useState([]);
  const [trend, setTrend] = useState([]);
  
  
  useEffect(() => {
  const getEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8800/events/accept');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }}
    getEvents();
  },[events]);


  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8800/events/');
        setTrend(response.data);
        
      } catch (error) {
        console.error('Error fetching events:', error);
      }}
      getEvents();
    }, [trend]);

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
        <div className="header">
            <div className="trending-events-bar">
              <span className="trending-events-text">Trending Events Going On</span>
            </div>
          </div>
          {trend.slice(-2).map((event, index) => (
          <div key={index} className="header">
            <div className="square-box">
              <div className="box-content">
                <span className="event-name">{event.eventName}</span>
              </div>
            </div>
          </div>
))}

          
        </div>
        <div className="main-content">
        <div className="trending-events-bar">
              <span className="trending-events-text">My Events</span>
        </div>
        {events.map((event, index) => (
        <div key={index} className="header">
      
        
        <div className="square-box">
          <div className="box-content">
            <span className="event-name">{event.eventName}</span>
            
          </div>
        </div>
        <div className="square-box">
          <div className="box">
            <span className="event-name">{event.eventDate}</span>
            <span className="event-name">{event.eventTime}</span>
            <span className="event-name">{event.eventVenue}</span>
          </div>
        </div>
        </div>
      ))}
      </div>
      </div>
    </div>
     
  );
}

export default Home;
