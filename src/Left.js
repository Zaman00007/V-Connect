import React from 'react';
import './Left.css'

function Left() {
  return (
    <div className='Info'>
      <h2>User Information</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Left;
