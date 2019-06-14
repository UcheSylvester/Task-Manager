console.log('working...');

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskContainer = document.querySelector('#task-container');
let tasks = [];
let htmlContent = ''


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = taskInput.value;
    tasks.push(task)
    taskInput.value = '';
    console.log(tasks)

    displayTasks(tasks)
});

function displayTasks(tasks) {
    htmlContent = tasks.map(task => `
        <div class="task">
            <input type="checkbox">${task} <br>
        </div>
    `).join('')


    if (taskContainer.hasChildNodes()) {
        taskContainer.innerHTML = '';
        taskContainer.insertAdjacentHTML('afterbegin', htmlContent);
    } else {
        taskContainer.insertAdjacentHTML('afterbegin', htmlContent);

    }

}