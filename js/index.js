class EventEmitter {
    constructor(){
        this.events = {};
    }

    on(type, callback){
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg){
        if (this.events[type]){
            this.events[type].forEach(callback => callback(arg));
        }
    }

}

var data = [
    {"id": 1, "value": "facilisis lorem tristique aliquet. Phasellus", "status": true},
    {"id": 2, "value": "Mauris non dui nec urna", "status": true},
    {"id": 3, "value": "ligula. Aliquam erat volutpat. Nulla", "status": true},
    {"id": 4, "value": "varius. Nam porttitor scelerisque neque.", "status": true},
    {"id": 5, "value": "elit sed consequat auctor, nunc", "status": true},
    {"id": 6, "value": "egestas blandit. Nam nulla magna,", "status": true},
    {"id": 7, "value": "Etiam ligula tortor, dictum eu,", "status": true},
    {"id": 8, "value": "at, iaculis quis, pede. Praesent", "status": true},
    {"id": 9, "value": "faucibus orci luctus et ultrices", "status": true},
    {"id": 10, "value": "luctus felis purus ac tellus.", "status": true},
    {"id": 11, "value": "in consequat enim diam vel", "status": false}
    // ,
    // {"id": 12, "value": "mi enim, condimentum eget, volutpat", "status": false},
    // {"id": 13, "value": "dolor dolor, tempus non, lacinia", "status": false},
    // {"id": 14, "value": "amet nulla. Donec non justo.", "status": false},
    // {"id": 15, "value": "magna. Cras convallis convallis dolor.", "status": false},
    // {"id": 16, "value": "sem. Nulla interdum. Curabitur dictum.", "status": false},
    // {"id": 17, "value": "rutrum eu, ultrices sit amet,", "status": false},
    // {"id": 18, "value": "ligula consectetuer rhoncus. Nullam velit", "status": false},
    // {"id": 19, "value": "per conubia nostra, per inceptos", "status": false},
    // {"id": 20, "value": "Donec tempus, lorem fringilla ornare", "status": false},
    // {"id": 21, "value": "id ante dictum cursus. Nunc", "status": true},
    // {"id": 22, "value": "neque. In ornare sagittis felis.", "status": true},
    // {"id": 23, "value": "In faucibus. Morbi vehicula. Pellentesque", "status": true},
    // {"id": 24, "value": "varius et, euismod et, commodo", "status": true},
    // {"id": 25, "value": "Lorem ipsum dolor sit amet,", "status": true},
    // {"id": 26, "value": "aliquet vel, vulputate eu, odio.", "status": true},
    // {"id": 27, "value": "facilisis, magna tellus faucibus leo,", "status": true},
    // {"id": 28, "value": "lorem ipsum sodales purus, in", "status": true},
    // {"id": 29, "value": "convallis ligula. Donec luctus aliquet", "status": true},
    // {"id": 30, "value": "enim. Nunc ut erat. Sed", "status": true},
    // {"id": 31, "value": "nec urna et arcu imperdiet", "status": false},
    // {"id": 32, "value": "ultricies adipiscing, enim mi tempor", "status": false},
    // {"id": 33, "value": "Nullam ut nisi a odio", "status": false},
    // {"id": 34, "value": "Cras dictum ultricies ligula. Nullam", "status": false},
    // {"id": 35, "value": "Maecenas iaculis aliquet diam. Sed", "status": false},
    // {"id": 36, "value": "dui augue eu tellus. Phasellus", "status": false},
    // {"id": 37, "value": "vel, faucibus id, libero. Donec", "status": false},
    // {"id": 38, "value": "Nulla dignissim. Maecenas ornare egestas", "status": false},
    // {"id": 39, "value": "ut lacus. Nulla tincidunt, neque", "status": false},
    // {"id": 40, "value": "odio, auctor vitae, aliquet nec,", "status": false},
    // {"id": 41, "value": "ac turpis egestas. Fusce aliquet", "status": true},
    // {"id": 42, "value": "sapien molestie orci tincidunt adipiscing.", "status": true},
    // {"id": 43, "value": "non ante bibendum ullamcorper. Duis", "status": true},
    // {"id": 44, "value": "enim. Mauris quis turpis vitae", "status": true},
    // {"id": 45, "value": "adipiscing fringilla, porttitor vulputate, posuere", "status": true},
    // {"id": 46, "value": "lectus justo eu arcu. Morbi", "status": true},
    // {"id": 47, "value": "lorem. Donec elementum, lorem ut", "status": true},
    // {"id": 48, "value": "ac mattis semper, dui lectus", "status": true},
    // {"id": 49, "value": "at, velit. Pellentesque ultricies dignissim", "status": true},
    // {"id": 50, "value": "amet ultricies sem magna nec", "status": true},
    // {"id": 51, "value": "augue porttitor interdum. Sed auctor", "status": false},
    // {"id": 52, "value": "pharetra, felis eget varius ultrices,", "status": false},
    // {"id": 53, "value": "cursus purus. Nullam scelerisque neque", "status": false},
    // {"id": 54, "value": "Phasellus libero mauris, aliquam eu,", "status": false},
    // {"id": 55, "value": "sed tortor. Integer aliquam adipiscing", "status": false},
    // {"id": 56, "value": "Morbi sit amet massa. Quisque", "status": false},
    // {"id": 57, "value": "magna tellus faucibus leo, in", "status": false},
    // {"id": 58, "value": "Integer urna. Vivamus molestie dapibus", "status": false},
    // {"id": 59, "value": "netus et malesuada fames ac", "status": false},
    // {"id": 60, "value": "ac turpis egestas. Fusce aliquet", "status": false},
    // {"id": 61, "value": "pharetra sed, hendrerit a, arcu.", "status": true},
    // {"id": 62, "value": "neque vitae semper egestas, urna", "status": true},
    // {"id": 63, "value": "Mauris quis turpis vitae purus", "status": true},
    // {"id": 64, "value": "fringilla euismod enim. Etiam gravida", "status": true},
    // {"id": 65, "value": "semper, dui lectus rutrum urna,", "status": true},
    // {"id": 66, "value": "orci. Phasellus dapibus quam quis", "status": true},
    // {"id": 67, "value": "tempor arcu. Vestibulum ut eros", "status": true},
    // {"id": 68, "value": "In nec orci. Donec nibh.", "status": true},
    // {"id": 69, "value": "Fusce feugiat. Lorem ipsum dolor", "status": true},
    // {"id": 70, "value": "iaculis odio. Nam interdum enim", "status": true},
    // {"id": 71, "value": "placerat. Cras dictum ultricies ligula.", "status": false},
    // {"id": 72, "value": "lorem ipsum sodales purus, in", "status": false},
    // {"id": 73, "value": "pharetra. Nam ac nulla. In", "status": false},
    // {"id": 74, "value": "libero est, congue a, aliquet", "status": false},
    // {"id": 75, "value": "penatibus et magnis dis parturient", "status": false},
    // {"id": 76, "value": "feugiat nec, diam. Duis mi", "status": false},
    // {"id": 77, "value": "libero at auctor ullamcorper, nisl", "status": false},
    // {"id": 78, "value": "nisi. Aenean eget metus. In", "status": false},
    // {"id": 79, "value": "eget laoreet posuere, enim nisl", "status": false},
    // {"id": 80, "value": "ornare lectus justo eu arcu.", "status": false},
    // {"id": 81, "value": "vulputate dui, nec tempus mauris", "status": true},
    // {"id": 82, "value": "Donec vitae erat vel pede", "status": true},
    // {"id": 83, "value": "metus vitae velit egestas lacinia.", "status": true},
    // {"id": 84, "value": "varius ultrices, mauris ipsum porta", "status": true},
    // {"id": 85, "value": "Nam interdum enim non nisi.", "status": true},
    // {"id": 86, "value": "elit, pellentesque a, facilisis non,", "status": true},
    // {"id": 87, "value": "tempor erat neque non quam.", "status": true},
    // {"id": 88, "value": "eu lacus. Quisque imperdiet, erat", "status": true},
    // {"id": 89, "value": "amet ante. Vivamus non lorem", "status": true},
    // {"id": 90, "value": "mus. Proin vel nisl. Quisque", "status": true},
    // {"id": 91, "value": "vulputate, lacus. Cras interdum. Nunc", "status": false},
    // {"id": 92, "value": "ut, pellentesque eget, dictum placerat,", "status": false},
    // {"id": 93, "value": "vitae, sodales at, velit. Pellentesque", "status": false},
    // {"id": 94, "value": "eu, eleifend nec, malesuada ut,", "status": false},
    // {"id": 95, "value": "et ipsum cursus vestibulum. Mauris", "status": false},
    // {"id": 96, "value": "nunc risus varius orci, in", "status": false},
    // {"id": 97, "value": "ut ipsum ac mi eleifend", "status": false},
    // {"id": 98, "value": "eu, ultrices sit amet, risus.", "status": false},
    // {"id": 99, "value": "Quisque purus sapien, gravida non,", "status": false},
    // {"id": 100, "value": "Nunc sed orci lobortis augue", "status": false}
];


class Model extends  EventEmitter{
    constructor(state = []){
        super();
        this.state = state;
    }

    getItem(id){
        let findItem = this.state.find(item => item.id == id);
        return findItem;
    }

    addItem(item){
        this.state.push(item);

        return item;
    }

    updateItem(id, data){
        let item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);

    }

    deleteItem(id){
        let item = this.getItem(id);
        let index = this.state.indexOf(item);

        if (index > -1){
            this.state.splice(index, 1);
        }

        return id;

    }
}

class View extends EventEmitter{
    constructor(){
        super();

        this.form = document.querySelector(".add-task-container");
        this.tasks = document.querySelector(".tasks");
        this.inputTask = document.querySelector(".new-task-text");
        this.addButton = document.querySelector(".add-task");
        this.id = 0;

        this.form.addEventListener("submit", this.handleAdd.bind(this))
    }
    getId() {
        if (this.tasks.lastChild){
            this.id = +this.tasks.lastChild.dataset.id + 1;
            return this.id;
        } else{
            return 1;
        }
    }

    createTaskItem(taskData){
        let taskContainer = document.createElement("li");
        taskContainer.setAttribute("class", "task");
        taskContainer.setAttribute("data-id", this.getId());

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("class", "checkbox");

        let taskTitle = document.createElement('div');
        taskTitle.setAttribute("class", "task-name");
        taskTitle.innerText = taskData.value;

        let taskNameContainer = document.createElement("label");
        taskNameContainer.setAttribute("class","active");

        let changeTaskTitle = document.createElement("input");
        changeTaskTitle.setAttribute("class","changeTaskTitle disactive");
        changeTaskTitle.setAttribute("type","text");
        changeTaskTitle.setAttribute("placeholder","Task...");

        let changeButton = document.createElement("button");
        changeButton.setAttribute("class", "change-button");
        changeButton.innerText = "Изменить";

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerText = "Удалить";

        let cancelButton = document.createElement("button");
        cancelButton.setAttribute("class", "cancel-button disactive");
        cancelButton.innerText = "Отмена";

        taskNameContainer.appendChild(checkbox);
        taskNameContainer.appendChild(taskTitle);
        taskNameContainer.appendChild(changeTaskTitle);
        taskContainer.appendChild(taskNameContainer);
        taskContainer.appendChild(changeButton);
        taskContainer.appendChild(deleteButton);
        taskContainer.appendChild(cancelButton);

        return this.addEventListeners(taskContainer);

    }

    addEventListeners(taskItem){
        const checkbox = taskItem.querySelector(".checkbox");
        const changeButton = taskItem.querySelector(".change-button");
        const deleteButton = taskItem.querySelector(".delete-button");
        const cancelButton = taskItem.querySelector(".cancel-button");

        checkbox.addEventListener("click", this.handleCheckbox.bind(this));
        changeButton.addEventListener("click", this.handleChangeButton.bind(this));
        deleteButton.addEventListener("click", this.handleDeleteButton.bind(this));
        cancelButton.addEventListener("click", this.handleCancelButton.bind(this));

        return taskItem;
    }

    handleAdd(event){
        event.preventDefault();

        if (this.inputTask.value === ""){
            alert("Введите значение");

            return;

        } else {

            const taskValue = this.inputTask.value;
            this.emit("add", taskValue);
        }
    }

    handleCheckbox(event){
        //Для теста
        const task = event.target.closest(".task");
        const checkbox = event.target;

        let taskData = {
            status: checkbox.checked,
            id: task.dataset.id
        };

        this.emit("check", taskData)



    }

    handleChangeButton(event){
        const task = event.target.parentNode;

        this.emit("change", task);

    }

    handleDeleteButton(event){
        const task = event.target.parentNode;
        const id = task.dataset.id;

        this.emit("delete", id);

    }

    handleCancelButton(event){
        const task = event.target.parentNode;

        const checkbox = task.querySelector(".checkbox");
        const changeTaskTitle = task.querySelector(".changeTaskTitle");
        const taskTitle = task.querySelector(".task-name");
        const deleteButton = task.querySelector(".delete-button");
        const cancelButton = task.querySelector(".cancel-button");

        checkbox.classList.toggle("disactive");
        taskTitle.classList.toggle("disactive");
        deleteButton.classList.toggle("disactive");
        cancelButton.classList.toggle("disactive");
        changeTaskTitle.classList.toggle("disactive");
        changeTaskTitle.value = "";
    }


    addTask(taskData){
        const taskItem = this.createTaskItem(taskData);
        this.inputTask.value = "";

        this.tasks.appendChild(taskItem);


    }

    findTask(id){
        return this.tasks.querySelector(`[data-id="${id}"]`);

    }

    checkTask(taskData){
        const task = this.findTask(taskData.id);
        const checkbox = task.querySelector(".checkbox");
        const changeButton = task.querySelector(".change-button");
        const deleteButton = task.querySelector(".delete-button");
        const taskTitle = task.querySelector(".task-name");

        checkbox.checked = taskData.status;
        changeButton.disabled = taskData.status;
        deleteButton.disabled = taskData.status;

        if (taskData.status === true){
            taskTitle.style.textDecoration = "line-through";
            taskTitle.style.opacity = 0.65;
        } else{
            taskTitle.style.textDecoration = "none";
            taskTitle.style.opacity = 1;
        }

        //отправляем в модель новый статус
    }

    changeTask(taskItem){
        const checkbox = taskItem.querySelector(".checkbox");
        const changeTaskTitle = taskItem.querySelector(".changeTaskTitle");
        const taskTitle = taskItem.querySelector(".task-name");
        const deleteButton = taskItem.querySelector(".delete-button");
        const cancelButton = taskItem.querySelector(".cancel-button");



        if (changeTaskTitle.classList.contains("disactive")) {
            changeTaskTitle.value = taskTitle.innerHTML;
            checkbox.classList.toggle("disactive");
            taskTitle.classList.toggle("disactive");
            deleteButton.classList.toggle("disactive");
            cancelButton.classList.toggle("disactive");
            changeTaskTitle.classList.toggle("disactive");



        } else{
            taskTitle.innerHTML = changeTaskTitle.value;
            checkbox.classList.toggle("disactive");
            taskTitle.classList.toggle("disactive");
            deleteButton.classList.toggle("disactive");
            cancelButton.classList.toggle("disactive");
            changeTaskTitle.classList.toggle("disactive");


        }

        let taskData = {
            id: taskItem.dataset.id,
            value: taskTitle.innerHTML,
            status: false
        };

        return taskData;
    }

    deleteTask(id){
        const targetTask = document.querySelector(`[data-id="${id}"]`);
        console.log(targetTask);
        this.tasks.removeChild(targetTask);
    }

    viewTasksFromState(tasksArray){
        const This = this;
        tasksArray.forEach(function (task) {
            This.addTask(task);
        })
    }



}

class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        view.on("add", this.addTask.bind(this));
        view.on("check", this.checkTask.bind(this));
        view.on("change", this.changeTask.bind(this));
        view.on("delete", this.deleteTask.bind(this))

        view.viewTasksFromState(model.state);
    }

    addTask(title){
        const task = this.model.addItem({
            id: this.view.getId(),
            value: title,
            status: false
        });

        this.view.addTask(task);
    }

    checkTask(taskData){
        this.model.updateItem(taskData.id, taskData);
        this.view.checkTask(taskData);
    }

    changeTask(task){
        const newTaskData = this.view.changeTask(task);
        this.model.updateItem(newTaskData.id, newTaskData)

    }

    deleteTask(id){
        const targetID = this.model.deleteItem(id);
        this.view.deleteTask(targetID);
    }
}


const model = new Model(data);
const view = new View();

const controller = new Controller(model, view);

