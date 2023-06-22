export function addTask(task, toDoList) {
    var previousLength = toDoList.length;
    var check = false;
    toDoList.push(task);
    if (previousLength < toDoList.length) {
        check = true;
    }
    return check;
}
export function findTask(toDoList, id, name) {
    var taskFound;
    if (id != undefined) {
        taskFound = toDoList.find(function (taskFetch) { return taskFetch.id == id; });
    }
    else if (name != undefined) {
        taskFound = toDoList.find(function (taskFetch) { return taskFetch.name.toLowerCase() == name.toLowerCase(); });
    }
    else {
        taskFound = undefined;
    }
    return taskFound;
}
export function removeTask(toDoList, id, task) {
    var taskToDelete = undefined;
    if (id != undefined) {
        taskToDelete = toDoList.find(function (taskFetch) { return taskFetch.id == id; });
    }
    else if (task != undefined) {
        taskToDelete = toDoList.find(function (taskFetch) { return taskFetch == task; });
    }
    if (taskToDelete != undefined) {
        toDoList.splice(toDoList.indexOf(taskToDelete), 1);
    }
    return taskToDelete;
}
export function markTaskAsCompleted(toDoList, id) {
    var taskToComplete = findTask(toDoList, id);
    var check;
    if (taskToComplete != undefined) {
        var index = toDoList.indexOf(taskToComplete);
        toDoList[index].complete = true;
        check = true;
    }
    else {
        check = false;
    }
    return check;
}
