export class Task {
    private _id: number;
    private _name: string;
    private _isComplete: boolean;
    
    constructor(id: number, name: string, isComplete: boolean = false){
        this._id = id;
        this._name = name;
        this._isComplete = isComplete;
    }
    get id(): number{
        return this._id;
    }

    get name(): string{
        return this._name;
    }

    get isComplete(): boolean{
        return this._isComplete;
    }

    set id(id:number){
        this._id = id;
    }

    set name(name: string){
        this._name = name;
    }

    set isComplete(isComplete: boolean){
        this._isComplete = isComplete;
    }

    static addTask(task: Task, toDoList:Task[]) : boolean{
        let previousLength = toDoList.length;
        let check: boolean = false;
        toDoList.push(task);
        
        if(previousLength < toDoList.length){
            check = true;
        }
    
        return check;
    }
    
    static findTask(toDoList:Task[], id?: number, name?: string) : Task | undefined{
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
    
    static removeTask(toDoList:Task[], id?:number, task?:Task) : Task | undefined{
        let taskToDelete: Task | undefined = undefined;
    
        if(id != undefined){
            taskToDelete = toDoList.find((taskFetch) => taskFetch.id == id);
        }else if(task != undefined){
            taskToDelete = toDoList.find((taskFetch) => taskFetch == task);
        }
    
        if(taskToDelete != undefined){
            toDoList.splice(toDoList.indexOf(taskToDelete), 1);
        }
    
        return taskToDelete;
    }
    
    static markTaskAsCompleted(toDoList:Task[], id:number) : boolean{
        let taskToComplete:Task | undefined = this.findTask(toDoList, id);
        let check;
    
        if(taskToComplete != undefined){
            let index: number = toDoList.indexOf(taskToComplete);
            toDoList[index].isComplete = true;
            check = true;
        }else{
            check = false;
        }
        
        return check;
    }
}


