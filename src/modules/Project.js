export default class Project {
  constructor(name) {
    this.name = name
    this.tasks = []
  }

  getName() {
    return this.name
  }

  setTasks(tasks) {
    this.tasks = tasks
  }

  getTask(taskName) {
    const tasksArray = this.tasks
    const task = tasksArray.find((task) => {
      return task.getName() === taskName
    })
    return task
  }

  addNewTask(task) {
    this.tasks.push(task)
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex((task) => task.getName() == taskName)
    this.tasks.splice(index, 1)
  }

  getTasks() {
    return this.tasks
  }
}
