import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const UserDialog = ({ user, onClose }) => {
  const handleSendFriendRequest = () => {
    // Add logic to send friend request here
    console.log('Friend request sent to:', user.username);
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
