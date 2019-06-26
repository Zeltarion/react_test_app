import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const {children} = props;
  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
      {children}
    </div>
  );
}

export default App;
