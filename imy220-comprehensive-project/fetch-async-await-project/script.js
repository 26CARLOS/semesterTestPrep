// Fetch API with Async/Await

// Get DOM elements
const fetchUserBtn = document.getElementById('fetchUserBtn');
const jsonOutput = document.getElementById('jsonOutput');

// Async function to fetch user data
async function fetchUserData() {
    try {
        // Show loading state
        jsonOutput.textContent = 'Loading...';
        jsonOutput.style.color = '#3498db';
        
        // Use await to fetch data
        const response = await fetch('user.json');
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON data
        const data = await response.json();
        
        // Display formatted JSON in pre tag
        jsonOutput.textContent = JSON.stringify(data, null, 2);
        jsonOutput.style.color = '#2ecc71';
        
        console.log('User data:', data);
        
    } catch (error) {
        // Handle errors
        jsonOutput.textContent = `Error: ${error.message}`;
        jsonOutput.style.color = '#e74c3c';
        console.error('Error fetching user data:', error);
    }
}

// Add click event listener
fetchUserBtn.addEventListener('click', fetchUserData);
