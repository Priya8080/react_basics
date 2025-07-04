import { useEffect, useState } from 'react';
import quotes from './quotes.json';  

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex].text;
    setQuote(selectedQuote);
  }, []);

  return (
    <div>
      <h1>Offline Quote Machine</h1>
      <p>{quote ? quote : "Loading..."}</p>
    </div>
  );
}

export default App;

