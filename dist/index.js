"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
let taskList = [];
const list = document.getElementById("lista");
let task1 = new task_1.Task(1, "Finish README file");
let task2 = new task_1.Task(2, "Finish test");
taskList.push(task1);
taskList.push(task2);
function showList() {
    let message = "";
    for (let i in taskList) {
        message += `${taskList[i].id}.- ${taskList[i].name}. Completed:${(taskList[i].isComplete ? "Si" : "No")} <br>`;
    }
    if (list != null) {
        list.innerHTML = message;
    }
}
function addButton() {
    let id = 0;
    if (taskList.length != 0) {
        id = taskList[taskList.length - 1].id + 1;
    }
    let name = prompt("Introduce la tarea que quieres añadir");
    if (name != null) {
        let task3 = new task_1.Task(id, name);
        task_1.Task.addTask(task3, taskList);
    }
    else {
        alert("No has especificado ninguna tarea");
    }
}
function removeButton() {
    let id = prompt("Introduce la id de la tarea a eliminar");
    if (id != null) {
        task_1.Task.removeTask(taskList, parseInt(id));
    }
    else {
        alert("Id no valida");
    }
}
function completeTaskButton() {
    let id = prompt("Introduce la id de la tarea a marcar como completada");
    if (id != null) {
        task_1.Task.markTaskAsCompleted(taskList, parseInt(id));
    }
    else {
        alert("Id no valida");
    }
}
window.addEventListener('load', function () {
    showList();
});
document.getElementById("add")?.addEventListener('click', function () {
    addButton();
    showList();
});
document.getElementById("remove")?.addEventListener('click', function () {
    removeButton();
    showList();
});
document.getElementById("complete")?.addEventListener('click', function () {
    completeTaskButton();
    showList();
});
