import './App.css'
function App() {
  function handleClick(){
     alert("I am Clicked");
  }

  function handleMouseOver(){
    alert("moved the mouse!!");
  }

  function handleInputChange(e){
    console.log("Value till now: ", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    //I am writing custom behaviour down
    alert("Form submit kru?");
  }


  return (
   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}/>
      <button type='submit'>Submit</button>
    </form>
    <p onMouseOver={handleMouseOver}>
      I am a Para
    </p>
    <button onClick={handleClick}>
      Click Me
    </button>
   </div>
  )
} 

export default App
