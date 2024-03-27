import React from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'
// import Cookies from 'js-cookie';
import { IoIosArrowRoundDown } from 'react-icons/io'


function Home() {

  
  const history = useHistory();

  const login = async () => {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
    try {
      const response = await fetch('http://localhost:8800/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        
        
        console.log('Login successful', data);

        
        // Cookies.set('token', data.token, { expires: 7 });

    
        history.push('/feed');
      } else {
        console.error('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };
  return (
    <div className='landing'>
      
      {/* <IoIosArrowRoundDown className="arrow" /> */}
      <div className='page'>
        <img src='./v.png' alt='logo' />
      </div>
      
      <div className='login'>
      <h1 className='head'>Lets Connect!!!</h1>
        <form>
          <input type='text' placeholder='Username' id="username" className='username' />
          <input type='password' placeholder='Password' id="password" className='password' />
          <button type='submit' className='home_button' onClick={login}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Home
