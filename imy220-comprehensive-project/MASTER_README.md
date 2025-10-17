# IMY220 Comprehensive Project Collection

A comprehensive collection of **plain JavaScript projects** demonstrating various concepts including arrays, strings, functions, asynchronous programming, promises, fetch API, ES6+ features, and OOP with classes.

> 🎯 **Note**: All projects now use **vanilla JavaScript** with separate `index.html`, `script.js`, and `styles.css` files - exactly like in exams!

## Projects Overview

### Asynchronous Programming Projects

### 1. **ajax-xmlhttprequest-project**
Basic AJAX with XMLHttpRequest - Understanding the original method for making asynchronous requests.
- **Topics**: XMLHttpRequest, callbacks, onreadystatechange
- **Files**: `index.html`, `script.js`, `styles.css`, `data.txt`
- **Run**: Requires local server

### 2. **simple-promise-project**
Creating and Using Simple Promises - Learn basic Promise syntax and handling.
- **Topics**: Promise creation, resolve/reject, .then()
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 3. **callback-to-promise-project**
Converting Callbacks to Promises - Refactor callback-based code to Promise-based structure.
- **Topics**: Promise wrapping, refactoring, modernization
- **Files**: `index.html`, `script.js`, `styles.css`, `data.txt`
- **Run**: Requires local server

### 4. **fetch-async-await-project**
Fetch API with Async/Await - Modern approach to asynchronous requests.
- **Topics**: fetch API, async/await, try/catch
- **Files**: `index.html`, `script.js`, `styles.css`, `user.json`
- **Run**: Requires local server

### 5. **react-fetch-basic-project**
Data Fetching with React CDN - Integrate fetch into component lifecycle.
- **Topics**: React hooks, useState, useEffect, component lifecycle
- **Files**: `index.html`, `script.js`, `styles.css`, `posts.json`
- **Run**: Requires local server

### 6. **react-loading-error-project**
Loading and Error States with React CDN - Robust component with proper state management.
- **Topics**: Multiple states, conditional rendering, error handling
- **Files**: `index.html`, `script.js`, `styles.css`, `posts.json`
- **Run**: Requires local server

---

### Core JavaScript Projects

### 7. **arrays-project**
Array manipulation and operations with vanilla JavaScript
- **Topics**: map, filter, reduce, forEach, find, slice, splice, etc.
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 8. **strings-project**
String manipulation and operations with vanilla JavaScript
- **Topics**: String methods, text processing, regex, manipulation
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 9. **functions-project**
Advanced JavaScript functions including closures and recursion
- **Topics**: Closures, recursion, higher-order functions, factory functions
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 10. **async-project**
Comprehensive async programming demonstrations
- **Topics**: Promises, async/await, Promise chains, Promise.all
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 11. **es6-features-project**
Modern ES6+ JavaScript features
- **Topics**: Destructuring, spread operator, template literals, arrow functions, rest parameters
- **Files**: `index.html`, `script.js`, `styles.css`
- **Run**: Open directly in browser

### 12. **react-state-project**
Object-oriented programming with ES6 classes and inheritance
- **Topics**: ES6 classes, inheritance, getters/setters, static methods
- **Files**: `index.html`, `script.js`, `models.js`, `styles.css`
- **Run**: Open directly in browser

---

## How to Run Projects

### 🎯 Most Projects - Open Directly in Browser
The following projects can be run by simply opening `index.html` in your browser:
- `arrays-project`
- `strings-project`
- `functions-project`
- `async-project`
- `es6-features-project`
- `react-state-project`
- `simple-promise-project`

### 🌐 Projects Requiring a Local Server
For projects that fetch external files (AJAX, fetch), you need a local server:
- `ajax-xmlhttprequest-project`
- `callback-to-promise-project`
- `fetch-async-await-project`
- `react-fetch-basic-project`
- `react-loading-error-project`

**Option 1: Python 3**
```powershell
cd project-name
python -m http.server 8000
```

**Option 2: Node.js http-server**
```powershell
cd project-name
npx http-server -p 8000
```

**Option 3: VS Code Live Server Extension**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

Then open your browser to `http://localhost:8000`

---

## Project Structure

**All projects now follow the exam-style structure:**

```
project-name/
├── index.html      # Main HTML file with structure
├── script.js       # JavaScript logic (vanilla JS)
├── styles.css      # Styling
├── data files      # .json or .txt files (if needed)
└── README.md       # Project documentation
```

**Special case - react-state-project:**
```
react-state-project/
├── index.html      # HTML structure
├── script.js       # Main application logic
├── models.js       # Person and Student classes
├── styles.css      # Styling
└── README.md       # Documentation
```

### Key Features of All Projects:
✅ **Separation of Concerns**: HTML, CSS, and JS in separate files
✅ **Vanilla JavaScript**: No build tools or compilation needed
✅ **Exam-Style**: Written exactly like you would in an exam
✅ **Well-Commented**: Clear explanations in code
✅ **Beautiful UI**: Modern, responsive designs with unique gradients

---

## Key Learning Outcomes

### Core JavaScript
- ✅ Array methods (map, filter, reduce, etc.)
- ✅ String manipulation and methods
- ✅ ES6+ features (destructuring, spread, rest, etc.)
- ✅ Template literals and arrow functions
- ✅ Object-oriented programming with classes
- ✅ Inheritance and polymorphism
- ✅ Getters, setters, and static methods

### Functions & Closures
- ✅ Higher-order functions
- ✅ Closures and private variables
- ✅ Factory functions
- ✅ Recursion patterns
- ✅ Function composition

### Asynchronous JavaScript
- ✅ XMLHttpRequest and callbacks
- ✅ Promise creation and chaining
- ✅ Modern fetch API
- ✅ Async/await syntax
- ✅ Error handling strategies
- ✅ Promise.all for parallel operations

### React (CDN-based)
- ✅ Functional components
- ✅ useState hook
- ✅ useEffect hook
- ✅ Component lifecycle
- ✅ Conditional rendering
- ✅ Loading and error states
- ✅ Data fetching patterns

### Best Practices
- ✅ Separation of concerns
- ✅ Error handling
- ✅ User feedback (loading states)
- ✅ Clean code organization
- ✅ Modern JavaScript syntax
- ✅ Exam-style code structure

---

## Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Basic understanding of HTML, CSS, JavaScript
- Node.js (for React projects with npm)
- Text editor or IDE (VS Code recommended)

---

## Technologies Used

- **Vanilla JavaScript (ES6+)**: Modern JavaScript features without frameworks
- **HTML5**: Structure and semantics
- **CSS3**: Styling with gradients and animations
- **React 18 (CDN)**: For the two React-based projects only
- **Babel Standalone**: JSX transformation for React projects
- **Fetch API**: Network requests
- **Promises & Async/Await**: Asynchronous operations
- **ES6 Classes**: Object-oriented programming

## Why Vanilla JavaScript?

All projects are now written in **plain JavaScript** for several important reasons:

1. **✍️ Exam Preparation**: Exams require vanilla JavaScript, not JSX or build tools
2. **📚 Core Understanding**: Learn JavaScript fundamentals without framework abstractions
3. **🚀 No Build Process**: Open HTML files directly in browser - instant feedback
4. **💡 True Understanding**: See exactly how JavaScript manipulates the DOM
5. **📝 Exam Style**: Code is written exactly as you would in an exam setting

### React Projects (2 of 12)
Only `react-fetch-basic-project` and `react-loading-error-project` use React (via CDN) to demonstrate React-specific concepts like hooks and component lifecycle.

---

## Tips for Learning

1. **Start with the basics**: Begin with `ajax-xmlhttprequest-project` to understand foundational concepts
2. **Progress sequentially**: Each project builds on concepts from previous ones
3. **Open dev console**: Use browser developer tools to see console logs
4. **Experiment**: Modify the code and see what happens
5. **Test error states**: Intentionally break things to understand error handling
6. **Read the READMEs**: Each project has detailed documentation

---

## Common Issues & Solutions

### CORS Errors
**Problem**: "CORS policy" errors in console  
**Solution**: Use a local server (don't open files directly)

### Fetch 404 Errors
**Problem**: Files not found  
**Solution**: Ensure you're in the correct directory and using a local server

### React Not Loading
**Problem**: Blank page with React projects  
**Solution**: Check browser console for errors, ensure CDN links are working

### Port Already in Use
**Problem**: "Port 8000 is already in use"  
**Solution**: Use a different port: `python -m http.server 8001`

---

## Additional Resources

- [MDN Web Docs - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Documentation](https://react.dev/)
- [JavaScript.info - Async/Await](https://javascript.info/async-await)

---

## Author

Created for IMY220 coursework - Comprehensive JavaScript and React demonstrations

## License

Educational purposes only
