import React, { useState } from 'react';

const MultiplierClosure = () => {
  const [factor, setFactor] = useState(1);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const createMultiplier = (factor) => {
    return (num) => num * factor;
  };

  const handleMultiply = () => {
    const multiply = createMultiplier(factor);
    const multiplicationResult = multiply(number);
    setResult(`Result of ${number} multiplied by ${factor} is: ${multiplicationResult}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Multiplier Closure Demo</h3>
      <input
        type="number"
        value={factor}
        onChange={(e) => setFactor(Number(e.target.value))}
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter multiplier factor"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter number to multiply"
      />
      <button
        onClick={handleMultiply}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Multiply
      </button>
      {result && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default MultiplierClosure;