import React, { useState } from 'react';

const DestructuringDemo = () => {
  const [result, setResult] = useState('');

  const demoArrayDestructuring = () => {
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    setResult(`First: ${first}, Second: ${second}, Rest: [${rest}]`);
  };

  const demoObjectDestructuring = () => {
    const person = { name: 'John', age: 25, city: 'Pretoria', country: 'SA' };
    const { name, age, ...others } = person;
    setResult(`Name: ${name}, Age: ${age}, Others: ${JSON.stringify(others)}`);
  };

  const demoSpreadOperator = () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combinedObj = { ...obj1, ...obj2 };
    setResult(`Array: [${combined}], Object: ${JSON.stringify(combinedObj)}`);
  };

  const demoObjectLiteralEnhancement = () => {
    const name = 'Alice';
    const age = 25;
    const person = { name, age, greet() { return `Hi, I'm ${this.name}`; } };
    setResult(`Object: ${JSON.stringify(person)}`);
  };

  const demoDefaultParams = () => {
    const greet = (name = 'Guest', greeting = 'Hello') => {
      return `${greeting}, ${name}!`;
    };
    setResult(`Default params: ${greet()}, Custom: ${greet('Alice', 'Hi')}`);
  };

  const demoTemplateLiterals = () => {
    const name = 'Bob';
    const course = 'IMY220';
    const message = `Student ${name} is enrolled in ${course}`;
    setResult(`Template literal: ${message}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">ES6 Features</h3>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={demoArrayDestructuring}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Array Destructuring
        </button>
        <button
          onClick={demoObjectDestructuring}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Object Destructuring
        </button>
        <button
          onClick={demoSpreadOperator}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Spread Operator
        </button>
        <button
          onClick={demoObjectLiteralEnhancement}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Object Literal
        </button>
        <button
          onClick={demoDefaultParams}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Default Params
        </button>
        <button
          onClick={demoTemplateLiterals}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Template Literals
        </button>
      </div>
      {result && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {result}
        </div>
      )}
    </div>
  );
};

export default DestructuringDemo;