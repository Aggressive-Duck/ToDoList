import "./styles.css"
import UI from "./modules/UI.js"
import Storage from "./modules/Storage.js"

function init() {
  const ui = new UI()
  ui.displayAllProjectsConsole()
  ui.displayAllProjects()
  ui.displayAllTasks("shit")
}

init()
