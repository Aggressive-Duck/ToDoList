import "./styles.css";
import UI from './modules/UI.js';


function init() {
    const ui = new UI();
    ui.addNewProject("Yunnet");
    ui.displayAllProjects();
    ui.addNewTaskToProject("My Day","shit");
    ui.addNewTaskToProject("My Day","ohshit");
    ui.displayTasks("My Day");
    ui.addNewTaskToProject("Yunnet","yunnet1");
    ui.addNewTaskToProject("Yunnet","yunnet2");
    ui.displayTasks("Yunnet");
    ui.removeTaskFromProject("Yunnet", "yunnet1");
    ui.displayTasks("Yunnet");


}

init();

