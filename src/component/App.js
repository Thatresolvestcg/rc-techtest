import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <span className='totalBox'>
      <div className="App">
        <h1>Where are you going?</h1>
        <p className='pickUp'>Pickup Location</p>
        <input type='text' placeholder='City, Airport, Region, District' className='searchBox'>
        </input>
        <button type='button' className='searchButton'>Search</button>
      </div>
    </span>
  );
}

export default App;
