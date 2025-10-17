// Functions Project - Closures and Recursion

// ===== Closure Functions =====

// Create a counter closure
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = 0
    };
}

// Global counter instance
const myCounter = createCounter();

// Demonstrate basic closure
function demonstrateClosure() {
    const counter = createCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    
    const result = document.getElementById('closureResult');
    result.textContent = `Closure counter value: ${counter.getValue()}`;
    result.className = 'result show';
}

// Handle counter operations
function handleIncrement() {
    const newValue = myCounter.increment();
    document.getElementById('counterValue').textContent = newValue;
}

function handleDecrement() {
    const newValue = myCounter.decrement();
    document.getElementById('counterValue').textContent = newValue;
}

function resetCounter() {
    myCounter.reset();
    document.getElementById('counterValue').textContent = '0';
}

// Multiplier closure factory
function createMultiplier(factor) {
    return (number) => number * factor;
}

function demonstrateMultiplier() {
    const input = document.getElementById('multiplierInput');
    const result = document.getElementById('multiplierResult');
    
    try {
        const num = parseInt(input.value);
        
        // Create different multiplier functions
        const double = createMultiplier(2);
        const triple = createMultiplier(3);
        const quadruple = createMultiplier(4);
        
        const doubleResult = double(num);
        const tripleResult = triple(num);
        const quadrupleResult = quadruple(num);
        
        result.innerHTML = `
            <strong>Multiplying ${num}:</strong><br>
            Double: ${doubleResult}<br>
            Triple: ${tripleResult}<br>
            Quadruple: ${quadrupleResult}
        `;
        result.className = 'result show';
    } catch (e) {
        result.textContent = `Error: ${e.message}`;
        result.className = 'result show error';
    }
}

// ===== Recursion Functions =====

// Factorial using recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci using recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of array using recursion
function sumArray(arr, index = 0) {
    if (index >= arr.length) return 0;
    return arr[index] + sumArray(arr, index + 1);
}

// Power function using recursion
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

function demonstrateRecursion() {
    const factInput = document.getElementById('factorialInput');
    const fibInput = document.getElementById('fibonacciInput');
    const result = document.getElementById('recursionResult');
    
    try {
        const factNum = parseInt(factInput.value);
        const fibNum = parseInt(fibInput.value);
        
        const fact = factorial(factNum);
        const fib = fibonacci(fibNum);
        const testArray = [1, 2, 3, 4, 5];
        const sum = sumArray(testArray);
        const pow = power(2, 8);
        
        result.innerHTML = `
            <strong>Recursion Results:</strong><br>
            Factorial of ${factNum}: ${fact}<br>
            Fibonacci(${fibNum}): ${fib}<br>
            Sum of [1,2,3,4,5]: ${sum}<br>
            2^8: ${pow}
        `;
        result.className = 'result show';
    } catch (e) {
        result.textContent = `Error: ${e.message}`;
        result.className = 'result show error';
    }
}
