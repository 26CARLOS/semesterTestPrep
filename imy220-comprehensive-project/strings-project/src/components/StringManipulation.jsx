import React, { useState } from 'react';
import StringOperationButton from './StringOperationButton';

const StringManipulation = () => {
  const [text, setText] = useState('Hello World from IMY220');
  const [removeWord, setRemoveWord] = useState('from');
  const [stringResult, setStringResult] = useState('');

  const stringOperations = {
    reverse: (str) => str.split('').reverse().join(''),
    removeWord: (str, word) => str.split(' ').filter(w => w !== word).join(' '),
    uppercase: (str) => str.toUpperCase(),
    lowercase: (str) => str.toLowerCase(),
    wordCount: (str) => str.split(' ').length,
    charCount: (str) => str.length,
    removeVowels: (str) => str.replace(/[aeiou]/gi, ''),
    capitalize: (str) => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    template: (str) => `The text is: "${str}"`,
    extract: (str) => {
      const [first, ...rest] = str.split(' ');
      return { first, rest: rest.join(' ') };
    },
    palindrome: (str) => {
      const clean = str.toLowerCase().replace(/[^a-z]/g, '');
      return clean === clean.split('').reverse().join('');
    },
    trimSpaces: (str) => str.trim(),
    replaceAll: (str) => str.replace(/o/gi, '0'),
    substring: (str) => str.substring(0, 5)
  };

  const handleStringOp = (opName) => {
    try {
      let result;
      if (opName === 'removeWord') {
        result = stringOperations[opName](text, removeWord);
      } else {
        result = stringOperations[opName](text);
      }
      setStringResult(`${opName}: ${JSON.stringify(result)}`);
    } catch (e) {
      setStringResult(`Error: ${e.message}`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">String Manipulation</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter text"
      />
      <input
        type="text"
        value={removeWord}
        onChange={(e) => setRemoveWord(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Word to remove"
      />
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Object.keys(stringOperations).map(op => (
          <StringOperationButton
            key={op}
            operation={op}
            onClick={() => handleStringOp(op)}
          />
        ))}
      </div>
      {stringResult && (
        <div className="bg-gray-100 p-3 rounded">
          <strong>Result:</strong> {stringResult}
        </div>
      )}
    </div>
  );
};

export default StringManipulation;