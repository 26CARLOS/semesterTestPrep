import React, { useState } from 'react';

const CounterClosure = () => {
  const [count, setCount] = useState(0);

  const createCounter = () => {
    let counter = count;
    return {
      increment: () => ++counter,
      decrement: () => --counter,
      getValue: () => counter
    };
  };

  const myCounter = createCounter();

  const handleIncrement = () => {
    setCount(myCounter.increment());
  };

  const handleDecrement = () => {
    setCount(myCounter.decrement());
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h4 className="font-bold text-lg">Counter using Closure</h4>
      <p className="text-gray-600">Current Count: {count}</p>
      <button onClick={handleIncrement} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
        Increment
      </button>
      <button onClick={handleDecrement} className="bg-red-500 text-white px-3 py-1 rounded">
        Decrement
      </button>
    </div>
  );
};

export default CounterClosure;