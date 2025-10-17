# IMY220 Comprehensive Project

This project is a comprehensive study resource for JavaScript, ES6, React, and related concepts. It is divided into several smaller projects, each focusing on specific topics. Below is an overview of each project and its components.

## Project Structure

- **arrays-project**: Demonstrates various array manipulation techniques using React.
  - **Components**:
    - `ArrayManipulation.jsx`: Handles array operations and displays results.
    - `OperationButton.jsx`: A button component for triggering specific array operations.
  - **Entry Point**: `index.js` renders the `App` component.

- **strings-project**: Focuses on string manipulation techniques in JavaScript.
  - **Components**:
    - `StringManipulation.jsx`: Manages string operations and displays results.
    - `StringOperationButton.jsx`: A button component for triggering specific string operations.
  - **Entry Point**: `index.js` renders the `App` component.

- **functions-project**: Explores advanced function concepts such as closures and recursion.
  - **Components**:
    - `ClosuresDemo.jsx`: Demonstrates closures in JavaScript.
    - `CounterClosure.jsx`: Showcases a counter using closures.
    - `MultiplierClosure.jsx`: Demonstrates a multiplier function using closures.
    - `RecursionDemo.jsx`: Illustrates recursion concepts.
  - **Entry Point**: `index.js` renders the `App` component.

- **async-project**: Covers asynchronous programming concepts including promises and async/await.
  - **Components**:
    - `PromisesDemo.jsx`: Demonstrates promises in JavaScript.
    - `AsyncAwaitDemo.jsx`: Showcases async/await functionality.
    - `PromiseChainDemo.jsx`: Illustrates promise chaining.
  - **Entry Point**: `index.js` renders the `App` component.

- **react-state-project**: Manages state in a React application with a focus on student management.
  - **Components**:
    - `StudentManager.jsx`: Manages the student list and operations.
    - `StudentCard.jsx`: Displays individual student information.
    - `StudentForm.jsx`: A form component for adding new students.
  - **Models**:
    - `Person.js`: Represents a person with properties and methods.
    - `Student.js`: Represents a student that extends the `Person` class.
  - **Entry Point**: `index.js` renders the `App` component.

- **es6-features-project**: Demonstrates various ES6 features and syntax improvements.
  - **Components**:
    - `DestructuringDemo.jsx`: Demonstrates destructuring in JavaScript.
    - `SpreadOperatorDemo.jsx`: Showcases the spread operator.
    - `TemplateLiteralsDemo.jsx`: Illustrates template literals.
  - **Entry Point**: `index.js` renders the `App` component.

## Shared Resources

- **Styles**: Global styles are defined in `styles/global.css`.
- **Utilities**: Common utility functions are available in `utils/helpers.js`.

## Getting Started

To get started with any of the projects, navigate to the respective project directory and run the following commands:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

Each project will be available at `http://localhost:3000` by default.

## Contributing

Feel free to contribute to this project by adding new features, fixing bugs, or improving documentation. Please ensure that your contributions align with the overall structure and style of the project.

## License

This project is open-source and available under the MIT License.