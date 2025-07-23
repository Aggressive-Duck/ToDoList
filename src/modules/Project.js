
export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }



    getName() {
        return this.name;
    }
    
    setTasks(tasks) {
        this.tasks = tasks;
    }

    addNewTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskName) {
        const index = this.tasks.findIndex((task) => task.getName() == taskName);
        this.tasks.splice(index,1);
    }

    getTasks() {
        return this.tasks;
    }
}