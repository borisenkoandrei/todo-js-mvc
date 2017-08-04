import EventEmitter from "./EventEmitter"

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

export default View;
