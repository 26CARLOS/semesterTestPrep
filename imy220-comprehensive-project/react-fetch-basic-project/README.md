# React Fetch Basic

## Objective
Integrate asynchronous data fetching into a React component's lifecycle using `useState` and `useEffect`.

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
- `script.js` - React component with data fetching
- `posts.json` - Sample posts data
- `styles.css` - Styling for the page

## Key Concepts
- React functional components
- `useState` hook for managing state
- `useEffect` hook for side effects
- Fetching data on component mount
- Empty dependency array `[]` to run effect only once
- Mapping over arrays to render lists
- Key props for list items

## React Hooks Used
- **useState**: Manages the posts array state
- **useEffect**: Fetches data when component mounts

## Component Lifecycle
1. Component mounts
2. useEffect runs (only once due to empty dependency array)
3. Fetch request is made
4. When data arrives, state is updated
5. Component re-renders with new data
