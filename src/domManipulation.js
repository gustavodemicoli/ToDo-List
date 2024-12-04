import { project, projects, toDo } from "./todos";


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

        const projectsDiv = createAndAppend("div", "", projectPanel)

        submitButton.addEventListener('click', () => {
            const newProject = newProjectInput.value.trim();
            project(newProject);

            projectsDiv.textContent = "";
            projects.forEach(project => {
                
                const div = createAndAppend("div", "", projectsDiv);
                const button = createAndAppend("button", project.name, div);
                button.addEventListener('click', () => {
                    if (currProject != project) {
                    currProject = project;
                    const todoPanel = document.querySelector("#todo-panel")
                    todoPanel.textContent="";
                    const todoButton = createAndAppend("button", "Add task", todoPanel);

                    const newToDoDiv = createAndAppend("div", "", todoPanel);


                    
                    
                    todoButton.addEventListener('click', () => { 
                        const todoPanel= document.querySelector("#todo-panel");
                        newToDoDiv.textContent = "";
                        
                        toDoInput(project, newToDoDiv)
                         
                        
                    })

                    const displayToDosDiv = createAndAppend("div", "", todoPanel);
                    printToDos(project);
                }

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


const toDoInput = function (addTo, newToDoDiv) {
    let title = null;
    let desc = null
    let dueDate = null
    let priority = null
    let notes
    let checklist 
    let addToProject = addTo.name
    
    const taskLabel = createAndAppend('label', "Task Name:", newToDoDiv);
    taskLabel.setAttribute("for", "new-task");

    
    const taskInput = createAndAppend('input', "", newToDoDiv);
    taskInput.type = "text";
    taskInput.id = "new-task";

    createAndAppend('br', "", newToDoDiv);

    const descLabel = createAndAppend('label', "Task Description:", newToDoDiv);
    descLabel.setAttribute("for", "new-desc");

    const descInput = createAndAppend('input', "", newToDoDiv);
    descInput.type = "text";
    descInput.id = "new-desc";

    const submitName = createAndAppend('button', "Next", newToDoDiv);

    submitName.addEventListener("click", () => {
       console.log(taskInput.value)

        if(taskInput.value != "" && descInput.value != "") {
            title = taskInput.value
            desc = descInput.value
            newToDoDiv.textContent = "" 

            const dueDateLabel = createAndAppend('label', "Due Date", newToDoDiv);
            dueDateLabel.setAttribute("for", "new-dueDate");

            
            const dueDateInput = createAndAppend('input', "", newToDoDiv);
            dueDateInput.type = "text";
            dueDateInput.id = "new-task";

            createAndAppend('br', "", newToDoDiv);

            const dropdown = document.createElement('select');

            const priorities = ['Low', 'Medium', 'High'];

            // Add each option to the dropdown
            priorities.forEach(priority => {
                const option = document.createElement('option');
                option.value = priority.toLowerCase(); // Set value (e.g., 'low', 'medium', 'high')
                option.textContent = priority; // Display text
                dropdown.appendChild(option); // Append option to the dropdown
            });

            newToDoDiv.appendChild(dropdown);

            const submitDueDate = createAndAppend('button', "Next", newToDoDiv);

            submitDueDate.addEventListener("click", ()=> {
                if(dueDateInput.value != ""){
                    dueDate = dueDateInput.value;
                    priority = dropdown.value;
                    newToDoDiv.textContent = "" 

                    toDo(title, desc, dueDate, priority, undefined, undefined, addToProject);
                    printToDos(addTo);

                }
            })
        }
    })
}

const printToDos = function (project) {

    const todoPanel = document.querySelector("#todo-panel")
    const toDoDisplay = todoPanel.lastElementChild

    console.log(toDoDisplay)

    // toDoDisplay.textContent = "hello"

    // createAndAppend("div", project.toDos[0].name, toDoDisplay);



    project.toDos.forEach((toDo) => {
        createAndAppend("div", toDo.title, toDoDisplay);
    })


}