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
    const tasks = document.querySelectorAll(".taskList .task")
    tasks.forEach((task) => task.remove())
    tasksArray.forEach((task) => {
      console.log(task.getName())

      const taskName = task.getName()
      const taskDom = document.createElement("div")
      taskDom.classList.add("task")
      taskDom.innerHTML += `${taskName}`
      DomCollections.taskList.appendChild(taskDom)
    })
    this.displayTaskInput(projectName)
  }

  displayTaskInput(projectName) {
    const taskInput = DomCollections.task_input
    const taskInputButton = DomCollections.task_input_button
    taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const inputValue = taskInput.value.trim()
        if (inputValue !== "") {
          Storage.addNewTaskToProject(projectName, inputValue)
          taskInput.value = ""
          this.displayAllTasks(projectName)
        }
      }
    })

    taskInputButton.addEventListener("click", () => {
      const inputValue = taskInput.value.trim()
      if (inputValue !== "") {
        Storage.addNewTaskToProject(projectName, inputValue)
        taskInput.value = ""
        this.displayAllTasks(projectName)
      }
    })
  }

  appendNewTaskOption() {}

  displayAllProjects() {
    const toDoList = Storage.getToDoList()
    const projectsArray = toDoList.getAllProjects()
    for (var i = 0; i < 3; i++) {
      const buttons = document.querySelectorAll(".sidebar button")
      const projectName = projectsArray[i].getName()
      buttons.forEach((b) =>
        b.addEventListener("click", () => {
          this.displayAllTasks(projectName)
        })
      )
    }

    for (var i = 3; i < projectsArray.length; i++) {
      const projectName = projectsArray[i].getName()
      const projectsButton = document.createElement("button")
      projectsButton.classList.add("project-button")
      projectsButton.innerHTML += `<span class="inline-icon-list"></span>${projectName}`
      projectsButton.addEventListener("click", () => {
        this.displayAllTasks(projectName)
      })
      DomCollections.sidebar.appendChild(projectsButton)
    }

    //single active button color state
    const buttons = document.querySelectorAll(".sidebar button")
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"))
        btn.classList.add("active")
      })
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
