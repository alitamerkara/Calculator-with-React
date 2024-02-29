import "./App.css";
import React, { useState } from "react";

function App() {
  const [screen, setScreen] = useState("");
  const [back, setBack] = useState("");
  const operators = [".", "/", "+", "-", "*"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const whole = [operators, numbers];
  const handleClick = (e) => {
    let value = e.target.value;
    if (screen == "" && operators.includes(value)) {
      return;
    }
    if (operators.includes(screen.slice(-1)) && operators.includes(value)) {
      return;
    }
    if (operators.includes(value) && value != ".") {
      setBack(back + screen + value);
      setScreen("");
    } else {
      setScreen(screen + value);
    }
  };
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{back}</div>
          <div className="current-operand">{screen ? screen : 0}</div>
        </div>
        <button
          className="span-two"
          onClick={() => {
            setScreen("");
            setBack("");
          }}
        >
          AC
        </button>
        <button
          onClick={() => {
            setScreen(screen.slice(0, -1));
          }}
        >
          DEL
        </button>
        {operators.map((item, i) => {
          return (
            <button onClick={handleClick} key={i} value={item}>
              {item}
            </button>
          );
        })}
        {numbers.map((item, i) => {
          return (
            <button onClick={handleClick} key={i} value={item}>
              {item}
            </button>
          );
        })}
        <button
          className="span-two"
          onClick={() => {
            const result = eval(back + screen);
            setScreen(result.toString());
            setBack("");
          }}
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
