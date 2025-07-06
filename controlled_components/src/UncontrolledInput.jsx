import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const showValue = () => {
    alert("You typed: " + inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showValue}>Show Value</button>
    </div>
  );
}

export default UncontrolledInput;

