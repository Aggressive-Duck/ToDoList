import Project from "./Project.js"
import Task from "./Task.js"
import Storage from "./Storage.js"
import * as DomCollections from "./DomCollections.js"
import { tr } from "date-fns/locale"
import { add, parseISO } from "date-fns"

export default class UI {
  constructor() {}
  initialize() {
    this.displayAllProjects()
    this.newProjectInput()
  }

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
      const taskDate = task.getDueDate() === "No Date" ? "" : task.getDueDate()
      const taskDom = document.createElement("div")
      taskDom.classList.add("task")
      taskDom.innerHTML += `<span class="task-name">${taskName}</span>
      <input type="date" class="task-date-input" value="${taskDate}" data-task="${taskName}">`

      const dateInput = taskDom.querySelector(".task-date-input")
      dateInput.addEventListener("change", (e) => {
        const selectedDate = e.target.value
        const taskName = e.target.dataset.task.trim()
        console.log(`Task: ${taskName}, Date: ${selectedDate}`)
        Storage.changeDueDateFromTask(
          selectedDate || "No Date",
          this.getCurrentProject(),
          taskName
        )
      })

      DomCollections.taskList.appendChild(taskDom)
    })
    this.displayTaskInput()
  }

  displayTaskInput() {
    const taskInput = document.querySelector(".new-task-input")
    const taskInputButton = document.querySelector(".new-task-input-btn")

    if (!taskInput || !taskInputButton) {
      console.error("Task input elements not found")
      return
    }

    const newTaskInput = taskInput.cloneNode(true)
    const newTaskInputButton = taskInputButton.cloneNode(true)
    taskInput.parentNode.replaceChild(newTaskInput, taskInput)
    taskInputButton.parentNode.replaceChild(newTaskInputButton, taskInputButton)

    const addTask = () => {
      const inputValue = newTaskInput.value.trim()
      if (inputValue !== "") {
        const activeButton = document.querySelector(".sidebar button.active")
        const currentProject = activeButton
          ? activeButton.textContent.trim()
          : "My Day"

        Storage.addNewTaskToProject(currentProject, inputValue)
        newTaskInput.value = ""
        this.displayAllTasks(currentProject)
      }
    }

    newTaskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        addTask()
      }
    })

    newTaskInputButton.addEventListener("click", addTask)
  }

  appendNewTaskOption() {}

  displayAllProjects() {
    const toDoList = Storage.getToDoList()
    const projectsArray = toDoList.getAllProjects()

    const projects = document.querySelectorAll(".project-button.user-project")
    projects.forEach((project) => project.remove())

    for (let i = 0; i < 3; i++) {
      const buttons = document.querySelectorAll(".sidebar button")
      const projectName = projectsArray[i].getName()
      buttons[i].addEventListener("click", () => {
        this.displayAllTasks(projectName)
      })
    }

    for (let i = 3; i < projectsArray.length; i++) {
      const projectName = projectsArray[i].getName()
      const projectsButton = document.createElement("button")
      projectsButton.classList.add("project-button", "user-project")
      projectsButton.innerHTML += `<span class="inline-icon-list"></span>${projectName}`
      projectsButton.addEventListener("click", () => {
        this.displayAllTasks(projectName)
      })
      DomCollections.projectList.appendChild(projectsButton)
    }

    //single active button color state
    const buttons = document.querySelectorAll(".sidebar button")
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"))
        btn.classList.add("active")
      })
    })

    DomCollections.default_button.click()
  }

  newProjectInput() {
    const projectInput = DomCollections.project_input
    projectInput.addEventListener("keydown", (e) => {
      const inputValue = projectInput.value.trim()
      if (e.key === "Enter" && this.isProjectNotInList(inputValue)) {
        Storage.addNewProject(inputValue)
        this.displayAllProjects()
        projectInput.value = ""
      }
    })
  }

  getCurrentProject() {
    const activeButton = document.querySelector(".sidebar button.active")
    const currentProjectName = activeButton.textContent.trim()
    return currentProjectName
  }

  isProjectNotInList(projectName) {
    const toDoList = Storage.getToDoList()
    const projectsArray = toDoList.getAllProjects()
    for (let i = 0; i < projectsArray.length; i++) {
      if (projectName === projectsArray[i].getName()) {
        return false
      }
    }
    return true
  }

  isTaskNotInList(taskName, projectName) {
    const toDoList = Storage.getToDoList()
    const project = toDoList.getProject(projectName)
    const tasksArray = project.getTasks()
    for (let i = 0; i < tasksArray.length; i++) {
      if (taskName === tasksArray[i].getName()) {
        return false
      }
    }
    return true
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
