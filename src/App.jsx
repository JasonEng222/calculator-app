import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Buttonwrapper from './Components/Buttonwrapper';
import Screen from './Components/Screen'


const buttons = [
  ["%","CE","C","/"],
  [7,8,9,"-"],
  [4,5,6,"X"],
  [1,2,3,"+"],
  ["+/-",0,".","="],
  
]
    
const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    calculated: 0
  })
  
  const numberHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    setCalc({
      ...calc,
      num: calc.num === 0 && value ==="0"
      ? "0" 
      : calc.num % 1 === 0 
      ? Number(calc.num+value)
      :calc.num + value,
      calculated: !calc.sign ? 0 : calc.calculated
    })
  }

  const percentHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0
    let calculated = calc.calculated ? parseFloat(calc.calculated) : 0

    setCalc({
      num: (num /= Math.pow(100, 1)),
      calculated: (calculated /= Math.pow(100, 1)),
      sign: ""
    })

  }

  const invertHandler = () => {
    setCalc({
      ...calc,
        num: calc.num ? calc.num * -1 : 0,
        calculated: calc.calculated ? calc.calculated * -1: 0,
        sign:""
    })
  }

  const clearEntryHandler = () => {
    setCalc({
      ...calc,
      sign:"",
      num:0
    })
  }

  const clearHandler = () => {
    setCalc({
      ...calc,
      sign:"",
      num:0,
      calculated:0
    })
  }

  const operationHandler = (e) => {
      e.preventDefault()
      console.log(calc)
      const value = e.target.innerHTML
      setCalc({
        ...calc,
        sign: value,
        calculated: calc.num && !calc.calculated ? calc.num: calc.calculated,
        num: 0 
        
      })
      
      console.log(calc)
  }
  
  const dotHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    })
  }

  const equalsHandler = () => {
    console.log(calc)
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => 
      sign === "+" ? a + b 
      :sign === "/" ? a / b
      :sign === "-" ? a - b
      : a * b
      
      setCalc({
        ...calc, 
        calculated: calc.num === "0" && calc.sign === "/" ?
        "Can't divide by 0" 
        :math(Number(calc.calculated), Number(calc.num), calc.sign),
        sign: "",
        num: 0
      })
      console.log(calc)
    }
  }

    return (
    <div className='calculator-wrapper'>  
      <Screen value={calc.num ? calc.num : calc.calculated}></Screen>
      <Buttonwrapper>
        {buttons.flat().map((button, i) => {
          return (
            <Button 
              key={i} 
              onClick={
                button === "%" ? percentHandler 
                :button === "CE" ? clearEntryHandler 
                :button === "C" ? clearHandler
                :button === "+/-" ? invertHandler
                :button === "/" || button === "+" || button === "-" || button === "X" ? operationHandler
                :button === "." ? dotHandler
                :button === "=" ? equalsHandler
                :numberHandler 
              }
              value={button}>
            </Button>)
        })}
      </Buttonwrapper>
  </div>
  );
}

export default App;
