'use strict';

console.log('working');

const form = document.querySelector('form');
const todoInput = document.querySelector('#task-input');
const todoContainer = document.querySelector('#task-container')
let todos = [];


form.addEventListener('submit', submitTodo);

function submitTodo(e) {
    e.preventDefault();
    getTodos()
}

function getTodos() {
    // getting todos
    const todo = todoInput.value;
    todos.push(todo)

    // clearing the input
    todoInput.value = ''
    // console.log(todos);
    displayTodo(todos)
}


function displayTodo(todos) {
    console.log(todos);
    let htmlContent = todos.map(todo => 
            `<div class="task">
                <input class="checkbox" name="tasks" type="checkbox">
                <label for="${todo}">${todo}</label>
            </div>`
        ).join('')

    todoContainer.insertAdjacentHTML('beforebegin', htmlContent)
}