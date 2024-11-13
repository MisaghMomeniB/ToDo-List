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

// Initial call to set date and time, and interval for updates
updateDateTime();
setInterval(updateDateTime, 1000);

// Function to create a new task element with a timestamp
function createTaskElement(taskText) {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
    };
    const timestamp = now.toLocaleString('en-US', options);

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="timestamp">${timestamp}</span>
        <button class="complete-btn">✔</button>
        <button class="edit-btn">✏</button>
        <button class="delete-btn">✖</button>
    `;
    return todoItem;
}

// Function to add a new task
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = createTaskElement(taskText);
    todoList.appendChild(todoItem);
    input.value = ""; // Clear input after adding
}

// Function to handle task actions: complete, edit, delete
function handleTaskAction(event) {
    const target = event.target;
    const todoItem = target.closest('.todo-item');

    if (!todoItem) return;

    const taskText = todoItem.querySelector('.task-text');

    if (target.classList.contains('complete-btn')) {
        todoItem.classList.toggle('completed');
    } else if (target.classList.contains('edit-btn')) {
        const newTaskText = prompt("Edit your task:", taskText.innerText);
        if (newTaskText) {
            taskText.innerText = newTaskText.trim();
        }
    } else if (target.classList.contains('delete-btn')) {
        todoItem.remove();
    }
}

// Event listeners for adding tasks and handling task actions
document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-list').addEventListener('click', handleTaskAction);