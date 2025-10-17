import React from 'react';

const StringOperationButton = ({ operation, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-sm"
    >
      {operation}
    </button>
  );
};

export default StringOperationButton;