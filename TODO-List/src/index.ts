import {Task, addTask, findTask, removeTask} from "../src/task"

let taskList: Task[] = [];
const list = document.getElementById("lista");

let task1 : Task =  {
    id: 1,
    name: "Finish README file",
    complete: false,
}

let task2: Task = {
    id: 2,
    name: "Finish test",
    complete: false,
}

taskList.push(task1);
taskList.push(task2);

function showList(){
    let message:string = "";

    for(let i in taskList){
        message += `${taskList[i].id}.- ${taskList[i].name}. Completed:${(taskList[i].complete ? "Si" : "No")} <br>`
    }

    if(list != null){
        list.innerHTML = message;
    }
}

function addButton(){
    let id:number = taskList.length + 1;
    let name:string | null = prompt("Introduce la tarea que quieres añadir");
    let complete:boolean = false;

    if(name != null){
        let task3 : Task = {
            id: id,
            name: name,
            complete: complete,
        }

        addTask(task3, taskList);
    }else{
        alert("No has especificado ninguna tarea");
    }

}

function removeButton(){

}

function markAsComplete(){
    let idSelected = prompt("Introduce la ID de la tarea a marcar como completada");
    let taskToComplete:Task = findTask(taskList, idSelected);
}

window.addEventListener('load', function() {
    showList();
});

document.getElementById("add")?.addEventListener('click', function(){
    addButton();
    showList();
})

document.getElementById("remove")?.addEventListener('click', function(){
    removeButton();
    showList();
})