// Array Manipulation Project - Plain JavaScript

// Array operations
const operations = {
    map: (arr) => arr.map(n => n * 2),
    filter: (arr) => arr.filter(n => n > 2),
    reduce: (arr) => arr.reduce((acc, n) => acc + n, 0),
    every: (arr) => arr.every(n => n > 0),
    some: (arr) => arr.some(n => n > 4),
    slice: (arr) => arr.slice(1, 4),
    splice: (arr) => {
        const copy = [...arr];
        copy.splice(2, 1, 99);
        return copy;
    },
    concat: (arr) => arr.concat([6, 7, 8]),
    reverse: (arr) => [...arr].reverse(),
    sort: (arr) => [...arr].sort((a, b) => b - a),
    forEach: (arr) => {
        let sum = 0;
        arr.forEach(n => sum += n);
        return sum;
    },
    find: (arr) => arr.find(n => n > 3),
    findIndex: (arr) => arr.findIndex(n => n > 3),
    includes: (arr) => arr.includes(3),
    flat: (arr) => [[1, 2], [3, 4]].flat()
};

// Handle operation button clicks
function handleOperation(opName) {
    const arrayInput = document.getElementById('arrayInput');
    const arrayResult = document.getElementById('arrayResult');
    
    try {
        const arr = JSON.parse(arrayInput.value);
        if (!Array.isArray(arr)) {
            throw new Error('Not an array');
        }
        
        const result = operations[opName](arr);
        arrayResult.textContent = `${opName}: ${JSON.stringify(result)}`;
        arrayResult.className = 'result show';
    } catch (e) {
        arrayResult.textContent = `Error: ${e.message}`;
        arrayResult.className = 'result show error';
    }
}
