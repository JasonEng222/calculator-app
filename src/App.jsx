import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [equation, setEquation] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {number} 
      {/* <button onClick={()=> setCount(count equation+number)}>=</button> */}
      <div className='App-Row'>
        <button onClick={()=> setNumber(1)}>1</button>
        <button onClick={()=> setNumber(2)}>2</button>
        <button onClick={()=> setNumber(3)}>3</button>
      </div>
      <div className='App-Row'>
        <button onClick={()=> setNumber(4)}>4</button>
        <button onClick={()=> setNumber(5)}>5</button>
        <button onClick={()=> setNumber(6)}>6</button>
      </div>
      <div className='App-Row'>
        <button onClick={()=> setNumber(7)}>7</button>
        <button onClick={()=> setNumber(8)}>8</button>
        <button onClick={()=> setNumber(9)}>9</button>
      </div>
      </header>
    </div>
  );
}

export default App;
