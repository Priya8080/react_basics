import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = "Priya";
  const age = 21;

  return (
    <div className="app">
      <h1>Hello, {name} </h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default App;




