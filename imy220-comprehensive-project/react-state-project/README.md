# React State Project

This project is part of the IMY220 Comprehensive Study Project, focusing on managing student data using React state management concepts.

## Project Structure

- **src/**: Contains all the source code for the React application.
  - **components/**: Contains the React components used in the application.
    - **StudentManager.jsx**: Manages the student list and operations.
    - **StudentCard.jsx**: Displays individual student information.
    - **StudentForm.jsx**: A form for adding new students.
  - **models/**: Contains model classes representing data structures.
    - **Person.js**: Represents a person with properties and methods.
    - **Student.js**: Represents a student that extends the `Person` class.
  - **App.jsx**: The main application component that includes the `StudentManager`.
  - **index.js**: The entry point for the React application.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd react-state-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- Add, remove, and manage students.
- Display student information including name, ID, age, and courses.
- Sort and filter students based on age.

## Technologies Used

- React
- JavaScript (ES6)
- CSS for styling

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.