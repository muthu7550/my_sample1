import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
//  let count=0;
  const [count, setCount] = useState(1);
  const increment = () => {
   setCount(count + 1);
  };
  const decrement = () => {
    if(count > 0)
      setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>react increament app</h1>
      <h2>count: {count}</h2>
      < div className='spc'>
      <div><button  onClick={increment}  className="btn btn-success" >+</button></div>
      <div><button  onClick={decrement} className="btn btn-danger">-</button></div>
      <div><button onClick={reset} className="btn btn-warning">reset</button></div>

      </div>
    </div>
  );
}

export default App;
