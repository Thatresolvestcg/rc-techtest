import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Where are you going?</h1>
      <p>Pickup Location</p>
      <input type='text' placeholder='City, Airport, Region, District' className='searchBox'>
      </input>
      <button type='button'>Search</button>
    </div>
  );
}

export default App;
