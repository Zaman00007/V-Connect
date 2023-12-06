import React, { useState } from "react";
import "./Centre.css";

function Centre({ names }) {
  const [partner, setPartner] = useState("");

  const accept = (name) => {
    console.log("Invite accepted for " + name.event + " from " + name.id + "!");
  };

  return (
    <div className="Post">
      <div className="Invite">
        <h1>Create Invite</h1>
        <p>Send a new Invitation</p>
        <button type="submit" className="submit">
          Create
        </button>
      </div>
      {names.map((name, index) => (
        <React.Fragment key={index}>
          <div key={index} className="Invites">
            <h1>Invite {index+1}</h1>
            <h3>{name.id}</h3>
            <p>Invite for the {name.event}</p>
            <button
              type="submit"
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
