import React, { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>{count}</p>
    </div>
  );
}

export default App;
