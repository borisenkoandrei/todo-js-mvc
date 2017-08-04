class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        view.on("add", this.addTask.bind(this));
        view.on("check", this.checkTask.bind(this));
        view.on("change", this.changeTask.bind(this));
        view.on("delete", this.deleteTask.bind(this));

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

export default Controller;