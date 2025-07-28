import Project from "./Project"
import Task from "./Task.js"
import ToDoList from "./ToDoList.js"

export default class Storage {
  static saveToDoList(data) {
    localStorage.setItem("toDoList", JSON.stringify(data))
  }

  static getToDoList() {
    const toDoList = Object.assign(
      new ToDoList(),
      JSON.parse(localStorage.getItem("toDoList"))
    )

    toDoList.setProjects(
      toDoList
        .getAllProjects()
        .map((project) => Object.assign(new Project(), project))
    )

    toDoList
      .getAllProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      )

    return toDoList
  }

  static addNewProject(newProjectName) {
    const project = new Project(newProjectName)
    const toDoList = Storage.getToDoList()
    toDoList.addNewProject(project)
    Storage.saveToDoList(toDoList)
  }

  static removeProject(projectName) {
    const toDoList = Storage.getToDoList()
    toDoList.removeProject(projectName)
    Storage.saveToDoList(toDoList)
  }

  static addNewTaskToProject(projectName, taskName) {
    const toDoList = Storage.getToDoList()
    const task = new Task(taskName)
    toDoList.getProject(projectName).addNewTask(task)
    Storage.saveToDoList(toDoList)
  }

  static removeTaskFromProject(projectName, taskName) {
    const toDoList = Storage.getToDoList()
    const project = toDoList.getProject(projectName)
    project.removeTask(taskName)
    Storage.saveToDoList(toDoList)
  }
}
