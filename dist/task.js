"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markTaskAsCompleted = exports.removeTask = exports.findTask = exports.addTask = void 0;
function addTask(task, toDoList) {
    let previousLength = toDoList.length;
    let check = false;
    toDoList.push(task);
    if (previousLength < toDoList.length) {
        check = true;
    }
    return check;
}
exports.addTask = addTask;
function findTask(toDoList, id, name) {
    let taskFound;
    if (id != undefined) {
        taskFound = toDoList.find((taskFetch) => taskFetch.id == id);
    }
    else if (name != undefined) {
        taskFound = toDoList.find((taskFetch) => taskFetch.name.toLowerCase() == name.toLowerCase());
    }
    else {
        taskFound = undefined;
    }
    return taskFound;
}
exports.findTask = findTask;
function removeTask(toDoList, id, task) {
    let taskToDelete = undefined;
    if (id != undefined) {
        taskToDelete = toDoList.find((taskFetch) => taskFetch.id == id);
    }
    else if (task != undefined) {
        taskToDelete = toDoList.find((taskFetch) => taskFetch == task);
    }
    if (taskToDelete != undefined) {
        toDoList.splice(toDoList.indexOf(taskToDelete), 1);
    }
    return taskToDelete;
}
exports.removeTask = removeTask;
function markTaskAsCompleted(toDoList, id) {
    let taskToComplete = findTask(toDoList, id);
    let check;
    if (taskToComplete != undefined) {
        let index = toDoList.indexOf(taskToComplete);
        toDoList[index].complete = true;
        check = true;
    }
    else {
        check = false;
    }
    return check;
}
exports.markTaskAsCompleted = markTaskAsCompleted;
