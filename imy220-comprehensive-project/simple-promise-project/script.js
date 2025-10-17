// Creating and Using a Simple Promise

// Function that returns a Promise
function wait(duration) {
    return new Promise((resolve, reject) => {
        // Use setTimeout to wait for specified duration
        setTimeout(() => {
            // Resolve the Promise with a success message
            resolve(`Waited for ${duration} ms`);
        }, duration);
    });
}

// Get DOM elements
const waitBtn = document.getElementById('waitBtn');
const output = document.getElementById('output');

// Add click event listener
waitBtn.addEventListener('click', () => {
    output.textContent = 'Waiting...';
    output.style.color = '#3498db';
    
    // Call wait function with 2000ms duration
    wait(2000)
        .then((message) => {
            // Log success message to console
            console.log(message);
            
            // Also display in the UI
            output.textContent = message;
            output.style.color = '#2ecc71';
        })
        .catch((error) => {
            console.error('Error:', error);
            output.textContent = `Error: ${error}`;
            output.style.color = '#e74c3c';
        });
});

// Automatically run once on page load
console.log('Running wait function automatically...');
wait(2000)
    .then((message) => {
        console.log(message);
    });
