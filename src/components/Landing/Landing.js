

import React from 'react';
import './Landing.css';

const Landing = () => {
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
          <button>Username</button>
          <button>Password</button>
          <button>Submit</button>
          <button>Forgot Password?</button>
          <button>Sign Up</button>
        </div>






    </div>

    
  );
}

export default Landing;
