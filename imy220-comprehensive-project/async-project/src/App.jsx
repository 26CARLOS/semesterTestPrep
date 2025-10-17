import React from 'react';
import PromisesDemo from './components/PromisesDemo';
import AsyncAwaitDemo from './components/AsyncAwaitDemo';
import PromiseChainDemo from './components/PromiseChainDemo';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="text-3xl font-bold text-center mb-4">Async Project</h1>
      <PromisesDemo />
      <AsyncAwaitDemo />
      <PromiseChainDemo />
    </div>
  );
};

export default App;