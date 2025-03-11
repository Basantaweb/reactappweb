import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const calculateFunction = (func) => {
    try {
      let result;
      switch (func) {
        case "sin":
          result = Math.sin(eval(input));
          break;
        case "cos":
          result = Math.cos(eval(input));
          break;
        case "tan":
          result = Math.tan(eval(input));
          break;
        case "log":
          result = Math.log(eval(input));
          break;
        case "sqrt":
          result = Math.sqrt(eval(input));
          break;
        default:
          result = "Error";
      }
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <div className="card bg-secondary p-4 shadow-lg" style={{ width: "300px" }}>
        <input
          type="text"
          value={input}
          readOnly
          className="form-control text-end mb-3"
        />
        <div className="row g-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <div className="col-3" key={btn}>
              <button
                className="btn btn-dark w-100"
                onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
              >
                {btn}
              </button>
            </div>
          ))}
          <div className="col-6">
            <button className="btn btn-danger w-100" onClick={clearInput}>
              C
            </button>
          </div>
          {["sin", "cos", "tan", "log", "sqrt"].map((func) => (
            <div className="col-4" key={func}>
              <button
                className="btn btn-primary w-100"
                onClick={() => calculateFunction(func)}
              >
                {func}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
