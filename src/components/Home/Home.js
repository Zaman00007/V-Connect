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
  
  const handleSearch = async () =>{
    console.log("Button Clicked");
    const search = document.getElementById('search').value;
    axios.get(`http://localhost:8800/users/${search}`)
    .then(response => {
      console.log('User:', response.data);
    })
    .catch(error => {
      console.error('Error fetching user:', error);
    });
    
  }
  
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

    const handleAccept = async (e) => {
      try{
        const response = await axios.post('http://localhost:8800/events/accept', e);
        
        console.log("accept button clicked ", e._id);
        alert('Event Accepted');
      }catch(error){
        console.log(error);
      }
      try{
        const response = await axios.delete(`http://localhost:8800/events/delete/${e._id}`);
        
      }catch(error){
        console.log(error);
      } 
      
    };
    const handleDecline = async (e) => {
      try{
        const response = await axios.delete(`http://localhost:8800/events/delete/${e._id}`);
        console.log("decline button clicked ", e._id);
        alert('Event Declined');
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
          <input type="text" placeholder="Explore" id="search" className="search-bar" />
          <button id='btn-3' onClick={handleSearch}><span className="sidebar-text"><FontAwesomeIcon icon={faSearch} className="search-icon" /></span></button>
          
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
              
           
            <button className="close-button" onClick={()=> handleDecline(event)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <button className="accept-button" onClick={() => handleAccept(event)}>Accept</button>
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
