import React from 'react';
import './Left.css'

function Left() {
  return (
    <div className='Info'>
      <h2>Profile</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Left;

/*
import React, { useState } from "react";
import "./Centre.css";
import Dialog from "./Dialog";
import Accept from "./Accept";

function Left({ name}) {
  const [partner, setPartner] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAcceptOpen, setIsAcceptOpen] = useState(false);

  const accept = (name) => {
    console.log("Invite accepted for " + name.event + " from " + name.id + "!");
    setPartner(name);
    setIsAcceptOpen(true);
  };

  const handleCreateClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsAcceptOpen(false);
    
  };

  return (
    <div className="Post">
      <div className="Invite">
        <h1>Create Invite</h1>
        <p>Send a new Invitation</p>
        <button type="button" className="submit" onClick={handleCreateClick}>
          Create
        </button>
      </div>

      {isDialogOpen && (
        <div className="Dialog">
          <Dialog onClose={handleCloseDialog} />
        </div>
      )}

      {names.map((name, index) => (
        <React.Fragment key={index}>
          <div key={index} className="Invites">
            <h1>Invite {index + 1}</h1>
            <h3>{name.id}</h3>
            <p>Invite for the {name.event}</p>
            <button
              type="button"
              className="submit"
              onClick={() => accept(name)}
            >
              Accept
            </button>
          </div>
          {isAcceptOpen && (
            <div className="Dialog">
              <Accept onClose={handleCloseDialog} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Centre;

