import { project } from "./todos";

const createAndAppend = function (elementType, elementContent, parentElement ) {
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
