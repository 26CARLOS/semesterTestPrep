// Async Programming Project - Promises and Async/Await

// ===== Helper Functions =====

// Simulates an async operation with a delay
function waitForTime(ms, message = '') {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject('Time cannot be negative');
        }
        setTimeout(() => {
            resolve(message || `Waited for ${ms}ms`);
        }, ms);
    });
}

// Disable all buttons
function disableButtons(card) {
    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

// Enable all buttons
function enableButtons(card) {
    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = false);
}

// ===== Promises & Async/Await Demo =====

async function fetchSimulatedData() {
    const card = document.querySelector('.card');
    const result = document.getElementById('promiseResult');
    
    disableButtons(card);
    result.textContent = 'Loading...';
    result.className = 'result show loading';
    
    try {
        const result1 = await waitForTime(1000, 'Step 1 complete');
        result.textContent = result1;
        
        const result2 = await waitForTime(1000, 'Step 2 complete');
        result.textContent = `${result1} → ${result2}`;
        
        const result3 = await waitForTime(1000, 'All steps complete!');
        result.textContent = `${result1} → ${result2} → ${result3}`;
        result.className = 'result show success';
    } catch (error) {
        result.textContent = `Error: ${error}`;
        result.className = 'result show error';
    } finally {
        enableButtons(card);
    }
}

function chainedPromises() {
    const card = document.querySelector('.card');
    const result = document.getElementById('promiseResult');
    
    disableButtons(card);
    result.textContent = 'Loading...';
    result.className = 'result show loading';
    
    waitForTime(500, 'Promise 1')
        .then(result1 => {
            result.textContent = result1;
            return waitForTime(500, 'Promise 2');
        })
        .then(result2 => {
            result.textContent = prev => `${result.textContent} → ${result2}`;
            return waitForTime(500, 'Promise 3');
        })
        .then(result3 => {
            result.textContent = `${result.textContent} → ${result3}`;
            result.className = 'result show success';
        })
        .catch(error => {
            result.textContent = `Error: ${error}`;
            result.className = 'result show error';
        })
        .finally(() => {
            enableButtons(card);
        });
}

async function promiseAll() {
    const card = document.querySelector('.card');
    const result = document.getElementById('promiseResult');
    
    disableButtons(card);
    result.textContent = 'Running multiple promises in parallel...';
    result.className = 'result show loading';
    
    try {
        const startTime = Date.now();
        
        const results = await Promise.all([
            waitForTime(500, 'Task A'),
            waitForTime(1000, 'Task B'),
            waitForTime(750, 'Task C')
        ]);
        
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        
        result.innerHTML = `
            <strong>All promises resolved:</strong><br>
            ${results.join(' | ')}<br>
            <em>Total time: ~${totalTime}ms (ran in parallel)</em>
        `;
        result.className = 'result show success';
    } catch (error) {
        result.textContent = `Error: ${error}`;
        result.className = 'result show error';
    } finally {
        enableButtons(card);
    }
}

// ===== Promise States Demo =====

function demonstrateResolve() {
    const result = document.getElementById('stateResult');
    
    const resolvedPromise = Promise.resolve('This promise resolved successfully! ✓');
    
    resolvedPromise
        .then(value => {
            result.textContent = `Resolved: ${value}`;
            result.className = 'result show success';
        });
}

function demonstrateReject() {
    const result = document.getElementById('stateResult');
    
    const rejectedPromise = Promise.reject('This promise was rejected! ✗');
    
    rejectedPromise
        .catch(error => {
            result.textContent = `Rejected: ${error}`;
            result.className = 'result show error';
        });
}

async function demonstratePending() {
    const result = document.getElementById('stateResult');
    
    result.textContent = 'Promise is pending... ⏳';
    result.className = 'result show loading';
    
    await waitForTime(2000);
    
    result.textContent = 'Promise completed after 2 seconds! ✓';
    result.className = 'result show success';
}

// ===== Real World Example =====

function simulateUserFetch(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0 && userId <= 5) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`,
                    role: userId === 1 ? 'Admin' : 'User'
                });
            } else {
                reject(`User ${userId} not found`);
            }
        }, 500);
    });
}

async function fetchUserData() {
    const result = document.getElementById('realWorldResult');
    
    result.textContent = 'Fetching user data...';
    result.className = 'result show loading';
    
    try {
        const user = await simulateUserFetch(1);
        
        result.innerHTML = `
            <strong>User Data:</strong><br>
            ID: ${user.id}<br>
            Name: ${user.name}<br>
            Email: ${user.email}<br>
            Role: ${user.role}
        `;
        result.className = 'result show success';
    } catch (error) {
        result.textContent = `Error: ${error}`;
        result.className = 'result show error';
    }
}

async function fetchMultipleUsers() {
    const result = document.getElementById('realWorldResult');
    
    result.textContent = 'Fetching multiple users...';
    result.className = 'result show loading';
    
    try {
        const users = await Promise.all([
            simulateUserFetch(1),
            simulateUserFetch(2),
            simulateUserFetch(3)
        ]);
        
        const userList = users.map(user => 
            `• ${user.name} (${user.email}) - ${user.role}`
        ).join('<br>');
        
        result.innerHTML = `
            <strong>Multiple Users:</strong><br>
            ${userList}
        `;
        result.className = 'result show success';
    } catch (error) {
        result.textContent = `Error: ${error}`;
        result.className = 'result show error';
    }
}
