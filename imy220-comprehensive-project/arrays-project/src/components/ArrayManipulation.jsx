import React, { useState } from 'react';
import OperationButton from './OperationButton';

const ArrayManipulation = () => {
  const [arrayInput, setArrayInput] = useState('[1, 2, 3, 4, 5]');
  const [arrayResult, setArrayResult] = useState('');

  const operations = {
    map: (arr) => arr.map(n => n * 2),
    filter: (arr) => arr.filter(n => n > 2),
    reduce: (arr) => arr.reduce((acc, n) => acc + n, 0),
    every: (arr) => arr.every(n => n > 0),
    some: (arr) => arr.some(n => n > 4),
    slice: (arr) => arr.slice(1, 4),
    splice: (arr) => {
      const copy = [...arr];
      copy.splice(2, 1, 99);
      return copy;
    },
    concat: (arr) => arr.concat([6, 7, 8]),
    reverse: (arr) => [...arr].reverse(),
    sort: (arr) => [...arr].sort((a, b) => b - a),
    forEach: (arr) => {
      let sum = 0;
      arr.forEach(n => sum += n);
      return sum;
    },
    find: (arr) => arr.find(n => n > 3),
    findIndex: (arr) => arr.findIndex(n => n > 3),
    includes: (arr) => arr.includes(3),
    flat: (arr) => [[1, 2], [3, 4]].flat()
  };

  const handleOperation = (opName) => {
    try {
      const arr = JSON.parse(arrayInput);
      if (!Array.isArray(arr)) throw new Error('Not an array');
      const result = operations[opName](arr);
      setArrayResult(`${opName}: ${JSON.stringify(result)}`);
    } catch (e) {
      setArrayResult(`Error: ${e.message}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Array Manipulation</h3>
      <input
        type="text"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter array: [1, 2, 3]"
      />
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Object.keys(operations).map(op => (
          <OperationButton key={op} operation={op} onClick={handleOperation} />
        ))}
      </div>
      {arrayResult && (
        <div className="bg-gray-100 p-3 rounded">
          <strong>Result:</strong> {arrayResult}
        </div>
      )}
    </div>
  );
};

export default ArrayManipulation;