import React from 'react'
import "./Accept.css";

function Accept({onClose, onAccept}) {
  return (
    
    <div className="DialogOverlay">
      <div className="DialogBox">
      <h2>Event Details</h2>
            
        
        <div className="Button1">
        <button className="button" onClick={onAccept}>
              Accept
            </button>
      <button className="button" onClick={onClose}>
        Close
        </button>
        </div>  
        </div>
    </div>
  )
}

export default Accept
