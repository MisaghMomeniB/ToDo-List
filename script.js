// Function to update the current date and time every second
function updateDateTime() {
    const now = new Date(); // Creates a new Date object representing the current date and time
    const options = { 
        year: 'numeric', // Display year as numeric (e.g., 2024)
        month: 'long', // Display month as full name (e.g., November)
        day: 'numeric', // Display day of the month as numeric (e.g., 15)
        hour: '2-digit', // Display hour as two digits (e.g., 08 or 12)
        minute: '2-digit', // Display minute as two digits (e.g., 04 or 30)
        second: '2-digit', // Display second as two digits (e.g., 09 or 45)
        hour12: true // Use 12-hour clock with AM/PM
    };
    // Sets the text content of the element with id "current-datetime" to the formatted date and time
    document.getElementById('current-datetime').innerText = now.toLocaleString('en-US', options);
}

// Initial call to set date and time, and interval for updates
updateDateTime(); // Calls the function to set the initial date and time
setInterval(updateDateTime, 1000); // Updates the date and time every second (1000 milliseconds)

// Function to create a new task element with a timestamp
function createTaskElement(taskText) {
    const now = new Date(); // Creates a new Date object representing the current date and time
    const options = { 
        year: 'numeric', // Display year as numeric (e.g., 2024)
        month: 'short', // Display month as a shortened version (e.g., Nov)
        day: 'numeric', // Display day of the month as numeric
        hour: '2-digit', // Display hour as two digits
        minute: '2-digit', // Display minute as two digits
        hour12: true // Use 12-hour clock with AM/PM
    };
    // Format the current timestamp to display in the format defined by options
    const timestamp = now.toLocaleString('en-US', options);

    // Create a new list item element for the task
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item'; // Assigns a class to the task item for styling
    todoItem.innerHTML = `
        <span class="task-text">${taskText}</span> <!-- Task text -->
        <span class="timestamp">${timestamp}</span> <!-- Timestamp of when the task was added -->
        <button class="complete-btn">✔</button> <!-- Button to mark the task as completed -->
        <button class="edit-btn">✏</button> <!-- Button to edit the task -->
        <button class="delete-btn">✖</button> <!-- Button to delete the task -->
    `;
    return todoItem; // Returns the newly created task element
}

// Function to add a new task
function addTask() {
    const input = document.getElementById('todo-input'); // Gets the input field for the task
    const taskText = input.value.trim(); // Retrieves the task text and removes any leading/trailing spaces

    // If the task text is empty, show an alert and stop the function
    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    const todoList = document.getElementById('todo-list'); // Gets the todo list element
    const todoItem = createTaskElement(taskText); // Creates a new task element with the task text
    todoList.appendChild(todoItem); // Adds the new task element to the todo list
    input.value = ""; // Clears the input field after adding the task
}

// Function to handle task actions: complete, edit, delete
function handleTaskAction(event) {
    const target = event.target; // Gets the element that was clicked
    const todoItem = target.closest('.todo-item'); // Finds the closest parent element with the class "todo-item"

    if (!todoItem) return; // If no task item is found, exit the function

    const taskText = todoItem.querySelector('.task-text'); // Gets the task text element within the todo item

    // If the complete button was clicked
    if (target.classList.contains('complete-btn')) {
        todoItem.classList.toggle('completed'); // Toggles the "completed" class, marking the task as completed
    } 
    // If the edit button was clicked
    else if (target.classList.contains('edit-btn')) {
        const newTaskText = prompt("Edit your task:", taskText.innerText); // Prompts the user to enter a new task text
        if (newTaskText) {
            taskText.innerText = newTaskText.trim(); // Updates the task text with the new value, if entered
        }
    } 
    // If the delete button was clicked
    else if (target.classList.contains('delete-btn')) {
        todoItem.remove(); // Removes the task item from the list
    }
}

// Event listeners for adding tasks and handling task actions
document.getElementById('add-btn').addEventListener('click', addTask); // Adds a click event listener to the "Add Task" button to call the addTask function
document.getElementById('todo-list').addEventListener('click', handleTaskAction); // Adds a click event listener to the todo list to handle task actions (complete, edit, delete)