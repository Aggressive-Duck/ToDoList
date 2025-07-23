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
}
