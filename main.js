const addTaskButton = document.getElementById('addTaskButton');
const cancelNewTaskButton = document.getElementById('closePopup');
const submitNewTaskButton = document.getElementById('submitButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
    document.getElementById('newTaskFormContainer').style.display = 'flex';
});

cancelNewTaskButton.addEventListener('click', () => {
    document.getElementById('newTaskFormContainer').style.display = 'none';
});

submitNewTaskButton.addEventListener('click', addNewTask);


function addNewTask(event) {
    event.preventDefault();
    const inputTaskTitle = document.getElementById('newTaskTitle');
    if(newTaskTitle.value === "") {
        alert('Please fill out all fields');
        return;
    }

    const newTask = document.createElement('li');
    newTask.classList.add('task');
    
    
    const inputTaskDetails = document.getElementById('newTaskDetails');
    taskList.appendChild(newTask);
    newTask.innerHTML = `
    <p>
    <span class="task-title">${inputTaskTitle.value}</span><br>
    <span class="task-details">${inputTaskDetails.value}</span>
    </p>
    <button class="complete-task-button"></button>`;    
    if(document.getElementById('newTaskPriority').value === 'high') {
        newTask.style.backgroundColor = 'rgb(236, 100, 75)';
    } else if(document.getElementById('newTaskPriority').value === 'medium') {
        newTask.style.backgroundColor = 'rgb(248, 119, 14)';
    } else {
        newTask.style.backgroundColor = 'rgb(237, 219, 60)';
    }
    document.getElementById('newTaskFormContainer').style.display = 'none';
    inputTaskTitle.value = '';
    inputTaskDetails.value = '';
}


