# Basic AJAX with XMLHttpRequest

## Objective
Understand the original method for making asynchronous requests in JavaScript using the XMLHttpRequest object and callbacks.

## How to Run
1. Open a terminal in this project directory
2. Start a local server (required for AJAX to work):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server -p 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`
4. Click the "Load Data" button to fetch data from `data.txt`

## Files
- `index.html` - HTML structure with button and display area
- `script.js` - JavaScript with XMLHttpRequest implementation
- `data.txt` - Sample data file to fetch
- `styles.css` - Styling for the page

## Key Concepts
- XMLHttpRequest object
- Callback functions
- onreadystatechange event
- readyState and status properties
- Asynchronous GET requests
