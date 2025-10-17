import React, { useState } from 'react';
import StringManipulation from './components/StringManipulation';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-4">
          String Manipulation Project
        </h1>
        <StringManipulation />
      </div>
    </div>
  );
};

export default App;