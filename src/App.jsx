import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Screen from './Components/Screen'


const buttons = [
  ["%","CE","C","/"],
  [7,8,9,"/"],
  [4,5,6,"-"],
  [1,2,3,"x"],
  ["+/-",0,".","+"],
  ["="]
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
            {buttons.flat().map((button, i) => {
              return <td>
                <Button 
                key={i} 
                onClick={()=>console.log(button)}
                value={button}>
                </Button></td>
            })}
          </tr>
          </tbody>
        </table>
    </>
  );
}

export default App;
