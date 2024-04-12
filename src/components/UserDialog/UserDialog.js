import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './UserDialog.css';

const UserDialog = ({ user, onClose }) => {
  const handleSendFriendRequest = () => {
    const userId = user._id; 
    const newRequest = user.username;
    console.log('Friend request sent to:', user.username);
    axios.put(`http://localhost:8800/users/${userId}`, { newRequest })
  .then(response => {
    console.log('Requests field updated successfully:', response.data);
    
  })
  .catch(error => {
    console.error('Error updating requests field:', error);
    
  });
  };

  return (
    <div className="dialog-box">
      <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2>User Details</h2>
      <p>ID: {user._id}</p>
      <p>Username: {user.username}</p>
      
      <button className="send-friend-request-button" onClick={handleSendFriendRequest}>
        Send Friend Request
      </button>
    </div>
  );
};

export default UserDialog;
