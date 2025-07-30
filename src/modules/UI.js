import Project from "./Project.js"
import Task from "./Task.js"
import Storage from "./Storage.js"
import * as DomCollections from "./DomCollections.js"

export default class UI {
  constructor() {}

  displayAllProjectsConsole() {
    const toDoList = Storage.getToDoList()
    const projectsArray = toDoList.getAllProjects()
    projectsArray.forEach((project) => {
      console.log(project.getName())
    })
  }

  displayAllTasks(projectName) {
    const toDoList = Storage.getToDoList()
    const tasksArray = toDoList.getProject(projectName).getTasks()
    tasksArray.forEach((task) => {
      console.log(task.getName())
    })
  }

  displayAllProjects() {
    const toDoList = Storage.getToDoList()
    const projectsArray = toDoList.getAllProjects()
    for (var i = 3; i < projectsArray.length; i++) {
      const projectName = projectsArray[i].getName()
      const projectsButton = document.createElement("button")
      projectsButton.innerHTML += `<span href="./DueToday.svg" class="inline-icon-myday"></span>${projectName}`
      DomCollections.sidebar.appendChild(projectsButton)
    }

    DomCollections
  }

  // getProjectByName(projectName) {
  //   const projectsArray = this.loadToDoList()
  //   const project = projectsArray.find((project) => {
  //     return project.getName() === projectName
  //   })
  //   return project
  // }

  // addNewProject(newProjectName) {
  //   const project = new Project(newProjectName)
  //   toDoList.addNewProject(project)
  // }

  // removeProject(projectName) {
  //   toDoList.removeProject(projectName)
  // }

  // addNewTaskToProject(projectName, taskName) {
  //   const project = this.getProjectByName(projectName)
  //   const task = this.createTask(taskName)
  //   project.addNewTask(task)
  // }

  // removeTaskFromProject(projectName, taskName) {
  //   const project = this.getProjectByName(projectName)
  //   project.removeTask(taskName)
  // }

  appendSidebarDom() {}
}
