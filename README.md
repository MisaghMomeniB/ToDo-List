__Hello My Friend 👋🏻__ <br>
__I'm Misagh and I'm Glad You're Here 😉__

# Line-by-line Code Analysis ( HTML )

### Document Structure and Purpose

1. **DOCTYPE Declaration and Language**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   ```
   - The `<!DOCTYPE html>` declaration specifies that this document is an HTML5 document. 
   - The `lang="en"` attribute indicates that the primary language of the document is English, which aids in accessibility and search engine optimization.

2. **Head Section**:
   ```html
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Todo List</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   ```
   - The `<head>` section contains metadata about the document. 
   - `<meta charset="UTF-8">` ensures that the document can handle any character, including special characters, correctly.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` enables responsive design, allowing the web app to adapt to different screen sizes, which is essential for mobile devices.
   - The `<title>` element sets the title that appears in the browser tab, making it easier for users to identify the page.
   - `<link rel="stylesheet" href="styles.css">` connects an external CSS file, which will handle the styling of the application, promoting separation of concerns by keeping HTML structure and CSS presentation separate.

3. **Body Section**:
   ```html
   <body>
       <div class="container">
           <h1 class="title">Todo List</h1>
           <p class="datetime" id="current-datetime"></p>
   ```
   - The `<body>` section contains the main content of the web page. 
   - `<div class="container">` acts as a wrapper for the application, making it easier to apply styles and manage layout.
   - The `<h1 class="title">` serves as the main heading of the application, clearly indicating its purpose.
   - `<p class="datetime" id="current-datetime"></p>` is a placeholder for displaying the current date and time, enhancing user experience by providing context.

4. **Input Section**:
   ```html
       <div class="input-section">
           <label for="todo-input">New Task</label>
           <div class="input-container">
               <input type="text" id="todo-input" placeholder="Add your new task..." required>
               <button id="add-btn">Add Task</button>
           </div>
       </div>
   ```
   - The input section allows users to add new tasks. 
   - `<label for="todo-input">` improves accessibility by associating the label with the input field, which helps screen readers understand the context.
   - The `<input>` element is where users type in their tasks. It has a `placeholder` to guide users on what to input and is marked as `required` to ensure that no empty tasks are submitted.
   - The `<button>` element provides a way for users to submit the input.

5. **Task List**:
   ```html
       <ul id="todo-list"></ul>
   </div>
   ```
   - The `<ul id="todo-list">` is an unordered list where the tasks will be displayed. It starts empty and will be populated dynamically using JavaScript as tasks are added.

6. **Script Inclusion**:
   ```html
   <script src="script.js"></script>
   ```
   - The `<script>` tag links to an external JavaScript file (`script.js`), which will contain the functionality of the Todo List app, such as adding tasks, removing tasks, and updating the displayed date and time.

# Line-by-line Code Analysis ( CSS )

### Global Styles

```css
* {
    box-sizing: border-box; /* Ensures padding and border are included in the total width and height */
    margin: 0; /* Reset default margin */
    padding: 0; /* Reset default padding */
    font-family: 'Arial', sans-serif; /* Set default font for the application */
}
```

1. `*` - This is a universal selector that applies styles to all elements on the page.
2. `box-sizing: border-box;` - This ensures that the width and height of elements include padding and borders, making layout calculations easier.
3. `margin: 0;` - Resets the default margin for all elements to eliminate any spacing issues.
4. `padding: 0;` - Resets the default padding for all elements.
5. `font-family: 'Arial', sans-serif;` - Sets the default font for the application to Arial, falling back to a sans-serif font if Arial is unavailable.

### Body Styles

```css
body {
    display: flex; /* Use flexbox for centering */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    min-height: 100vh; /* Full viewport height */
    background: linear-gradient(to bottom right, #D9E3D0, #B7C9A4); /* Soft gradient background */
}
```

1. `display: flex;` - Applies flexbox layout to the body for easier centering of child elements.
2. `justify-content: center;` - Centers child elements horizontally within the body.
3. `align-items: center;` - Centers child elements vertically.
4. `min-height: 100vh;` - Sets the minimum height of the body to the full height of the viewport.
5. `background: linear-gradient(to bottom right, #D9E3D0, #B7C9A4);` - Applies a soft gradient background that transitions from a light greenish color to a darker one.

### Container Styles

```css
.container {
    width: 90%; /* Responsive width */
    max-width: 600px; /* Increased maximum width for a larger container */
    background-color: #FFF; /* White background for the container */
    border-radius: 20px; /* Increased rounding for a softer look */
    padding: 30px; /* Increased inner spacing */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
    text-align: center; /* Centered text */
}
```

1. `width: 90%;` - Sets the width of the container to 90% of its parent element (the body).
2. `max-width: 600px;` - Restricts the maximum width of the container to 600 pixels.
3. `background-color: #FFF;` - Sets the background color of the container to white.
4. `border-radius: 20px;` - Rounds the corners of the container to make it visually softer.
5. `padding: 30px;` - Adds internal space inside the container.
6. `box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);` - Creates a shadow effect to give the container depth.
7. `text-align: center;` - Centers the text within the container.

### Title and Text Styles

```css
.title, .label, .datetime {
    color: #3E4C40; /* Dark green color for titles, labels, and date/time */
}

.title {
    font-size: 32px; /* Increased title font size for prominence */
    font-weight: bold; /* Bold title */
    margin-bottom: 20px; /* Space below title */
}

.datetime {
    color: #7D7D7D; /* Grey color for date/time */
    font-size: 16px; /* Slightly larger font size for date/time */
    margin-bottom: 20px; /* Space below date/time */
}
```

1. `.title, .label, .datetime` - Sets the text color to dark green for these elements.
2. `.title` - Increases font size, makes it bold, and adds space below.
3. `.datetime` - Changes text color to grey and adjusts font size with space below.

### Input Section Styles

```css
.input-section {
    display: flex; /* Use flexbox for alignment */
    flex-direction: column; /* Stack elements vertically */
    align-items: stretch; /* Stretch elements to full width */
    margin-bottom: 30px; /* Increased space below input section */
}

.input-container {
    display: flex; /* Use flexbox for the input and button */
    align-items: center; /* Center items vertically */
}
```

1. `.input-section` - Uses flexbox to stack child elements vertically and stretches them to fill the width, with spacing below.
2. `.input-container` - Creates a flex container for input and button, centering them vertically.

### Input Field Styles

```css
label {
    margin-bottom: 10px; /* Space below label */
    font-size: 16px; /* Font size for label */
}

#todo-input {
    flex: 1; /* Allow input to take available space */
    padding: 15px; /* Increased inner padding for comfort */
    border: 2px solid #3E4C40; /* Dark green border */
    border-radius: 8px; /* Rounded corners */
    font-size: 18px; /* Slightly larger font size */
    transition: border-color 0.3s, box-shadow 0.3s; /* Smooth transitions */
    color: #3E4C40; /* Text color */
    outline: none; /* Remove default outline on focus */
}

#todo-input:focus {
    border-color: #556B2F; /* Lighter green border on focus */
    box-shadow: 0 0 10px rgba(85, 107, 47, 0.8); /* Glowing effect */
}
```

1. `label` - Adds spacing below labels and sets their font size.
2. `#todo-input` - Styles the input field, allowing it to grow, adding padding, a dark green border, rounded corners, and defining text color.
3. `#todo-input:focus` - Changes the border color and adds a glowing effect when the input field is focused.

### Button Styles

```css
#add-btn {
    margin-left: 10px; /* Space between input and button */
    padding: 15px 20px; /* Increased padding for button */
    background-color: #556B2F; /* Dark green background */
    border: none; /* No border */
    color: white; /* White text color */
    font-size: 24px; /* Larger font size */
    font-weight: bold; /* Bold font */
    border-radius: 8px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s; /* Smooth transition */
}

#add-btn:hover {
    transform: scale(1.05); /* Scale up on hover */
    background-color: #3E4C40; /* Darker green on hover */
}
```

1. `#add-btn` - Styles the add button with padding, a dark green background, white text, and rounded corners. Adds a pointer cursor and defines smooth transitions for hover effects.
2. `#add-btn:hover` - Applies a scaling effect and darkens the button's background color on hover.

### To-Do List Styles

```css
#todo-list {
    list-style: none; /* Remove default list style */
    max-height: 300px; /* Maximum height for scrolling */
    overflow-y: auto; /* Scrollable if overflowing */
    padding: 0; /* Remove default padding */
}

.todo-item {
    background-color: #E8E8E4; /* Light grey background for tasks */
    color: #3E4C40; /* Dark green text color */
    padding: 12px; /* Inner padding */
    border-radius: 8px; /* Rounded corners */
    display: flex; /* Flexbox for alignment */
    align-items: center; /* Center items vertically */
    justify-content: space-between; /* Space between content and buttons */
    margin-bottom: 10px; /* Space between tasks */
    animation: slideIn 0.4s forwards; /* Slide in animation */
}
```

1. `#todo-list` - Styles the to-do list, removing default list styles and setting a maximum height for scrolling.
2. `.todo-item` - Styles each to-do item with a light grey background, dark green text, padding, rounded corners, and flexbox for alignment. It includes a slide-in animation effect.

### Animation Styles

```css
@keyframes slideIn {
    from {
        opacity: 0; /* Initially hidden */
        transform: translateX(-100%); /* Slide in from left */
    }
    to {
        opacity: 1; /* Fully visible */
        transform: translateX(0); /* Reset transformation */
    }
}
```

1. `@keyframes slideIn` - Defines a keyframe animation that changes the opacity from 0 (hidden) to 1 (visible) while sliding the element in from the left.

### Button Styles for Task Actions

```css
.edit-btn, .delete-btn, .complete-btn {
    background-color: #3E4C

40; /* Dark green background */
    border: none; /* No border */
    color: white; /* White text */
    font-weight: bold; /* Bold font */
    border-radius: 5px; /* Rounded corners */
    padding: 5px 10px; /* Inner padding */
    cursor: pointer; /* Pointer cursor */
    transition: background-color 0.2s, transform 0.2s; /* Smooth transitions */
}

/* Hover effects for buttons */
.edit-btn:hover, .delete-btn:hover, .complete-btn:hover {
    background-color: #556B2F; /* Darker green on hover */
    transform: scale(1.1); /* Scale up on hover */
}
```

1. `.edit-btn, .delete-btn, .complete-btn` - Styles for buttons to edit, delete, and complete tasks, with a dark green background, white text, and rounded corners. It also includes a pointer cursor and transition effects.
2. The hover effect scales the buttons and changes their background color to a darker shade.

### Completed Task Styles

```css
.completed {
    text-decoration: line-through; /* Strike-through text */
    color: #A9A9A9; /* Light grey color for completed tasks */
}
```

1. `.completed` - Applies a line-through text decoration and light grey color to indicate tasks that are completed.

---
# Line-by-line Code Analysis ( JavaScript )

Sure! Let’s go through the JavaScript code line by line, explaining what each part does and why it’s structured that way.

### 1. Update Date and Time Every Second

```javascript
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
```
- **Function Declaration**: This declares a function called `updateDateTime`. It updates the displayed date and time.
- **Getting Current Date**: `const now = new Date();` creates a new Date object representing the current date and time.
- **Formatting Options**: The `options` object specifies how to format the date and time for display (e.g., showing the year, month, day, hour, minute, second, and using a 12-hour clock).
- **Display Date and Time**: `document.getElementById('current-datetime').innerText = ...` updates the inner text of the element with the ID `current-datetime` to show the formatted date and time.

### 2. Initial Call and Interval for Updating Date and Time

```javascript
updateDateTime(); // Call the function once to set initial date and time
setInterval(updateDateTime, 1000); // Update date and time every second
```
- **Initial Call**: `updateDateTime();` is called to set the initial date and time when the script runs.
- **Set Interval**: `setInterval(updateDateTime, 1000);` sets a timer that calls `updateDateTime` every second (1000 milliseconds), ensuring the displayed time stays current.

### 3. Create a New Task Element

```javascript
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
```
- **Function Declaration**: This function, `createTaskElement`, takes `taskText` as an argument to create a new task.
- **Creating a List Item**: `const todoItem = document.createElement('li');` creates a new `<li>` (list item) element for the task.
- **Setting Class Name**: `todoItem.className = 'todo-item';` assigns a class to the new list item for CSS styling.
- **Inner HTML Structure**: The inner HTML contains a span for the task text and three buttons for completing, editing, and deleting the task.
- **Return the Item**: The function returns the newly created list item, allowing it to be appended to the task list later.

### 4. Add a New Task

```javascript
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
```
- **Function Declaration**: The `addTask` function is responsible for adding a new task to the list.
- **Getting Input Value**: `const input = document.getElementById('todo-input');` retrieves the input element where the user types the task.
- **Trimming Input**: `const taskText = input.value.trim();` gets the input value and removes any leading or trailing whitespace.
- **Input Validation**: The `if (!taskText)` block checks if the task text is empty. If it is, it alerts the user and exits the function to prevent adding an empty task.
- **Creating and Appending Task**: `createTaskElement(taskText)` creates a new task element with the provided text, and `todoList.appendChild(todoItem);` adds this new task to the list displayed on the webpage.
- **Clear Input Field**: Finally, `input.value = "";` clears the input field after adding the task, preparing it for the next entry.

### 5. Handle Task Actions (Complete, Edit, Delete)

```javascript
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
```
- **Function Declaration**: `handleTaskAction` manages user interactions with the tasks (completing, editing, and deleting).
- **Event Target**: `const target = event.target;` retrieves the element that triggered the event (the button that was clicked).
- **Finding the Task Item**: `const todoItem = target.closest('.todo-item');` locates the closest parent list item associated with the button clicked.
- **Checking for Valid Item**: The `if (!todoItem) return;` statement exits the function if no valid task item is found.
- **Complete Action**: If the complete button is clicked, the class `completed` is toggled, which visually indicates completion. A checkmark is appended to the task text based on the toggle state.
- **Edit Action**: If the edit button is clicked, a prompt appears to allow the user to change the task text. The old checkmark is removed from the prompt to avoid confusion.
- **Delete Action**: Clicking the delete button removes the task item from the list.

### 6. Event Listeners for User Interaction

```javascript
document.getElementById('add-btn').addEventListener('click', addTask); // Add task on button click
document.getElementById('todo-list').addEventListener('click', handleTaskAction); // Handle clicks on the todo list
```
- **Add Button Listener**: The first line adds a click event listener to the button with ID `add-btn`, triggering the `addTask` function when clicked. This connects the UI button to the task addition functionality.
- **Todo List Click Listener**: The second line adds a click event listener to the entire todo list, delegating the handling of button clicks within the list to the `handleTaskAction` function. This allows for efficient management of task actions (complete, edit, delete) without needing separate listeners for each button.
