export default class Task {
  constructor(name, dueDate = "No Date") {
    this.name = name
    this.dueDate = dueDate
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate
  }

  getDueDate() {
    return this.dueDate
  }
}
