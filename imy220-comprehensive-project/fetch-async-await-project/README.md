# Fetch API with Async/Await

## Objective
Use the modern fetch API combined with async/await syntax to handle asynchronous requests in a cleaner, more readable way.

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
4. Click the "Fetch User Data" button

## Files
- `index.html` - HTML structure with button and pre tag
- `script.js` - JavaScript with fetch API and async/await
- `user.json` - Sample JSON data file
- `styles.css` - Styling for the page

## Key Concepts
- Modern `fetch()` API
- `async/await` syntax for cleaner async code
- `try...catch` blocks for error handling
- Checking `response.ok` property
- Parsing JSON with `response.json()`
- Displaying formatted JSON

## Advantages
- More readable than Promise chains
- Synchronous-looking code structure
- Better error handling with try/catch
- Native browser support (no libraries needed)
