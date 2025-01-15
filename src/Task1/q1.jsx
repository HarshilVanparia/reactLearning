// Create a react pure functional component that will take 2 numbers and print addition, subtraction, multiplication, and division.

import { useState } from "react";

function Caclulator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  
  const add = Number(num1) + Number(num2);
  const subtract = Number(num1) - Number(num2);
  const multiply = Number(num1) * Number(num2);
  const divide = num2 !== "0" ? Number(num1) / Number(num2) : "Cannot divide by 0";

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
        value={num1}
      />
      <br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
        value={num2}
      />
      <br />
      
      <div>
        <h3>Results:</h3>
        <p>{num1} + {num2} = {add}</p>
        <p>{num1} - {num2} = {subtract}</p>
        <p>{num1} × {num2} = {multiply}</p>
        <p>{num1} ÷ {num2} = {divide}</p>
      </div>

      <div className="space"></div>
    </div>
  );
}

export default Caclulator;
