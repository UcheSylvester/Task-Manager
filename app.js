'use strict';

(function() {
    console.log('working')

    const form = document.querySelector('#task-form');
    const taskInput = document.querySelector('#task-input');
    const taskContainer = document.querySelector('#todo-container');
    let tasks = []

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const task = taskInput.value;
        const htmlContent = `
            <div class="task">
                <input class="checkbox" name="tasks" type="checkbox">
                <label for="${task}">${task}</label>
            </div>
        `
        taskContainer.insertAdjacentHTML('beforeend', htmlContent);
        taskInput.value = ''  //setting the input to empty after each TO-DO;

        // marking each task when done

        const checkboxes = document.querySelectorAll('input[type]');

        checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => e.target.checked ? e.target.nextElementSibling.classList.add('done') : e.target.nextElementSibling.classList.remove('done')))
        

        // console.log(tasks)
        /*
        The above can be done with the one-liner below
        NOTE: with arrow function as an event callback, we loss access to  `this`
        */
        // checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => (e.target.checked) ? e.target.nextElementSibling.classList.add('done') : e.target.nextElementSibling.classList.remove('done')));


    })

}())
