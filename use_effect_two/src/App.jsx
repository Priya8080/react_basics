import { useEffect, useState } from 'react';
import quotes from './quotes.json';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");

  // Function to get new random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex].text;
    setQuote(selectedQuote);
  };

  // Show a quote on first load
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className='container'>
      <h1>Quote Machine</h1>
      <p>{quote}</p>

      {/* Button to get new quote */}
      <button onClick={getRandomQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
