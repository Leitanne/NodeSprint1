import {Task} from "../src/task"

let task1 = new Task(1, "Finish README file");
let toDoListTesting: Task[] = [task1];

let task2 = new Task(2, "Finish test");

test('I need to add a task', () => {
    let check = Task.addTask(task2, toDoListTesting);
    expect(check).toBeTruthy;
    expect(Task.findTask(toDoListTesting, 2)).toBe(task2);
});

test('I need to find a task', () => {
    let taskFound:Task | undefined = Task.findTask(toDoListTesting, 1);
    expect(taskFound).toBe(task1);

    taskFound = Task.findTask(toDoListTesting, undefined, "Finish test");
    expect(taskFound).toBe(task2);
});

test('I need to mark a task as complete', () => {
    let idToComplete = 2;

    let check: boolean = Task.markTaskAsCompleted(toDoListTesting, idToComplete);
    expect(check).toBeTruthy();

    expect(toDoListTesting[idToComplete - 1].isComplete).toBeTruthy();
});

test('I need to remove a task', () => {
    let taskFound = Task.findTask(toDoListTesting, 2);
    let taskRemoved = Task.removeTask(toDoListTesting, 2);
    
    expect(taskRemoved).toBe(taskFound);
    expect(Task.findTask(toDoListTesting, undefined, "Finish test")).toBe(undefined);
});

