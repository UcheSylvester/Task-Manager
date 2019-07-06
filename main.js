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
            id = task.id;

        taskContainer.innerHTML += `<div class="task">
            <input type="checkbox"> <span>${description}</span> 
            <button class="delete" id="${id}" onclick="deleteTask('${id}')">Delete</button>
            <br>
        <div>
        `
    })

    const checkboxes = document.querySelectorAll("input[type='checkbox']")

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', markAsDone))
}

// WORK ON THIS
function markAsDone() {

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks)

    const taskDescription = this.nextElementSibling;
    const parent = this.parentElement;
    const id = taskDescription.nextElementSibling.id;
    console.log(id)

    tasks.forEach(task => {
        if(task.id === id) {
            // console.log('processed')
            task.status = 'done';
            // console.log(task)
             if(task.status === 'done') {

                if(this.checked === true) {
                    taskDescription.classList.add('task-done')
                    parent.classList.add('parent-done')
                } else {
                    taskDescription.classList.remove('task-done')
                    parent.classList.remove('parent-done')
                }

             }
        }
    })

    // if(this.checked === true) {
    //     taskDescription.classList.add('task-done')
    //     parent.classList.add('parent-done')
    // } else {
    //     taskDescription.classList.remove('task-done')
    //     parent.classList.remove('parent-done')
    // }
    
}


function saveTask(e) {
    e.preventDefault()

    const id = chance.guid()
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



// Deleting Task
function deleteTask(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // console.log(tasks);

    // looping through the array of tasks to delete task
    tasks.forEach((task,index, tasks) => {
        if(task.id === id) {
            // task.status = 'done'  //marking task as done before deleting
            tasks.splice(index, 1);
            console.log(task)
        }
    })
    // pushing the modified aray of task back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))
    fetchTasks()
    
}



form.addEventListener('submit', saveTask);