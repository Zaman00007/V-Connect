import React from 'react'
import './Centre.css'

function Centre() {
  return (
    <div className="Post">
      <div className='Invite'>
        <h1>Create Invite</h1>
        <p>Send a new Invitation</p>
        <button type="submit" className='submit'>Create</button>
      </div>
      <div className='Invites'>
          <h1>Invites</h1>
      </div>

    </div>
    
  )
}

export default Centre
