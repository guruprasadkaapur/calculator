import React, { useState } from "react";
import './caolculator.css'

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const Add = () => {
        setResult(Number(num1) + Number(num2));
    };

    const Sub = () => {
        setResult(Number(num1) - Number(num2));
    };

    const Product = () => {
        setResult(Number(num1) * Number(num2));
    };

    const Division = () => {
        setResult(Number(num1) / Number(num2));
    };
    const Reset = () => {
        setNum1('');
        setNum2('');
        setResult('');
      };

    return (
        <div className="calculator-container">
            <h1>Calculator</h1>
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
                className="calculator-input"
            />
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
                className="calculator-input"
            />
            <h1 className="calculator-result">Result: {result}</h1>
            <button onClick={Add} className="calculator-button">+</button>
            <button onClick={Sub} className="calculator-button">-</button>
            <button onClick={Product} className="calculator-button">*</button>
            <button onClick={Division} className="calculator-button">/</button>
            <button className="calculator-button" onClick={Reset}>Reset</button>
            <div className="calculator-footer">
        <p>Made with 💙</p>
      </div>
        </div>
        
    );
}

export default Calculator;
