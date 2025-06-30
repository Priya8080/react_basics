import './App.css';
import UserCard from "./components/UserCard"; 
import star from "./assets/star.jpg"
import girl from "./assets/girl.jpg"
import gurl from "./assets/girl2.jpg"

function App() {
  return (
    <div className='container'>
      <UserCard name="Priya Singh" desc="Overthinker" image={star}/>
      <UserCard name="Sakshi Singh" desc="Mental" image={girl}/>
      <UserCard name="Archana Raj" desc="Psychopath" image={gurl}/>
    </div>
  );
}

export default App;

