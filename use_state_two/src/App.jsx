import './App.css'
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className='container'>
       <input
        type="text"
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
    </div>
  )
}

export default App
