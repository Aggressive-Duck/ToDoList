import ToDoList from './ToDoList.js'
const toDoList = new ToDoList();

export default class UI {
    constructor() {
        
    }

    loadToDoList() {
        return toDoList.getAllProjects();
        
    }

    displayProjectDom() {
        const projectsArray = this.loadToDoList();
        projectsArray.forEach((project) => {
            console.log(project.getName());
        })
    }

    appendSidebarDom() {

    }


}