import React, { useState } from "react";
import "./Centre.css";
import Dialog from "./Dialog";

function Centre({ names }) {
  const [partner, setPartner] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const accept = (name) => {
    console.log("Invite accepted for " + name.event + " from " + name.id + "!");
    setPartner(name);
  };

  const handleCreateClick = () => {
    // Open the dialogue box
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    // Close the dialogue box
    setIsDialogOpen(false);
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

      {/* Dialogue Box */}
      {isDialogOpen && (
        <div className="Dialog">
          
          <Dialog onClose={handleCloseDialog}/>
          
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
        </React.Fragment>
      ))}
    </div>
  );
}

export default Centre;
