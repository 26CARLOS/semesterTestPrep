import React, { useState } from 'react';
import CounterClosure from './CounterClosure';
import MultiplierClosure from './MultiplierClosure';
import RecursionDemo from './RecursionDemo';

const ClosuresDemo = () => {
  const [closureResult, setClosureResult] = useState('');

  const demonstrateClosure = () => {
    const myCounter = createCounter();
    myCounter.increment();
    myCounter.increment();
    myCounter.increment();
    setClosureResult(`Closure counter value: ${myCounter.getValue()}`);
  };

  const createCounter = () => {
    let count = 0;
    return {
      increment: () => ++count,
      decrement: () => --count,
      getValue: () => count
    };
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Closures Demo</h3>
      <button
        onClick={demonstrateClosure}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Demonstrate Closure
      </button>
      {closureResult && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {closureResult}
        </div>
      )}
      <CounterClosure />
      <MultiplierClosure />
      <RecursionDemo />
    </div>
  );
};

export default ClosuresDemo;