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

// Function to add a new task
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim(); // Get trimmed input value

    if (!taskText) {
        alert("Please enter a task."); // Alert if the input is empty
        return; // Exit if no task is provided
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = createTaskElement(taskText); // Create a new task element
    todoList.appendChild(todoItem); // Append the new task to the list
    input.value = ""; // Clear the input field
}

// Function to handle task actions (complete, edit, delete)
function handleTaskAction(event) {
    const target = event.target; // Get the clicked element
    const todoItem = target.closest('.todo-item'); // Get the parent list item

    if (!todoItem) return; // If no todo item, exit

    if (target.classList.contains('complete-btn')) {
        const taskText = todoItem.querySelector('.task-text');
        todoItem.classList.toggle('completed'); // Toggle completed class
        taskText.innerHTML += todoItem.classList.contains('completed') ? ' &#10003;' : ''; // Update checkmark
    } else if (target.classList.contains('edit-btn')) {
        const taskText = todoItem.querySelector('.task-text');
        const newTaskText = prompt("Edit your task:", taskText.innerText.replace(' ✔', '')); // Prompt for new task text
        if (newTaskText) {
            taskText.innerText = newTaskText.trim(); // Update the task text
        }
    } else if (target.classList.contains('delete-btn')) {
        todoItem.remove(); // Remove the task from the list
    }
}