"use strict";
class Task {
    constructor(id, name, isComplete = false) {
        this._id = id;
        this._name = name;
        this._isComplete = isComplete;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get isComplete() {
        return this._isComplete;
    }
    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set isComplete(isComplete) {
        this._isComplete = isComplete;
    }
    static addTask(task, toDoList) {
        let previousLength = toDoList.length;
        let check = false;
        toDoList.push(task);
        if (previousLength < toDoList.length) {
            check = true;
        }
        return check;
    }
    static findTask(toDoList, id, name) {
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
    static removeTask(toDoList, id, task) {
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
    static markTaskAsCompleted(toDoList, id) {
        let taskToComplete = this.findTask(toDoList, id);
        let check;
        if (taskToComplete != undefined) {
            let index = toDoList.indexOf(taskToComplete);
            toDoList[index].isComplete = true;
            check = true;
        }
        else {
            check = false;
        }
        return check;
    }
}
export {Task};