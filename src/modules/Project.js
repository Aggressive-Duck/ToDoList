import { ta } from "date-fns/locale";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }



    getName() {
        return this.name;
    }

    setTasks(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
}