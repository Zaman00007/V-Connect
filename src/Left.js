import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Left.css';

function Left({ name }) {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("Shahid");
  const [userData, setUserData] = useState({}); 

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/users/${username}`);
      setUserData(response.data);

      if (response.data.profilePic) {
        const profilePicResponse = await axios.get(`http://localhost:8800/users/profile-pic/${username}`, {
          responseType: 'arraybuffer',
        });

        const arrayBufferView = new Uint8Array(profilePicResponse.data);
        const blob = new Blob([arrayBufferView], { type: 'image/jpg' });
        const imageUrl = URL.createObjectURL(blob);

        setProfilePic(imageUrl);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [username]);

  return (
    <div className='Info'>
      <h2>Profile</h2>
      <div className="profilepic">
        {/* Use the state variable for the profile picture */}
        <img src={profilePic || '/2.jpg'} className="profilepic" alt="Profile" />
      </div>

      <p className='black'>{userData.username}</p>
      <p className='black'>{userData.age}</p>
      <p className='black'>{userData.gender}</p>
    </div>
  );
}

export default Left;
