import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
//first -> side-effect function
//second -> clean-up function
//third -> comma separated dependency list

//variation :1 -> runs on every render
  //useEffect(() => {
  //alert("I will run on each render")
  //})

//variation: 2 -> that runs only first render
//useEffect(() => {
  //alert("I will run on only first render")
//},[])

//variation: 3 
//useEffect(() => {
  //alert("I will run every time when count is updated")
//},[count])

//variation: 4 -> multiple dependencies
useEffect(() => {
   alert("I will run every time when count/total is updated")
},[count,total])
  function handleClick(){
   setCount(count+1);
  }

  //variation: 5 -> iss baar let's add a cleanup function
  //useEffect(() => {
    //alert("Count is updated")
    //return () => {
     // alert("count is unmounted form UI");
    //}
  //},[count])
   //function handleClick(){
    //setCount(count+1);
  //}

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      Count is: {count}

       <button onClick={handleClick}>
        Update Total
      </button>
      <br/>
      Total is: {total}
    </div>
  )
}

export default App
