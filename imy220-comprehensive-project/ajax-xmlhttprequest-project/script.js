// Basic AJAX with XMLHttpRequest

// Get references to DOM elements
const loadDataBtn = document.getElementById('loadDataBtn');
const dataDisplay = document.getElementById('dataDisplay');

// Add click event listener to the button
loadDataBtn.addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Set up callback function for onreadystatechange event
    xhr.onreadystatechange = function() {
        // Check if request is complete (readyState is 4) and successful (status is 200)
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Update div content with response text
                dataDisplay.textContent = xhr.responseText;
                dataDisplay.style.color = '#2ecc71';
            } else {
                dataDisplay.textContent = 'Error loading data: ' + xhr.status;
                dataDisplay.style.color = '#e74c3c';
            }
        } else {
            dataDisplay.textContent = 'Loading...';
            dataDisplay.style.color = '#3498db';
        }
    };
    
    // Open and send GET request to data.txt
    xhr.open('GET', 'data.txt', true);
    xhr.send();
});
