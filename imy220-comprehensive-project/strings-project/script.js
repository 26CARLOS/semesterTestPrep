// String Manipulation Project - Plain JavaScript

// String operations
const stringOperations = {
    reverse: (str) => str.split('').reverse().join(''),
    removeWord: (str, word) => str.split(' ').filter(w => w !== word).join(' '),
    uppercase: (str) => str.toUpperCase(),
    lowercase: (str) => str.toLowerCase(),
    wordCount: (str) => str.split(' ').length,
    charCount: (str) => str.length,
    removeVowels: (str) => str.replace(/[aeiou]/gi, ''),
    capitalize: (str) => str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    template: (str) => `The text is: "${str}"`,
    extract: (str) => {
        const [first, ...rest] = str.split(' ');
        return { first, rest: rest.join(' ') };
    },
    palindrome: (str) => {
        const clean = str.toLowerCase().replace(/[^a-z]/g, '');
        return clean === clean.split('').reverse().join('');
    },
    trimSpaces: (str) => str.trim(),
    replaceAll: (str) => str.replace(/o/gi, '0'),
    substring: (str) => str.substring(0, 5)
};

// Handle string operation button clicks
function handleStringOp(opName) {
    const textInput = document.getElementById('textInput');
    const removeWordInput = document.getElementById('removeWordInput');
    const stringResult = document.getElementById('stringResult');
    
    try {
        let result;
        const text = textInput.value;
        
        if (opName === 'removeWord') {
            result = stringOperations[opName](text, removeWordInput.value);
        } else {
            result = stringOperations[opName](text);
        }
        
        stringResult.textContent = `${opName}: ${JSON.stringify(result)}`;
        stringResult.className = 'result show';
    } catch (e) {
        stringResult.textContent = `Error: ${e.message}`;
        stringResult.className = 'result show error';
    }
}
