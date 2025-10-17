// Converting a Callback to a Promise

// Function that wraps XMLHttpRequest in a Promise
function fetchWithXHR(url) {
    return new Promise((resolve, reject) => {
        // Create XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        
        // Set up callback function
        xhr.onreadystatechange = function() {
            // Check if request is complete
            if (xhr.readyState === 4) {
                // Check if successful
                if (xhr.status === 200) {
                    // Resolve the Promise with response text
                    resolve(xhr.responseText);
                } else {
                    // Reject the Promise with error message
                    reject(`Error: ${xhr.status} - ${xhr.statusText}`);
                }
            }
        };
        
        // Handle network errors
        xhr.onerror = function() {
            reject('Network error occurred');
        };
        
        // Open and send request
        xhr.open('GET', url, true);
        xhr.send();
    });
}

// Get DOM elements
const loadDataBtn = document.getElementById('loadDataBtn');
const dataDisplay = document.getElementById('dataDisplay');

// Add click event listener
loadDataBtn.addEventListener('click', () => {
    dataDisplay.textContent = 'Loading...';
    dataDisplay.style.color = '#3498db';
    
    // Call fetchWithXHR and handle with .then() and .catch()
    fetchWithXHR('data.txt')
        .then((responseText) => {
            // Handle successful response
            dataDisplay.textContent = responseText;
            dataDisplay.style.color = '#2ecc71';
            console.log('Success:', responseText);
        })
        .catch((error) => {
            // Handle error
            dataDisplay.textContent = error;
            dataDisplay.style.color = '#e74c3c';
            console.error('Error:', error);
        });
});
