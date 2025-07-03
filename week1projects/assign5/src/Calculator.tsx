import { useState } from "react";
import type { ChangeEvent } from "react";

function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string | number>("");

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
  };

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
  };

  const calculate = (operator: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={handleChange1}
        placeholder="First number"
      />

      <input
        type="number"
        value={num2}
        onChange={handleChange2}
        placeholder="Second number"
        style={{ marginLeft: "10px" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")} style={{ marginLeft: "10px" }}>
          −
        </button>
        <button onClick={() => calculate("*")} style={{ marginLeft: "10px" }}>
          ×
        </button>
        <button onClick={() => calculate("/")} style={{ marginLeft: "10px" }}>
          ÷
        </button>
      </div>

      <p style={{ marginTop: "20px" }}>
        <strong>Result:</strong> {result}
      </p>
    </div>
  );
}

export default Calculator;
