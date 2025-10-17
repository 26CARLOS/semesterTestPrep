// ES6 Features Project - Modern JavaScript

// Get result element
function displayResult(content, isError = false) {
    const result = document.getElementById('es6Result');
    result.innerHTML = content;
    result.className = isError ? 'result show error' : 'result show';
}

// ===== Destructuring =====

function demoArrayDestructuring() {
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    
    // Swapping variables
    let a = 10, b = 20;
    [a, b] = [b, a];
    
    displayResult(`
        <strong>Array Destructuring:</strong><br>
        Numbers: [${numbers}]<br>
        First: ${first}<br>
        Second: ${second}<br>
        Rest: [${rest}]<br><br>
        <strong>Swapping:</strong><br>
        After swap - a: ${a}, b: ${b}
    `);
}

function demoObjectDestructuring() {
    const person = { 
        name: 'John', 
        age: 25, 
        city: 'Pretoria', 
        country: 'SA' 
    };
    
    const { name, age, ...others } = person;
    
    // Nested destructuring
    const student = {
        id: 1,
        info: {
            firstName: 'Alice',
            lastName: 'Smith'
        }
    };
    
    const { info: { firstName, lastName } } = student;
    
    displayResult(`
        <strong>Object Destructuring:</strong><br>
        Name: ${name}<br>
        Age: ${age}<br>
        Others: ${JSON.stringify(others)}<br><br>
        <strong>Nested Destructuring:</strong><br>
        First Name: ${firstName}<br>
        Last Name: ${lastName}
    `);
}

// ===== Spread Operator =====

function demoSpreadOperator() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combinedObj = { ...obj1, ...obj2 };
    
    // Array copy
    const original = [1, 2, 3];
    const copy = [...original];
    copy.push(4);
    
    displayResult(`
        <strong>Spread Operator:</strong><br>
        arr1: [${arr1}]<br>
        arr2: [${arr2}]<br>
        Combined: [${combined}]<br><br>
        <strong>Object Spread:</strong><br>
        Combined Object: ${JSON.stringify(combinedObj)}<br><br>
        <strong>Array Copy:</strong><br>
        Original: [${original}]<br>
        Copy: [${copy}]
    `);
}

// ===== Object Literal Enhancement =====

function demoObjectLiteralEnhancement() {
    const name = 'Alice';
    const age = 25;
    const course = 'IMY220';
    
    // Shorthand property names
    const person = { 
        name, 
        age, 
        course,
        greet() { 
            return `Hi, I'm ${this.name}`;
        },
        // Computed property names
        [`student_${age}`]: true
    };
    
    displayResult(`
        <strong>Object Literal Enhancement:</strong><br>
        Object: ${JSON.stringify(person, null, 2)}<br>
        Greeting: ${person.greet()}
    `);
}

// ===== Default Parameters =====

function demoDefaultParams() {
    const greet = (name = 'Guest', greeting = 'Hello', time = 'day') => {
        return `${greeting}, ${name}! Have a nice ${time}!`;
    };
    
    const calculatePrice = (price, tax = 0.15, discount = 0) => {
        return price + (price * tax) - discount;
    };
    
    displayResult(`
        <strong>Default Parameters:</strong><br>
        Default: ${greet()}<br>
        Custom: ${greet('Alice', 'Hi', 'evening')}<br>
        Partial: ${greet('Bob')}<br><br>
        <strong>Price Calculation:</strong><br>
        Price: R100, Default tax (15%): R${calculatePrice(100)}<br>
        With discount: R${calculatePrice(100, 0.15, 20)}
    `);
}

// ===== Template Literals =====

function demoTemplateLiterals() {
    const name = 'Bob';
    const course = 'IMY220';
    const grade = 85;
    
    // Multi-line string
    const multiLine = `
        Student Report:
        Name: ${name}
        Course: ${course}
        Grade: ${grade}%
        Status: ${grade >= 50 ? 'Pass' : 'Fail'}
    `;
    
    // Expression in template
    const calculation = `2 + 2 = ${2 + 2}`;
    
    // Tagged template
    function highlight(strings, ...values) {
        return strings.reduce((result, str, i) => 
            `${result}${str}<strong>${values[i] || ''}</strong>`, ''
        );
    }
    
    const tagged = highlight`Student ${name} scored ${grade}% in ${course}`;
    
    displayResult(`
        <strong>Template Literals:</strong><br>
        <pre>${multiLine}</pre>
        ${calculation}<br><br>
        <strong>Tagged Template:</strong><br>
        ${tagged}
    `);
}

// ===== Arrow Functions =====

function demoArrowFunctions() {
    // Traditional vs Arrow
    const traditional = function(x) { return x * 2; };
    const arrow = x => x * 2;
    
    // Implicit return
    const square = n => n * n;
    
    // Multiple parameters
    const add = (a, b) => a + b;
    
    // No parameters
    const getRandom = () => Math.random();
    
    // Array methods with arrows
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    
    displayResult(`
        <strong>Arrow Functions:</strong><br>
        Traditional: ${traditional(5)}<br>
        Arrow: ${arrow(5)}<br>
        Square: ${square(5)}<br>
        Add: ${add(3, 7)}<br>
        Random: ${getRandom().toFixed(2)}<br><br>
        <strong>With Array Methods:</strong><br>
        Original: [${numbers}]<br>
        Doubled: [${doubled}]<br>
        Evens: [${evens}]
    `);
}

// ===== Rest Parameters =====

function demoRestParameters() {
    // Rest in function parameters
    const sum = (...numbers) => {
        return numbers.reduce((acc, n) => acc + n, 0);
    };
    
    const multiply = (multiplier, ...numbers) => {
        return numbers.map(n => n * multiplier);
    };
    
    // Rest with destructuring
    const [first, second, ...others] = [1, 2, 3, 4, 5, 6];
    
    const person = {
        name: 'Alice',
        age: 25,
        city: 'Pretoria',
        country: 'SA',
        course: 'IMY220'
    };
    
    const { name, age, ...details } = person;
    
    displayResult(`
        <strong>Rest Parameters:</strong><br>
        Sum(1,2,3,4,5): ${sum(1, 2, 3, 4, 5)}<br>
        Multiply by 2: [${multiply(2, 1, 2, 3, 4)}]<br><br>
        <strong>Rest in Destructuring:</strong><br>
        First: ${first}, Second: ${second}<br>
        Others: [${others}]<br><br>
        <strong>Object Rest:</strong><br>
        Name: ${name}, Age: ${age}<br>
        Details: ${JSON.stringify(details)}
    `);
}
