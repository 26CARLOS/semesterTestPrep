# Arrays Project - Vanilla JavaScript

## Objective
Learn and practice JavaScript array methods and operations using pure vanilla JavaScript.

## How to Run
Simply open `index.html` in your browser. No server needed!

## Files
- `index.html` - HTML structure with input and buttons
- `script.js` - JavaScript array operations (vanilla JS)
- `styles.css` - Modern styling with purple gradient
- `README.md` - This file

## Array Methods Covered

| Method | Description | Example Result |
|--------|-------------|----------------|
| **map()** | Doubles each number | [1,2,3] → [2,4,6] |
| **filter()** | Filters numbers > 2 | [1,2,3,4,5] → [3,4,5] |
| **reduce()** | Sums all numbers | [1,2,3,4,5] → 15 |
| **every()** | Checks if all > 0 | [1,2,3] → true |
| **some()** | Checks if any > 4 | [1,2,3,4,5] → true |
| **slice()** | Returns slice(1, 4) | [1,2,3,4,5] → [2,3,4] |
| **splice()** | Replaces at index 2 | [1,2,3,4,5] → [1,2,99,4,5] |
| **concat()** | Adds [6,7,8] | [1,2,3] → [1,2,3,6,7,8] |
| **reverse()** | Reverses array | [1,2,3] → [3,2,1] |
| **sort()** | Sorts descending | [3,1,2] → [3,2,1] |
| **forEach()** | Sums with forEach | [1,2,3,4,5] → 15 |
| **find()** | First > 3 | [1,2,3,4,5] → 4 |
| **findIndex()** | Index of first > 3 | [1,2,3,4,5] → 3 |
| **includes()** | Has 3? | [1,2,3] → true |
| **flat()** | Flattens nested | [[1,2],[3,4]] → [1,2,3,4] |

## Usage
1. Enter an array in JSON format in the input field
2. Default value: `[1, 2, 3, 4, 5]`
3. Click any operation button to see the result
4. The result will be displayed below the buttons
5. Try different arrays to see how methods work!

## Code Structure

```javascript
// Operations object contains all array methods
const operations = {
    map: (arr) => arr.map(n => n * 2),
    filter: (arr) => arr.filter(n => n > 2),
    // ... more operations
};

// Handle button clicks
function handleOperation(opName) {
    const arr = JSON.parse(arrayInput.value);
    const result = operations[opName](arr);
    // Display result
}
```

## Key Concepts
- Array iteration methods
- Callback functions
- Immutability with spread operator
- Array transformation
- JSON parsing

## Error Handling
- Validates JSON input
- Checks if input is an array
- Displays error messages in red

## Exam Tips
- Know the difference between mutating and non-mutating methods
- `map()`, `filter()`, `slice()` return new arrays
- `splice()`, `reverse()`, `sort()` mutate the original
- Use spread `[...arr]` to create copies before mutating
