console.log('working');

const taskContainer = document.querySelector('.task-container');

// fetching tasks from localstorage

function fetchTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    taskContainer.innerHTML = ''

    // looping through tasks to display
    tasks.forEach(task => {
        let description = task.description,
            status = 'done';

        taskContainer.innerHTML += `<div class="task">
            <input type="checkbox"> ${description} <br>
        <div>`
    })
}