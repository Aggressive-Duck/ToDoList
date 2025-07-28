import Project from "./Project.js"

export default class ToDoList {
  constructor() {
    this.projects = []
    this.projects.push(new Project("My Day"))
    this.projects.push(new Project("Due Today"))
    this.projects.push(new Project("Due This Week"))
  }

  getAllProjects() {
    return this.projects
  }

  getProject(projectName) {
    const projectsArray = this.projects
    const project = projectsArray.find((project) => {
      return project.getName() === projectName
    })
    return project
  }

  setProjects(projects) {
    this.projects = projects
  }

  addNewProject(project) {
    this.projects.push(project)
  }

  removeProject(projectName) {
    const index = this.projects.findIndex(
      (element) => element.getName() == projectName
    )
    this.projects.splice(index, 1)
  }
}
