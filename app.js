
(function() {
    console.log('working')

    const form = document.querySelector('#task-form');
    const taskInput = document.querySelector('#task-input');
    const taskContainer = document.querySelector('#task-container')

    form.addEventListener('submit', function(e) {
        
        e.preventDefault()

        const task = taskInput.value

        const htmlContent = `<div class="task"><input type="checkbox">${task}</div>`

        taskContainer.insertAdjacentHTML('afterbegin', htmlContent);

        taskInput.value = ''

    })
}())