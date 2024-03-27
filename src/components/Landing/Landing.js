import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8800/users/login', formData);
      console.log('Logged in successfully:', response.data);
      // Handle successful login, e.g., redirect to another page
      history.push('/events');
    } catch (error) {
      alert('Invalid username or password')
      console.error('Error logging in:', error);
      // Handle login error, e.g., display an error message to the user
    }
  };

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
        <input
          className="inputs"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        /><br/>
        <input
          className="inputs"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        /><br/>
        <button id="button3" onClick={handleSubmit}>Submit</button>
        <button id="button4">Forgot Password?</button>
        <button id="button5">Sign Up</button>
      </div>
    </div>
  );
}

export default Landing;
