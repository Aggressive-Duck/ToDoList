import Project from "./Project.js"
import Task from "./Task.js"
import Storage from "./Storage.js"

export default class UI {
  constructor() {}

  displayAllProjects() {
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
