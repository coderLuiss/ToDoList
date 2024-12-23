const addTaskButton = document.getElementById('addTaskButton');
const cancelNewTaskButton = document.getElementById('closePopup');
const submitNewTaskButton = document.getElementById('submitButton');
const taskList = document.getElementById('taskList');
const completedTaskButton = document.getElementById('complete-task-button');
const tasksArray = [];

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
    if(document.getElementById('newTaskPriority').value === 'high') {
        inputTaskTitle.value = "!!!"  + inputTaskTitle.value;
    } else if(document.getElementById('newTaskPriority').value === 'medium') {
        inputTaskTitle.value = "!!"  + inputTaskTitle.value;
    } else {
        inputTaskTitle.value = "!"  + inputTaskTitle.value;
    }
    newTask.innerHTML = `
    <p>
    <span class="task-title">${inputTaskTitle.value}</span><br>
    <span class="task-details">${inputTaskDetails.value}</span>
    </p>
    <button id="complete-task-button"></button>`;    
    
    const newTaskData = {
        title: inputTaskTitle.value,
        details: inputTaskDetails.value,
        priority: document.getElementById('newTaskPriority').value
    }
    tasksArray.push(newTaskData);

    const completedTaskButton = newTask.querySelector('#complete-task-button');
    if (completedTaskButton) {
        completedTaskButton.addEventListener('click', (event) => {
        event.target.style.backgroundColor = "rgb(125, 165, 252)";
        event.target.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.5)";
        event.target.style.padding = "5px";
        setTimeout(() => {
            taskList.removeChild(newTask);
        }, 2000);
    });
    }
    taskList.appendChild(newTask);
    document.getElementById('newTaskFormContainer').style.display = 'none';
    inputTaskTitle.value = '';
    inputTaskDetails.value = '';
    console.log(tasksArray);
}



