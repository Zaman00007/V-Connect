import React, { useState } from 'react';
import './Edit.css';

const Edit = ({ handleClose }) => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        
        <div className="modal-content">
          <h2>Edit Profile</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter new username"
              />
            </div>
            <div className="form-group">
              <label className='label' htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={bio}
                onChange={handleBioChange}
                placeholder="Enter your bio"
              />
            </div>
            <div className="form-group">
              <label className='label' htmlFor="password">New Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              <label className='label' htmlFor="confirmPassword">Confirm New Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm new password"
              />
            </div>
            
            <button type="submit">Save Changes</button>
            {/* <button type="close" onClick={handleClose}>Close</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
