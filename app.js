
(function() {
    console.log('working')

    const form = document.querySelector('#task-form');
    const taskInput = document.querySelector('#task-input');
    const taskContainer = document.querySelector('#task-container')

    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const task = taskInput.value
        const htmlContent = `<div class="task"><input class="checkbox" type="checkbox">${task}</div>`
        taskContainer.insertAdjacentHTML('afterbegin', htmlContent);

        // console.log(htmlContent)
        taskInput.value = ''    //SETTING THE TASK INPUT TO EMPTY

        const checkboxes = Array.from(document.getElementsByClassName('checkbox'));
        console.log(checkboxes);

        let done = false;
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if(checkbox.checked == true) {
                done = true;

                console.log('checked')
            }
        })

    })
}())