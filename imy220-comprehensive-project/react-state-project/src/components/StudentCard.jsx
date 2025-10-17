import React from 'react';

const StudentCard = ({ student, onRemove }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow">
      <h4 className="font-bold text-lg">{student.name}</h4>
      <p className="text-gray-600">ID: {student.studentId}</p>
      <p className="text-gray-600">Age: {student.age}</p>
      <p className="text-gray-600">Courses: {student.courses.join(', ')}</p>
      <button
        onClick={() => onRemove(student.studentId)}
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default StudentCard;