import './App.css';
import UserCard from "./components/UserCard"; 

function App() {
  return (
    <div className='container'>
      <UserCard name="Priya Singh" desc="Overthinker"/>
      <UserCard name="Sakshi Singh" desc="Mental"/>
      <UserCard name="Archana Raj" desc="Psychopath"/>
    </div>
  );
}

export default App;

