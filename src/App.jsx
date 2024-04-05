import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Buttonwrapper from './Components/Buttonwrapper';
import Screen from './Components/Screen'


const buttons = [
  ["%","CE","C","/"],
  [7,8,9,"/"],
  [4,5,6,"-"],
  [1,2,3,"X"],
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
    <div className='calculator-wrapper'>  
      <Screen value={calc.num ? calc.num : calc.res}></Screen>
      <Buttonwrapper>
        {/* <input type="button" value="C" onClick={()=> setCalc(0)}></input> */}
          {buttons.flat().map((button, i) => {
            return (
              <Button 
                key={i} 
                onClick={
                  button === "%" ? percentHandler :
                  button === "CE" ? clearEntryHandler :
                  button === "C" ? clearHandler: 
                  button === "/" || "+" || "-" || "X" ? operationHandler: 
                  button === "." ? dotHandler: 
                  button === "=" ? equalsHandler: 
                  numberHandler 
                }
                value={button}>
              </Button>)
        })}
      </Buttonwrapper>
  </div>
  );
}

export default App;
