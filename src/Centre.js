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
          <h1>Invite 1</h1>
          <h3>Sam Desai</h3>
          <p>Invite for the Dance-Event</p>
          <button type="submit" className='submit'>Accept</button>
      </div>
      <div className='Invites'>
          <h1>Invite 2</h1>
          <h3>Rema Singh</h3>
          <p>Invite for the Basketball Tournament</p>
          <button type="submit" className='submit'>Accept</button>
      </div>
      <div className='Invites'>
          <h1>Invite3</h1>
          <h3>Mansi Bhagoria</h3>
          <p>Invite for the hackathon</p>
          <button type="submit" className='submit'>Accept</button>
      </div>

    </div>
    
  )
}

export default Centre
