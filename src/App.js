import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <body>
          <p>Hello</p>
        </body>
      </div>
      <div className="Container">
      <footer className="App-footer">
        <button className="btn btn-primary btn-xl"><a href="Contactus.html">Contact Us</a></button>
      </footer>
      </div>  
    </div>
  );
}

export default App;
