console.log('working');

const taskContainer = document.getElementById('task-container');
const form = document.getElementById('task-form')

// fetching tasks from localstorage

function fetchTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    taskContainer.innerHTML = ''

    // looping through tasks to display
    tasks.forEach(task => {
        let description = task.description,
            status = task.status;

        taskContainer.innerHTML += `<div class="task">
            <input type="checkbox"> ${description} <br>
        <div>`
    })
}

function saveTask(e) {
    e.preventDefault()

    const description = document.getElementById('task-input').value;
    console.log(description);

    const task = {
        description: description,
        status: 'undone'
    }

    // saving to localStorage
    if(window.localStorage) {
        // when localStorage is empty 
        if(localStorage.getItem('tasks') === null) {
            let tasks = [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks))
        } else {
            let tasks = JSON.parse(localStorage.getItem('tasks'));  // set tasks to tasks in localstorage
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }

    fetchTasks()

    form.reset();



}

form.addEventListener('submit', saveTask);