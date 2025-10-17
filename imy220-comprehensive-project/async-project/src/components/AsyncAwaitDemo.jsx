import React, { useState } from 'react';
import { Globe } from 'lucide-react';

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

const AsyncAwaitDemo = () => {
  const [promiseResult, setPromiseResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchSimulatedData = async () => {
    setIsLoading(true);
    setPromiseResult('');
    try {
      const result1 = await waitForTime(1000);
      setPromiseResult(result1);
      const result2 = await waitForTime(1000);
      setPromiseResult(`${result1}, then ${result2}`);
    } catch (error) {
      setPromiseResult(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Globe className="mr-2" /> Async/Await Demo
      </h3>
      <button
        onClick={fetchSimulatedData}
        disabled={isLoading}
        className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 disabled:bg-gray-400"
      >
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      {promiseResult && (
        <div className="bg-gray-100 p-3 rounded mt-4">
          {promiseResult}
        </div>
      )}
    </div>
  );
};

export default AsyncAwaitDemo;