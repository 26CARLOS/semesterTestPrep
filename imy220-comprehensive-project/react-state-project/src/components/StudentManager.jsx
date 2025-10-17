import React, { useState } from 'react';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';
import { Student } from '../models/Student';

const StudentManager = () => {
  const [students, setStudents] = useState([
    new Student('Alice Johnson', 20, 'S001', ['IMY220', 'COS216']),
    new Student('Bob Smith', 21, 'S002', ['IMY220', 'COS226']),
    new Student('Carol White', 19, 'S003', ['IMY220', 'INF214'])
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const removeStudent = (id) => {
    setStudents(students.filter(s => s.studentId !== id));
  };

  const sortByAge = () => {
    const sorted = [...students].sort((a, b) => a.age - b.age);
    setStudents(sorted);
  };

  const filterByAge = () => {
    const filtered = students.filter(s => s.age >= 20);
    setStudents(filtered);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Student Management</h3>
      
      <StudentForm onAddStudent={addStudent} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map(student => (
          <StudentCard
            key={student.studentId}
            student={student}
            onRemove={removeStudent}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <button
          onClick={sortByAge}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sort by Age
        </button>
        <button
          onClick={filterByAge}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Filter Age ≥20
        </button>
      </div>
    </div>
  );
};

export default StudentManager;