
console.log('working');

const todoInput = document.querySelector('#taskInput');
const form = document.querySelector('form');

form.addEventListener('submit', submitTodo);

function submitTodo(e) {
    e.preventDefault();

    const todo = todoInput.value;
    console.log(todo)
}