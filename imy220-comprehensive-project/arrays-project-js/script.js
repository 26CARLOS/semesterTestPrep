// ============================================
// STATE VARIABLES (replaces useState)
// ============================================
let arrayInput = '[1, 2, 3, 4, 5]';
let arrayResult = '';

// ============================================
// GET DOM ELEMENTS
// ============================================
const inputEl = document.getElementById('arrayInput');
const resultEl = document.getElementById('arrayResult');
const buttonsContainer = document.getElementById('buttonsContainer');

// ============================================
// OPERATIONS OBJECT (identical to React version)
// ============================================
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

// ============================================
// HANDLE OPERATION (replaces handleOperation from React)
// ============================================
function handleOperation(opName) {
  try {
    // Parse the input
    const arr = JSON.parse(inputEl.value);
    
    // Validate it's an array
    if (!Array.isArray(arr)) {
      throw new Error('Not an array');
    }
    
    // Execute the operation
    const result = operations[opName](arr);
    
    // Update the result (replaces setArrayResult)
    arrayResult = `${opName}: ${JSON.stringify(result)}`;
    updateResultDisplay();
    
  } catch (e) {
    // Handle errors
    arrayResult = `Error: ${e.message}`;
    updateResultDisplay(true);
  }
}

// ============================================
// UPDATE RESULT DISPLAY
// ============================================
function updateResultDisplay(isError = false) {
  if (arrayResult) {
    resultEl.innerHTML = `<strong>Result:</strong> ${arrayResult}`;
    resultEl.style.display = 'block';
    
    // Add error styling if needed
    if (isError) {
      resultEl.classList.add('error');
    } else {
      resultEl.classList.remove('error');
    }
  } else {
    resultEl.style.display = 'none';
  }
}

// ============================================
// CREATE OPERATION BUTTON (replaces OperationButton component)
// ============================================
function createOperationButton(operation) {
  const button = document.createElement('button');
  button.className = 'operation-button';
  button.textContent = operation;
  
  // Add click event listener
  button.addEventListener('click', () => handleOperation(operation));
  
  return button;
}

// ============================================
// INITIALIZE BUTTONS (replaces the map in JSX)
// ============================================
function initializeButtons() {
  // Clear container first
  buttonsContainer.innerHTML = '';
  
  // Create a button for each operation
  Object.keys(operations).forEach(op => {
    const button = createOperationButton(op);
    buttonsContainer.appendChild(button);
  });
}

// ============================================
// INPUT CHANGE HANDLER (replaces onChange)
// ============================================
function handleInputChange(e) {
  arrayInput = e.target.value;
}

// ============================================
// SETUP EVENT LISTENERS
// ============================================
function setupEventListeners() {
  inputEl.addEventListener('input', handleInputChange);
}

// ============================================
// INITIALIZE APP (replaces React rendering)
// ============================================
function init() {
  initializeButtons();
  setupEventListeners();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
