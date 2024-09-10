const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const sortBtn = document.getElementById("sortBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let isEditing = false;
let editingTaskId = null;
let sortAscending = true;

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  if (isEditing) {
    tasks = tasks.map((task) => {
      if (task.id === editingTaskId) {
        return { ...task, text: taskText };
      }
      return task;
    });
    isEditing = false;
    addTaskBtn.textContent = "Add Task";
  } else {
    const newTask = { id: generateDateBasedId(), text: taskText, completed: false };
    tasks.push(newTask);
  }

  taskInput.value = "";
  saveTasksToLocalStorage();
  renderTasks();
});

function generateDateBasedId() {
    const now = new Date();
    const millis = String(now.getMilliseconds()).padStart(3, '0');
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&';
        let randomString = '';
    for (let i = 0; i < 3; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return `${randomString}${millis}`;
  }

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    const idDiv = document.createElement("div");
    idDiv.textContent = task.id;
    idDiv.classList.add("item-div");

    const textDiv = document.createElement("div");
    textDiv.textContent = task.text;
    textDiv.classList.add("item-div");

    const statusDiv = document.createElement("div");
    statusDiv.textContent = task.completed ? "Completed" : "Pending";
    statusDiv.classList.add("status-text");

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => toggleComplete(task.id));

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.classList.add("update-btn");
    updateBtn.addEventListener("click", () => editTask(task.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    actionDiv.appendChild(completeBtn);
    actionDiv.appendChild(updateBtn);
    actionDiv.appendChild(deleteBtn);

    listItem.appendChild(idDiv);
    listItem.appendChild(textDiv);
    listItem.appendChild(statusDiv);
    listItem.appendChild(actionDiv);

    taskList.appendChild(listItem);
  });
}



function toggleComplete(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  saveTasksToLocalStorage();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find((task) => task.id === id);
  taskInput.value = task.text;
  isEditing = true;
  editingTaskId = id;
  addTaskBtn.textContent = "Update Task";
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasksToLocalStorage();
  renderTasks();
}

sortBtn.addEventListener("click", () => {
  sortAscending = !sortAscending;
  sortBtn.classList.toggle("rotate");

  tasks.sort((a, b) => {
    if (sortAscending) {
      return a.text.localeCompare(b.text);
    } else {
      return b.text.localeCompare(a.text);
    }
  });

  renderTasks();
});
