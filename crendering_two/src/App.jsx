import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }
     return(
      <div>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, praesentium.</h1>
         <div>
          {isLoggedIn && <LogoutBtn/>}
         </div>
      </div>
     )

  // return (
  //  <div>
  //   {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //  </div>
  // )
}

export default App
//tej
//thtd
//teh
//ehtdn
//tfh
//erhet
//thede

//ejnjn
//thdjk

