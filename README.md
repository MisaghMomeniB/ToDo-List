![Screenshot from 2024-11-15 10-37-18](https://github.com/user-attachments/assets/c9068596-d185-413d-8056-7c0ef85aabe9)

![Screenshot from 2024-11-15 10-37-07](https://github.com/user-attachments/assets/c8102f8f-a1c7-41ff-954e-4622c7c08d21)

### HTML (`index.html`)

This file defines the main structure of the To-Do List application.

1. **DOCTYPE and Base Structure**
   - `<!DOCTYPE html>`: Sets the document type to HTML5.
   - `<html lang="en">`: Begins the HTML document, setting the language to English for accessibility.

2. **Head Section**
   - `<meta charset="UTF-8">`: Sets character encoding to UTF-8.
   - `<meta name="viewport"...>`: Sets the viewport for proper scaling on different devices.
   - `<title>ToDo List with Timestamp</title>`: Title displayed on the browser tab.
   - `<link rel="stylesheet" href="styles.css">`: Links an external CSS file for styling.

3. **Body Content**
   - `<div class="container">`: A div that centers the main app content.
   - `<h1 class="title">ToDo List</h1>`: Main title of the app.
   - `<p class="datetime" id="current-datetime"></p>`: Displays the current date and time, dynamically updated.

4. **New Task Input Section**
   - `<div class="input-section">`: Main section that contains the task input.
   - `<label for="todo-input">New Task</label>`: Label for the input for accessibility.
   - `<div class="input-container">`: Groups the input field and the button.
   - `<input type="text" id="todo-input"...>`: Input field for entering a task name.
   - `<button id="add-btn">Add Task</button>`: Button that adds the new task to the list.

5. **To-Do List Container**
   - `<ul id="todo-list"></ul>`: An unordered list where tasks will be displayed.

6. **JavaScript Script**
   - `<script src="script.js"></script>`: Links the JavaScript file to manage dynamic behaviors.

---

### CSS (`styles.css`)

The CSS file provides the layout, colors, and animations for the page.

1. **General Reset and Base Font**
   - `* {...}`: Resets all elements and sets the general font.

2. **Body Layout**
   - `body {...}`: Centers the container and applies a gradient background.

3. **Container Styling**
   - `.container {...}`: Styles the main app box, including width, padding, rounded corners, and shadow.

4. **Title and DateTime**
   - `.title {...}`: Styles the title with color, font size, and margin.
   - `.datetime {...}`: Styles the current date/time displayed below the title.

5. **New Task Input Section**
   - `.input-section {...}`: Provides spacing and alignment for the input and button.
   - `#todo-input {...}`: Styles the task input field, adding color and shadow on focus.
   - `#add-btn {...}`: Styles the add button with hover and scale effects.

6. **To-Do List and Task Item**
   - `#todo-list {...}`: Sets list styling, scroll limits, and padding.
   - `.todo-item {...}`: Styles each task item with background, padding, and flex alignment.
   - `.timestamp {...}`: Styles the timestamp shown next to each task.

7. **Button Styles**
   - `.edit-btn`, `.delete-btn`, `.complete-btn {...}`: Styles action buttons with hover effects.
   - `.completed .task-text {...}`: Applies a strikethrough and gray color to completed tasks.

---

### JavaScript (`script.js`)

The JavaScript code handles functionality like updating the date/time, adding tasks, and managing task actions.

1. **Update Date and Time**
   - `function updateDateTime() {...}`: Fetches the current date and time and updates it in `#current-datetime`.
   - Uses `setInterval(updateDateTime, 1000);` to refresh the time every second.

2. **Create Task Element**
   - `function createTaskElement(taskText) {...}`: Creates a new `li` element for each task:
     - `taskText`: The main content of the task.
     - `timestamp`: The time when the task was created.
     - Action buttons (complete, edit, delete) that are added to each task.

3. **Add Task**
   - `function addTask() {...}`: Adds a task to the list:
     - Retrieves the input value and trims spaces.
     - If empty, alerts the user; otherwise, adds the task to `#todo-list`.

4. **Handle Task Actions**
   - `function handleTaskAction(event) {...}`: Manages interactions with each task:
     - **Complete** - Toggles the `.completed` class to apply a strikethrough.
     - **Edit** - Prompts the user to edit the task text.
     - **Delete** - Removes the task from the list.

5. **Event Listeners**
   - Adds event listeners to `#add-btn` and `#todo-list` for adding and managing tasks.
