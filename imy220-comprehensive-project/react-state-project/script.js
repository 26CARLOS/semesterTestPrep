// Student Management System - Plain JavaScript

// Initial students array
let students = [
    new Student('Alice Johnson', 20, 'S001', ['IMY220', 'COS216']),
    new Student('Bob Smith', 21, 'S002', ['IMY220', 'COS226']),
    new Student('Carol White', 19, 'S003', ['IMY220', 'INF214'])
];

// Keep track of all students for filtering
let allStudents = [...students];

// ===== Render Functions =====

function renderStudents() {
    const container = document.getElementById('studentsContainer');
    
    if (students.length === 0) {
        container.innerHTML = '<div class="no-students">No students to display</div>';
        return;
    }
    
    container.innerHTML = students.map(student => `
        <div class="student-card">
            <div class="student-header">
                <h4>${student.name}</h4>
                <span class="student-id">${student.studentId}</span>
            </div>
            <div class="student-info">
                <p><strong>Age:</strong> ${student.age} years</p>
                <p><strong>Greeting:</strong> ${student.greet()}</p>
                <p><strong>Courses:</strong></p>
                <div class="courses">
                    ${student.courses.map(course => 
                        `<span class="course-tag">${course}</span>`
                    ).join('')}
                </div>
            </div>
            <button onclick="removeStudent('${student.studentId}')" class="btn-remove">
                Remove
            </button>
        </div>
    `).join('');
}

// ===== Student Management =====

function addStudent(event) {
    event.preventDefault();
    
    const name = document.getElementById('nameInput').value.trim();
    const age = parseInt(document.getElementById('ageInput').value);
    const id = document.getElementById('idInput').value.trim();
    const coursesInput = document.getElementById('coursesInput').value.trim();
    
    // Parse courses
    const courses = coursesInput 
        ? coursesInput.split(',').map(c => c.trim()).filter(c => c.length > 0)
        : [];
    
    // Check if ID already exists
    if (allStudents.some(s => s.studentId === id)) {
        alert('Student ID already exists!');
        return;
    }
    
    // Create new student
    const newStudent = new Student(name, age, id, courses);
    students.push(newStudent);
    allStudents.push(newStudent);
    
    // Clear form
    document.getElementById('studentForm').reset();
    
    // Re-render
    renderStudents();
}

function removeStudent(studentId) {
    students = students.filter(s => s.studentId !== studentId);
    allStudents = allStudents.filter(s => s.studentId !== studentId);
    renderStudents();
}

// ===== Sorting and Filtering =====

function sortByAge() {
    students.sort(Person.compareAge);
    renderStudents();
}

function sortByName() {
    students.sort(Person.compareName);
    renderStudents();
}

function filterByAge() {
    students = allStudents.filter(s => s.age >= 20);
    renderStudents();
}

function showAllStudents() {
    students = [...allStudents];
    renderStudents();
}

// ===== Initialize =====

// Render initial students
renderStudents();

// Log some demonstrations to console
console.log('=== Student Management System ===');
console.log('Students:', students);
console.log('\nDemonstrating inheritance:');
students.forEach(student => {
    console.log(student.greet());
});

console.log('\nDemonstrating static methods:');
const [student1, student2] = students;
console.log('Age comparison:', Person.compareAge(student1, student2));
console.log('Name comparison:', Person.compareName(student1, student2));
