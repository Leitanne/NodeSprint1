#! /usr/bin/env node
const task = require("../dist/task");
const readline = require('readline');
const toDoList = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const commands = {
    add: addTaskCLI,
    remove: removeTaskCLI,
    show: showTasksCLI,
    complete: markTaskAsCompletedCLI,
    exit: exitCLI,
}

consoleMenu();

function consoleMenu(){
    rl.question('add, remove, show or complete + <task> | to quit: exit: ', (command) => {
        const parts = command.trim().split(' ');
        const commandName = parts[0];
        const args = parts.slice(1);
    
        if(commands.hasOwnProperty(commandName)){
            commands[commandName](args);
        } else{
            console.log('invalid command');
        }
    })
}

function addTaskCLI(args) {
    var nextid = toDoList.length + 1;

    let task1 = {
        id: nextid,
        name: args,
        complete: false
    }

    task.addTask(task1, toDoList);
    showTasksCLI();
}

function showTasksCLI(){
    for(let i in toDoList){
        console.log(`${toDoList[i].id}.- ${toDoList[i].name} | complete: ${toDoList[i].complete ? 'Si' : 'No'}`);
    }
    consoleMenu();
}

function removeTaskCLI(){

}

function markTaskAsCompletedCLI(){

}

function exitCLI(){
    rl.close();
}


