const addTaskButton = document.getElementById('addTaskButton');
const cancelNewTaskButton = document.getElementById('closePopup');
const submitNewTaskButton = document.getElementById('submitButton');
const taskList = document.getElementById('taskList');
const completedTaskButton = document.getElementById('complete-task-button');
const sortTaskListButton = document.getElementById('SortButton');
let tasksArray = [];

// Opens the popup form to add new TODO task to list
addTaskButton.addEventListener('click', () => {
    document.getElementById('newTaskFormContainer').style.display = 'flex';
});

// Makes the popup form disappear when the cancel button is clicked
cancelNewTaskButton.addEventListener('click', () => {
    document.getElementById('newTaskFormContainer').style.display = 'none';
});

submitNewTaskButton.addEventListener('click', addNewTask); // Activates when submit button is clicked in popup form

function addNewTask(event) {
    if(event) { // Stops default actions if function was called by button click event
        event.preventDefault();
    }
    const inputTaskTitle = document.getElementById('newTaskTitle'); // Gets the value of the input title field from popup form
    if(newTaskTitle.value === "") {
        alert('Please fill out all fields');
        return;
    }
    const newTask = document.createElement('li');
    newTask.classList.add('task');  // Styles the individual task
    const inputTaskDetails = document.getElementById('newTaskDetails'); // Gets the value of the input detail field from popup form
    
    const newTaskData = {
        title: inputTaskTitle.value,
        details: inputTaskDetails.value,
        priority: document.getElementById('newTaskPriority').value
    }
    if(event) { // If function was called by button click event, add new task to tasksArray
        tasksArray.push(newTaskData);
    }

    taskList.appendChild(newTask);  // Adds the new task to the task list on HTML page
    // Append "!" to beggining of task title based on priority level
    if(document.getElementById('newTaskPriority').value === 'high') {
        inputTaskTitle.value = "!!!"  + inputTaskTitle.value;
    } else if(document.getElementById('newTaskPriority').value === 'medium') {
        inputTaskTitle.value = "!!"  + inputTaskTitle.value;
    } else {
        inputTaskTitle.value = "!"  + inputTaskTitle.value;
    }
    // Add individual task title, details, and button to the new task element
    newTask.innerHTML = `
    <p>
    <span class="task-title">${inputTaskTitle.value}</span><br>
    <span class="task-details">${inputTaskDetails.value}</span>
    </p>
    <button id="complete-task-button"></button>`;    
    // Get the button for the task
    const completedTaskButton = newTask.querySelector('#complete-task-button'); 
    // Add event listner for each individual complete-button task, 
    // event listener exist even after addNewTask function finishes
    completedTaskButton.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(125, 165, 252)';
    event.target.style.boxShadow = 'inset 0 0 5px rgba(0, 0, 0, 0.5)';
    event.target.style.padding = '5px';
    // Remove task from tasksArray
    tasksArray = tasksArray.filter(task => task.title !== newTaskData.title);  
    setTimeout(() => {  // Remove task from taskList on screen after 1 second
        taskList.removeChild(newTask);
    }, 1000);
    });

    taskList.appendChild(newTask);  // Adds the new task to the task list on HTML page
    // Closes popup form after new task is added
    document.getElementById('newTaskFormContainer').style.display = 'none';
    // Resets the input fields in the popup form
    inputTaskTitle.value = '';
    inputTaskDetails.value = '';
}

// Calls sort function when sort button is clicked
sortTaskListButton.addEventListener('click', sortTasks);

function sortTasks() {
    // Sorts array of tasks based on priority level
    tasksArray.sort((a, b) => {
        const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    // Removes all tasks from taskList on screen
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // For each task in the sorted array, add the task to the taskList on screen
    tasksArray.forEach(task => {
        document.getElementById('newTaskTitle').value = task.title;
        document.getElementById('newTaskDetails').value = task.details;
        document.getElementById('newTaskPriority').value = task.priority;
        addNewTask();
    });
}
