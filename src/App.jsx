import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`container ${isDark ? "dark" : ""}`}>
      <div className="card">
        <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1>Counter App</h1>
        <p className="count">{count}</p>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;