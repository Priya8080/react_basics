import { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h3>Controlled Input</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Typed: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
