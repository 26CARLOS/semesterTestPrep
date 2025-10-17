import React, { useState } from 'react';

const waitForTime = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject('Time cannot be negative');
    }
    setTimeout(() => {
      resolve(`Waited for ${ms}ms`);
    }, ms);
  });
};

const PromiseChainDemo = () => {
  const [promiseResult, setPromiseResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chainedPromises = () => {
    setIsLoading(true);
    setPromiseResult('');
    waitForTime(500)
      .then(result => {
        setPromiseResult(result);
        return waitForTime(500);
      })
      .then(result => {
        setPromiseResult(prev => `${prev} -> ${result}`);
        return waitForTime(500);
      })
      .then(result => {
        setPromiseResult(prev => `${prev} -> ${result}`);
      })
      .catch(error => {
        setPromiseResult(`Error: ${error}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Promise Chain Demo</h3>
      <button
        onClick={chainedPromises}
        disabled={isLoading}
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 disabled:bg-gray-400"
      >
        {isLoading ? 'Loading...' : 'Start Promise Chain'}
      </button>
      {promiseResult && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {promiseResult}
        </div>
      )}
    </div>
  );
};

export default PromiseChainDemo;