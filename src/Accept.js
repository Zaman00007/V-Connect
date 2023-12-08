import React from 'react'

function Accept({onClose,name}) {
  return (
    
    <div className="DialogOverlay">
      <div className="DialogBox">
      <h2>Event Details</h2>
      <button className="button" onClick={onClose}>
              Accept
            </button>
      <button className="button" onClick={onClose}>
        Close
        </button>      
        </div>
    </div>
  )
}

export default Accept
