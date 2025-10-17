import React from 'react';
import ClosuresDemo from './components/ClosuresDemo';
import CounterClosure from './components/CounterClosure';
import MultiplierClosure from './components/MultiplierClosure';
import RecursionDemo from './components/RecursionDemo';

const App = () => {
  return (
    <div className="functions-project">
      <h1 className="text-3xl font-bold text-center">Functions Project</h1>
      <ClosuresDemo />
      <CounterClosure />
      <MultiplierClosure />
      <RecursionDemo />
    </div>
  );
};

export default App;