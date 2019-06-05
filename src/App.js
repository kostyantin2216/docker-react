import React from 'react';
import monkey from './monkey.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={monkey} className="App-logo" alt="logo" />
        <p>
          Hagit says... F U!!!!
        </p>
      </header>
    </div>
  );
}

export default App;
