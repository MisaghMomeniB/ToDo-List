// Function to update the current date and time every second
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    document.getElementById('current-datetime').innerText = now.toLocaleString('en-US', options);
}

// Call the function once to set initial date and time
updateDateTime();
// Update date and time every second
setInterval(updateDateTime, 1000);

// Function to create a new task element
function createTaskElement(taskText) {
    const todoItem = document.createElement('li'); // Create a new list item
    todoItem.className = 'todo-item'; // Set the class for styling
    todoItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="complete-btn">✔</button>
        <button class="edit-btn">✏</button>
        <button class="delete-btn">✖</button>
    `;
    return todoItem; // Return the created task element
}