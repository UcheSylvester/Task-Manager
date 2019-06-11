console.log('working...');

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskContainer = document.querySelector('#task-container');
let tasks = [];


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const task = taskInput.value;
    tasks.push(task)
    taskInput.value = '';
    console.log(tasks)
})