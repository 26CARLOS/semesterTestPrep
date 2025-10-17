import React, { useState } from 'react';

const RecursionDemo = () => {
  const [result, setResult] = useState('');

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const demonstrateRecursion = () => {
    const fact = factorial(5);
    const fib = fibonacci(7);
    setResult(`Factorial of 5: ${fact}, Fibonacci(7): ${fib}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Recursion Demonstration</h3>
      <button
        onClick={demonstrateRecursion}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Demonstrate Recursion
      </button>
      {result && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {result}
        </div>
      )}
    </div>
  );
};

export default RecursionDemo;