import React from 'react';
import './App.css';
import Dialer from './components/Dialer';

function App() {
  return (
    <div className="App">
      <h2 style={{marginTop:'5px'}}>Call SuperHero</h2>
      <div style={{marginTop:'20px'}}>
        <Dialer/>
      </div>
    </div>
  );
}

export default App;

