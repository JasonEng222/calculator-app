import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Screen from './Components/Screen'

const lineOne = [
  1,
  2,
  3,
  "x"
]
const lineTwo = [
  4,
  5,
  6,
  "-"
]
const lineThree = [
  7,
  8,
  9,
  "/"
]
const lineFour = [
  0,
  ".",
  "+"
]
    
const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })
    return (
    <>
      <Screen value={calc.num ? calc.num : calc.res}></Screen>
      <table className='calculator'>
        <tbody>
          <tr>
            <td><input type="button" value="C" onClick={()=> setCalc(0)}></input></td>
          </tr>
          <tr>
            {lineOne.map((button, i) => {
              return <td>
                <Button 
                key={i} 
                onClick={()=>console.log(button)}
                value={button}
                ></Button></td>
            })}
          </tr>
          </tbody>
        </table>
    </>
  );
}

export default App;
