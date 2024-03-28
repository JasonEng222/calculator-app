import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';

const lineOne = [
  [1],
  [2],
  [3],
  ["x"]
]
const lineTwo = [
  [4],
  [5],
  [6],
  ["-"]
]
const lineThree = [
  [7],
  [8],
  [9],
  ["/"]
]
const lineFour = [
  [0],
  ["."],
  ["+"]
]
    
function App() {
  const [total, setTotal] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  const [equation, setEquation] = React.useState(0);
    return (
    <>
      <input type="text"></input>{number}
      <table className='calculator'>
        <tbody>
          <tr>
            <td><input type="button" value="C" onClick={()=> setNumber(0)}></input></td>
          </tr>
          <tr>
            {lineOne.map(value => {
              return (<td> <input onClick={()=> setNumber(value)} type="button" value={value}></input></td>)
            })}
          </tr>
          <tr>
          {lineTwo.map(value => {
              return (<td> <input onClick={()=> setNumber(value)} type="button" value={value}></input></td>)
            })}
          </tr>
          <tr>{lineThree.map(value => {
              return (<td> <input onClick={()=> setNumber(value)} type="button" value={value}></input></td>)
            })}
          </tr>
          <tr>
          {lineFour.map(value => {
              return (<td> <input onClick={()=> setNumber(value)} type="button" value={value}></input></td>)
            })}
            
          </tr>
          </tbody>
        </table>
    </>
  );
}

export default App;
