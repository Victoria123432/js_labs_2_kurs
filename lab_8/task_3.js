const tasks = document.querySelectorAll('.task')
const columns = document.querySelectorAll('.column')
const addTaskButton = document.getElementById('addTaskButton')
const newTaskInput = document.getElementById('newTask')
const todoColumn = document.getElementById('todo')

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart)
    task.addEventListener('dragend', dragEnd)
})

columns.forEach(column => {
    column.addEventListener('dragover', dragOver)
    column.addEventListener('dragenter', dragEnter)
    column.addEventListener('dragleave', dragLeave)
    column.addEventListener('drop', drop)
})

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id)
    e.target.classList.add('dragging')
}

function dragEnd(e) {
    e.target.classList.remove('dragging')
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    e.target.classList.add('drag-over')
}

function dragLeave(e) {
    e.target.classList.remove('drag-over')
}

function drop(e) {
    e.target.classList.remove('drag-over')
    const id = e.dataTransfer.getData('text/plain')
    const draggable = document.getElementById(id)
    e.target.appendChild(draggable)
}

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value
    if (taskText.trim()) {
        const newTask = document.createElement('div')
        newTask.classList.add('task')
        newTask.setAttribute('draggable', 'true')
        newTask.textContent = taskText
        newTask.id = 'task' + (document.querySelectorAll('.task').length + 1)
        
        newTask.addEventListener('dragstart', dragStart)
        newTask.addEventListener('dragend', dragEnd)

        todoColumn.appendChild(newTask)
        newTaskInput.value = ''
    }
})
