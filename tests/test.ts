import {Task, addTask, findTask, markTaskAsCompleted, removeTask} from "../src/task"

let task1 : Task =  {
    id: 1,
    name: "Finish README file",
    complete: false,
}

let toDoListTesting: Task[] = [task1];

let task2: Task = {
    id: 2,
    name: "Finish test",
    complete: false,
}

test('I need to add a task', () => {
    let check = addTask(task2, toDoListTesting);
    expect(check).toBeTruthy;
    expect(findTask(toDoListTesting, 2)).toBe(task2);
});

test('I need to find a task', () => {
    let taskFound:Task | undefined = findTask(toDoListTesting, 1);
    expect(taskFound).toBe(task1);

    taskFound = findTask(toDoListTesting, undefined, "Finish test");
    expect(taskFound).toBe(task2);
});

test('I need to mark a task as complete', () => {
    let idToComplete = 2;

    let check: boolean = markTaskAsCompleted(toDoListTesting, idToComplete);
    expect(check).toBeTruthy();

    expect(toDoListTesting[idToComplete - 1].complete).toBeTruthy();
});

test('I need to remove a task', () => {
    let taskFound = findTask(toDoListTesting, 2);
    let taskRemoved = removeTask(toDoListTesting, 2);
    
    expect(taskRemoved).toBe(taskFound);
    expect(findTask(toDoListTesting, undefined, "Finish test")).toBe(undefined);
});

