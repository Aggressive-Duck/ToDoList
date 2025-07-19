import ToDoList from './ToDoList.js'
import Project from './Project.js';
import Task from './Task.js';
const toDoList = new ToDoList();

export default class UI {
    constructor() {
        
    }

    loadToDoList() {
        return toDoList.getAllProjects();
        
    }

    loadTasks(project) {
        return project.getTasks();
    }

    displayAllProjects() {
        const projectsArray = this.loadToDoList();
        projectsArray.forEach((project) => {
            console.log(project.getName());
        })
    }

    displayTasks(projectName) {
        const project = this.getProjectByName(projectName);
        const tasksArray = this.loadTasks(project);
        tasksArray.forEach((task) => {
            console.log(task.getName());
        })
    }

    getProjectByName(projectName) {
        const projectsArray = this.loadToDoList();
        const project = projectsArray.find((project) => {
            return project.getName() === projectName;
        });
        return project;
    }

    addNewProject(newProjectName) {
        const project = new Project(newProjectName);
        toDoList.addNewProject(project);
    }

    removeProject(projectName) {
        toDoList.removeProject(projectName);
    }

    createTask(name) {
        const task = new Task(name);
        return task;
    }

    addNewTaskToProject(projectName, taskName) {
        const project = this.getProjectByName(projectName);
        const task = this.createTask(taskName);
        project.setTasks(task);
    }

    removeTaskFromProject(projectName, taskName) {
        const project = this.getProjectByName(projectName);
        project.removeTask(taskName);
    }

    appendSidebarDom() {

    }


}