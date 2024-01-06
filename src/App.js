import React, { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleDecrement}>- Минус</button>
        <button className="plus" onClick={handleIncrement}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
