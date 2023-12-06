import React from "react";
import "./Dialog.css";

function Dialog({ onClose }) {
  return (
    <div className="DialogOverlay">
      <div className="DialogBox">
        <h2>Dialogue Box Content</h2>
        
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;
