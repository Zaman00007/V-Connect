import { useHistory } from 'react-router-dom';

import React from 'react';
import './Landing.css';

const Landing = () => {

  const history = useHistory();
  const handleSubmit = () =>{
    history.push('/events');
  }

  return (
    <div className="landing-container">
      <div className="left-section">
        <img src="./vconnectlogo.png" alt="Logo" />
      </div>
      
        
        
      

<div className="right-section">
        <div className="connect-text">
          <span className="first-color">Let's</span>
          <span className="second-color">connect</span>
        </div>


        <div className="overlay-text">
          <span className="third-color">Let's</span>
          <span className="fourth-color">connect</span>
        </div>

      </div>

      

      <div className="buttons-section">
          <button id="button1">Username</button>
          <button id="button2">Password</button>
          <button id="button3" onClick={handleSubmit}>Submit</button>
          <button id="button4">Forgot Password?</button>
          <button id="button5">Sign Up</button>
        </div>






    </div>

    
  );
}

export default Landing;
