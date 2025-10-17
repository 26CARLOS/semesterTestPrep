# Functions Project - Closures & Recursion

## Objective
Master JavaScript closures and recursion using pure vanilla JavaScript.

## How to Run
Simply open `index.html` in your browser. No server needed!

## Files
- `index.html` - HTML structure with interactive demos
- `script.js` - JavaScript with closures and recursion
- `styles.css` - Modern styling with teal gradient
- `README.md` - This file

## Features Demonstrated

### 1. Basic Closure Demo
- Creates a counter closure
- Demonstrates private variables
- Shows encapsulation

### 2. Counter Closure
- Increment/Decrement/Reset functionality
- State persistence through closure
- Visual counter display

### 3. Multiplier Closure Factory
- Creates multiplier functions
- Demonstrates function factories
- Shows closure with parameters

### 4. Recursion Demonstrations
- **Factorial**: n! calculation
- **Fibonacci**: Fibonacci sequence
- **Array Sum**: Recursive array summing
- **Power**: Exponentiation via recursion

## Code Examples

### Closure Pattern
```javascript
function createCounter() {
    let count = 0;  // Private variable
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = 0
    };
}
```

### Factory Pattern
```javascript
function createMultiplier(factor) {
    return (number) => number * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
```

### Recursion Pattern
```javascript
function factorial(n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}
```

## Key Concepts

### Closures
- **Private Variables**: Variables accessible only within closure
- **State Persistence**: Data survives function calls
- **Encapsulation**: Hide implementation details
- **Function Factories**: Functions that create functions

### Recursion
- **Base Case**: Condition to stop recursion
- **Recursive Case**: Function calling itself
- **Call Stack**: Understanding stack frames
- **Termination**: Ensuring recursion ends

## Interactive Features
1. **Basic Closure Demo**: Shows counter incrementing
2. **Live Counter**: Interactive increment/decrement/reset
3. **Multiplier Factory**: Input number to multiply
4. **Recursion Calculator**: Calculate factorial and Fibonacci

## Exam Tips

### Closures
- Remember: inner functions have access to outer function variables
- Closures "remember" their environment
- Use closures for private data
- Factory functions return new closures each time

### Recursion
- Always define a base case
- Make sure recursion moves toward base case
- Beware of stack overflow with deep recursion
- Sometimes iteration is better than recursion

## Common Use Cases

### Closures
- Data privacy
- Event handlers with state
- Partial application
- Module pattern

### Recursion
- Tree/graph traversal
- Mathematical calculations
- Divide and conquer algorithms
- Backtracking problems
