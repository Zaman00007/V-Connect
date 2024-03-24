import React from 'react';
import './Allevents.css'; // Import CSS file

const Allevents = () => {
  return (
    <div className="page-container">
     
      <nav className="navbar">
        <div className="navbar-logo">
            <img src="./vconnectlogo.png" alt="logo" style={{ height: '30px', width: 'auto' }}></img>
        </div>
        
      </nav>
      
      <div style={{ display: 'flex', flex: 1 }}>
      
        <aside className="sidebar">
          Sidebar
        </aside>
     
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
         
          <div className="header">
          
            <div className="square-box">Box 1</div>
            <div className="square-box">Box 2</div>
            <div className="square-box">Box 3</div>
            <div className="square-box">Box 4</div>
            <div className="square-box">Box 5</div>
            <div className="square-box">Box 6</div>
          </div>
         
          <div>Other Content Goes Here</div>
        </div>
      </div>
    </div>
  );
}

export default Allevents;
