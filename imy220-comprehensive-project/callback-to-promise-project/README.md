# Callback to Promise Conversion

## Objective
Practice refactoring traditional callback-based asynchronous code into a modern, Promise-based structure.

## How to Run
1. Open a terminal in this project directory
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server -p 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`
4. Click the "Load Data with Promise" button

## Files
- `index.html` - HTML structure
- `script.js` - JavaScript with Promise-wrapped XMLHttpRequest
- `data.txt` - Sample data file
- `styles.css` - Styling for the page

## Key Concepts
- Wrapping callback-based code in Promises
- Using `resolve()` for successful operations
- Using `reject()` for errors
- Promise chaining with `.then()`
- Error handling with `.catch()`
- Refactoring legacy code to modern patterns

## What Changed
- Old approach: Direct DOM manipulation in callbacks
- New approach: Return Promise, handle with `.then()` and `.catch()`
- Better error handling and separation of concerns
