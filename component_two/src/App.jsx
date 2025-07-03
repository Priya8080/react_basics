import UserCard from "./components/UserCard";

function App() {

  return (
    <div>
      <h1>Team Member</h1>

      <UserCard name="Priya Singh" role="Frontend Developer" />
      <UserCard name="Sakshi Singh" role="Backend Developer" />
      <UserCard name="Archana Raj" role="UI/UX Designer" />
    </div>
  );
}

export default App;
