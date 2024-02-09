import React from 'react'
import './Home.css'
import { IoIosArrowRoundDown } from 'react-icons/io'


function Home() {
  return (
    <div className='landing'>
      
      {/* <IoIosArrowRoundDown className="arrow" /> */}
      <div className='logo'>
        <img src='./v.png' alt='logo' />
      </div>
      
      <div className='login'>
      <h1 className='head'>Lets Connect!!!</h1>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Home
