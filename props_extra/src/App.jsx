import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button incrementCount={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>
    </div>
  )
}

export default App
