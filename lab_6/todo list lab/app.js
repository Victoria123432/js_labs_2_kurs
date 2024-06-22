// app.js

// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');

    // Apply sorting
    const sortBy = document.getElementById('sortOptions').value;

    if (sortBy === 'status') {
        tasks.sort((a, b) => Number(a.completed) - Number(b.completed));
    }

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;

        const taskDate = new Date(task.dateAdded);
        const formattedDate = `${taskDate.toLocaleDateString()} ${taskDate.toLocaleTimeString()}`;

        taskItem.innerHTML = `
            <span class="task-text" contenteditable="true">${task.text}</span>
            <span class="task-date">${formattedDate}</span>
            <button onclick="toggleCompletion(${index})">
                <i class="fa fa-check"></i>
            </button>
            <button onclick="removeTask(${index})">
                <i class="fa fa-times"></i>
            </button>
        `;

        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const currentDate = new Date();
        tasks.push({ text: task, completed: false, dateAdded: currentDate });

        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';

        loadTasks();

        const taskList = document.getElementById('taskList');
        const lastTaskItem = taskList.children[taskList.children.length - 1];

        lastTaskItem.classList.add('visible');
    }
}

// Function to remove a task
function removeTask(index) {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || []

	const taskList = document.getElementById('taskList')
	const taskItem = taskList.children[index]

	taskItem.classList.remove('visible')

	setTimeout(() => {
		tasks.splice(index, 1)

		localStorage.setItem('tasks', JSON.stringify(tasks))

		loadTasks()
	}, 400)
}

// Function to toggle task completion
function toggleCompletion(index) {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || []

	tasks[index].completed = !tasks[index].completed

	localStorage.setItem('tasks', JSON.stringify(tasks))

	loadTasks()
}

// Function to edit a task
function editTaskText(index) {
    const taskTextElement = document.querySelectorAll('.task-text')[index];
    const newText = taskTextElement.innerText;
    editTask(index, newText);
}
document.querySelectorAll('.task-text').forEach((taskTextElement, index) => {
    taskTextElement.addEventListener('dblclick', () => editTaskText(index));
});
// Event listeners
document.getElementById('addTaskBtn').addEventListener('click', addTask)
document.getElementById('sortOptions').addEventListener('change', loadTasks)

// Load tasks on page load
loadTasks()
