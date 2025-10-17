import React from 'react';

const OperationButton = ({ operationName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm"
    >
      {operationName}
    </button>
  );
};

export default OperationButton;