import { project, projects } from "./todos";


export const createAndAppend = function (elementType, elementContent, parentElement ) {
    const newElement = document.createElement(elementType)
    newElement.textContent = elementContent;
    parentElement.appendChild(newElement);

    return newElement
}

export const onLoad = function () {
    let currProject = null

    const projectPanel = document.querySelector("#project-panel")

    const button = createAndAppend("button", "add project", projectPanel);

    const projectInput = (function () {

         const projectPanel = document.querySelector('#project-panel');
         const inputDiv = createAndAppend('div', '', projectPanel);
    
    
        const newProjectLabel = createAndAppend('label', "New Project:", inputDiv);
        newProjectLabel.setAttribute("for", "new-project");
    
        createAndAppend('br', "", inputDiv)
    
        const newProjectInput = createAndAppend('input', "", inputDiv);
        newProjectInput.type = "text";
        newProjectInput.id = "new-project";
        const submitButton = createAndAppend('button', "Submit", inputDiv);
        submitButton.type = "submit";

        submitButton.addEventListener('click', () => {
            const newProject = newProjectInput.value.trim();
            project(newProject);

            projects.forEach(project => {
                const div = createAndAppend("div", "", projectPanel)
                const button = createAndAppend("button", project.name, div)
                button.addEventListener('click', () => {

                    
                    const todoPanel = document.querySelector("#todo-panel")
                    const todoButton = createAndAppend("button", "Add task", todoPanel);
                    
                    todoButton.addEventListener('click', () => { 
                        toDoInput()
                    })


                })
                
            });


        })
    
        inputDiv.style.display = "none";

        
    
        function toggleVisibility() {
            if (inputDiv.style.display === "none") {
                inputDiv.style.display = "block"; // Show the input div
            } else {
                inputDiv.style.display = "none"; // Hide the input div
            }
        }
    
        return {
            toggleVisibility
        }
    
    }) ();

    button.addEventListener('click', () => {
       projectInput.toggleVisibility()
    })
};


const toDoInput = (function () {
    const newToDoDiv = document.querySelector("#todo-panel")
    
    const taskLabel = createAndAppend('label', "Task Name:", newToDoDiv);
    taskLabel.setAttribute("for", "new-task");

    createAndAppend('br', "", newToDoDiv);
    const taskInput = createAndAppend('input', "", newToDoDiv);
    taskInput.type = "text";
    taskInput.id = "new-task";
})