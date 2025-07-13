import Project from './Project'

export default class ToDoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('My Day'));
        this.projects.push(new Project('Due Today'));
        this.projects.push(new Project('Due This Week'));
    } 


}