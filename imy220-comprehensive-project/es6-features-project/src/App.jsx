import React from 'react';
import DestructuringDemo from './components/DestructuringDemo';
import SpreadOperatorDemo from './components/SpreadOperatorDemo';
import TemplateLiteralsDemo from './components/TemplateLiteralsDemo';

const App = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">ES6 Features Demonstration</h1>
      <DestructuringDemo />
      <SpreadOperatorDemo />
      <TemplateLiteralsDemo />
    </div>
  );
};

export default App;