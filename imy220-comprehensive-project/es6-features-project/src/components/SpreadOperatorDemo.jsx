import React, { useState } from 'react';

const SpreadOperatorDemo = () => {
  const [result, setResult] = useState('');

  const demoSpreadOperator = () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combinedArray = [...arr1, ...arr2];

    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combinedObject = { ...obj1, ...obj2 };

    setResult(`Combined Array: [${combinedArray}], Combined Object: ${JSON.stringify(combinedObject)}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Spread Operator Demo</h3>
      <button
        onClick={demoSpreadOperator}
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
      >
        Demonstrate Spread Operator
      </button>
      {result && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {result}
        </div>
      )}
    </div>
  );
};

export default SpreadOperatorDemo;