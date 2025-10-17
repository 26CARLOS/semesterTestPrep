import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newId, setNewId] = useState('');
  const [newCourses, setNewCourses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newAge || !newId || !newCourses) return;

    const student = {
      name: newName,
      age: parseInt(newAge),
      studentId: newId,
      courses: newCourses.split(',').map(c => c.trim())
    };

    onAddStudent(student);
    setNewName('');
    setNewAge('');
    setNewId('');
    setNewCourses('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        placeholder="Age"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
        placeholder="Student ID"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={newCourses}
        onChange={(e) => setNewCourses(e.target.value)}
        placeholder="Courses (comma-separated)"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;