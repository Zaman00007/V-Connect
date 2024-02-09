import React from 'react'
import './Home.css'
import { IoIosArrowRoundDown } from 'react-icons/io'


function Home() {
  return (
    <div className='landing'>
      <h1 className='head'>Lets Connect!!!</h1>
      {/* <IoIosArrowRoundDown className="arrow" /> */}
      <div className='logo'>
        <img src='./v.png' alt='logo' />
      </div>
    </div>
  )
}

export default Home
