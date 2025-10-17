import React from 'react';

const TemplateLiteralsDemo = () => {
  const name = 'Bob';
  const course = 'IMY220';
  const message = `Student ${name} is enrolled in ${course}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Template Literals Demo</h3>
      <p>{message}</p>
    </div>
  );
};

export default TemplateLiteralsDemo;