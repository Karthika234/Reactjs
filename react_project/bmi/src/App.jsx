import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data"></div>
        <h1>BMI Calculator</h1>
        <div className="input-container">
          <label htmlfor="height" >Height(cm):</label>
          <input type="text" id="height"></input>
        </div>
        <div className="input-container">
          <label htmlfor="weight" >weight (kg) :</label>
          <input type="text" id="weight"></input>
        </div>
        <button>Calculate bmi</button>
        <div className="result">
          <p>Your BMI is : 28.9</p>
          <p>Status :Overweight</p>
        </div>
        </div>
    
    </>
  );
}

export default App
