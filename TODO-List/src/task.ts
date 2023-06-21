export interface Task {
    id: number;
    name: string;
    complete: boolean;
}

export function addTask(task: Task, toDoList:Task[]) : boolean{
    let previousLength = toDoList.length;
    let check: boolean = false;
    toDoList.push(task);
    
    if(previousLength < toDoList.length){
        check = true;
    }

    return check;
}

export function findTask(toDoList:Task[], id?: number, name?: string) : Task | undefined{
    let taskFound: Task | undefined;

    if(id != undefined){
        taskFound = toDoList.find((taskFetch) => taskFetch.id == id); 
    }else if (name != undefined){
        taskFound = toDoList.find((taskFetch) => taskFetch.name.toLowerCase() == name.toLowerCase());
    }else{
        taskFound = undefined;
    }
    
    return taskFound;
}

export function removeTask(toDoList:Task[], id?:number, task?:Task) : Task | undefined{
    let taskToDelete: Task | undefined = undefined;

    if(id != undefined){
        taskToDelete = toDoList.find((taskFetch) => taskFetch.id == id);
    }else if(task != undefined){
        taskToDelete = toDoList.find((taskFetch) => taskFetch == task);
    }

    if(taskToDelete != undefined){
        toDoList.splice(toDoList.indexOf(taskToDelete));
    }

    return taskToDelete;
}


