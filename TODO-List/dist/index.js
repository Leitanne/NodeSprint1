var _a, _b;
var taskList = [];
var list = document.getElementById("lista");
var task1 = {
    id: 1,
    name: "Finish README file",
    complete: false,
};
var task2 = {
    id: 2,
    name: "Finish test",
    complete: false,
};
taskList.push(task1);
taskList.push(task2);
function showList() {
    var message = "";
    for (var i in taskList) {
        message += "".concat(taskList[i].id, ".- ").concat(taskList[i].name, ". Completed:").concat((taskList[i].complete ? "Si" : "No"), " <br>");
    }
    if (list != null) {
        list.innerHTML = message;
    }
}
function addButton() {
    var id = taskList.length + 1;
    var name = prompt("Introduce la tarea que quieres añadir");
    var complete = false;
    if (name != null) {
        var task3 = {
            id: id,
            name: name,
            complete: complete,
        };
        taskList.push(task3);
    }
    else {
        alert("No has especificado ninguna tarea");
    }
}
function removeButton() {
}
window.addEventListener('load', function () {
    showList();
});
(_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    addButton();
    showList();
});
(_b = document.getElementById("remove")) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    removeButton();
    showList();
});
export {};
