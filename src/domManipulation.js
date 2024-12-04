import { project, projects } from "./todos";

export const createAndAppend = function (elementType, elementContent, parentElement ) {
    const newElement = document.createElement(elementType)
    newElement.textContent = elementContent;
    parentElement.appendChild(newElement);

    return newElement
}



export const printProjects = function(projects) {
    const projectHeader = document.querySelector('.projects');
    projectHeader.textContent = "";

    projects.forEach(project => {
        addProject(project);
    });

}

export const addProject = function(project) {

    const projectHeader = document.querySelector('.projects');

    const li = createAndAppend("li", "", projectHeader)
    const name = createAndAppend("h5", project.name, li)
    const ul = createAndAppend("ul", "To-Do:", li)

    // console.log(project)    

    project.toDos.forEach(toDo => {
        
        createAndAppend("li", toDo.title, ul)
    });

    

}

export const projectInput = (function () {

    const inputDiv = document.querySelector('.project-input');

    inputDiv.textContent = ""

    const newProjectLabel = createAndAppend('label', "New Project:", inputDiv);
    newProjectLabel.setAttribute("for", "new-project");

    createAndAppend('br', "", inputDiv)

    const newProjectInput = createAndAppend('input', "", inputDiv);
    newProjectInput.type = "text";
    newProjectInput.id = "new-project";
    const submitButton = createAndAppend('button', "Submit", inputDiv);
    submitButton.type = "submit";


    

})



export const toDoInput = (function () {
    const newtoDoDiv = document.querySelector(".task-input")
    newtoDoDiv.textContent = ""

    const taskLabel = createAndAppend('label', "New Task:", newtoDoDiv);
    taskLabel.setAttribute("for", "new-task");

    createAndAppend('br', "", newtoDoDiv);

    const taskInput = createAndAppend('input', "", newtoDoDiv);
    taskInput.type = "text";
    taskInput.id = "new-task";

    const label = createAndAppend('label', "Select Project", newtoDoDiv);
    taskLabel.setAttribute("for", "new-task");
    const select = createAndAppend('select', "", newtoDoDiv)


    projects.forEach((proj) => {
        const option = createAndAppend('option', proj.name, select);
        option.value = proj.name;
    });
})