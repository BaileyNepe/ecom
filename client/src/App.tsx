import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

const App = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('/api/health');

      const data = await response.json();
      setMessage(data.message);
      setError('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred';
      setMessage('');
      setError(message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Click me!</button>
        <p>{message}</p>
        <p>{error}</p>
      </header>
    </div>
  );
};

export default App;
