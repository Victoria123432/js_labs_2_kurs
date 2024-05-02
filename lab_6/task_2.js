let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, done: false });
        saveTasks();
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Будь ласка, введіть завдання!");
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    displayTasks();
}

function saveTasks() {
    const taskString = tasks.map(task => task.text).join("|"); // Перетворюємо масив в рядок
    localStorage.setItem("tasks", taskString); // Зберігаємо рядок у локальному сховищі
}


// function loadTasks() {
//     const storedTasks = localStorage.getItem("tasks");
//     if (storedTasks) {
//         tasks = JSON.parse(storedTasks);
//         displayTasks();
//     }
// }
function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        // Перетворюємо рядок у масив
        const taskArray = storedTasks.split("|"); // Розділяємо рядок за певним роздільником
        tasks = taskArray.map(task => ({ text: task, done: false })); // Створюємо масив об'єктів
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <span>${task.text}</span>
            <div class="buttons">
                <button class="edit-btn" onclick="editTask(${index})">Редагувати</button>
                <button class="delete-btn" onclick="removeTask(${index})">Видалити</button>
            </div>
        `;
        if (task.done) {
            li.classList.add("done");
        }
        li.onclick = () => toggleDone(index);
        taskList.appendChild(li);
    });
}


// Load tasks on page load
loadTasks();
