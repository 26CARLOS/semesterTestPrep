# React Loading and Error States

## Objective
Build a more robust React component that properly manages and displays UI for the loading, success, and error states of an API request.

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

## Files
- `index.html` - HTML structure with React CDN links
- `script.js` - React component with loading and error handling
- `posts.json` - Sample posts data
- `styles.css` - Styling including loading spinner and error states

## Key Concepts
- Multiple state variables with `useState`
- Loading state management
- Error state management
- `try...catch...finally` blocks
- Conditional rendering based on state
- User feedback for different states
- Async/await in useEffect

## State Variables
- **posts**: Array of post data
- **isLoading**: Boolean for loading state
- **error**: Error message or null

## Testing Error State
To test the error state, change the fetch URL in `script.js`:
```javascript
const response = await fetch('nonexistent.json');
```

## UI States
1. **Loading**: Shows spinner and "Loading..." message
2. **Error**: Shows error icon, message, and "Try Again" button
3. **Success**: Displays the list of posts
4. **Empty**: Shows message when no posts available

## Best Practices Demonstrated
- Always handle loading states
- Always handle error states
- Provide clear feedback to users
- Use try/catch/finally for async operations
- Clean, conditional rendering logic
