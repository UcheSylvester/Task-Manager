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
    todoInput.value = '';

    save(todos)

    // displaying todos
    // displayTodo(todos);
}


function displayTodo(todos) {
    // console.log(todos);
    let htmlContent = todos.map(todo => 
            `<div class="task">
                <input class="checkbox" name="tasks" type="checkbox">
                <label for="${todo}">${todo}</label>
            </div>`
        ).join('')

    if(todoContainer.hasChildNodes()) {
        todoContainer.innerHTML = '';
        todoContainer.insertAdjacentHTML('beforeend', htmlContent)
    } else {
        todoContainer.insertAdjacentHTML('beforeend', htmlContent)
    }

    // todoContainer.insertAdjacentHTML('beforeend', htmlContent)

}

// saving and retriving todos from localStorage
function save(todos) {
    const todosString = JSON.stringify(todos)
    // console.log(todosString);
    window.localStorage.setItem('tasks', todosString);  //saving todos to localstorage

    const savedTodos = JSON.parse(window.localStorage.getItem('tasks'));  //getting them back and converting back to array to be displayed
    console.log(savedTodos, typeof savedTodos)
    
    displayTodo(savedTodos)
}

