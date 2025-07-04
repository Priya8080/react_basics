import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true); 
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>

      <form onSubmit={handleSubmit} className='form-contain'>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* {submitted && (
        <div className="output">
          <h3>Submitted Data:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;

