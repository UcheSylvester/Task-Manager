"use strict";

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
            status = task.status,
            id = task.Id;

        taskContainer.innerHTML += `<div class="task">
            <input type="checkbox"> ${description} 
            <button class="delete" onclick="deleteTask(${id})">Delete</button>
            <br>
        <div>
        `
    })
}

function saveTask(e) {
    e.preventDefault()
    
    // calculating id
    let id = 0;
    let increasing = true;
    let increment = 1;

    function increaseId() {
        if(increasing) {
            id += increment
            return id;
        }
    }

    // const taskId = increaseId()
    const description = document.getElementById('task-input').value;
    console.log(description);

    const task = {
        description: description,
        status: 'undone',
        id: id
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

let number = 0;

function increaseNumber() {
    return number += 1;
}


/*
TODO:

1. Delete tasks from localStorage
     generate id for each task (deleteButton)
     use the id to check for the task that matches the id and delete it

2.  Mark task as done using the the same id

*/


// Deleting Task
function deleteTask(id) {

}

form.addEventListener('submit', saveTask);