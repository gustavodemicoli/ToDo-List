import { printProjects, projectInput, toDoInput } from "./domManipulation";


export const projects = []

export function project(name) {
    
    const project =  {
        name: name,
        toDos: [],
        done: false
    }

    projects.push(project);
    printProjects(projects)

    projectInput();
    toDoInput();

    return project

}

export function toDo(title, desc, dueDate, priority, notes="", checklist=[], addToProject){

    console.log(addToProject)

    

    projects.forEach(project => {
        console.log(project)

        if (project.name === addToProject) {
            project.toDos.push({title, desc, dueDate, priority, notes, checklist, done: false})
        }
    } )
    printProjects(projects)

    // return{title, desc, dueDate, priority, notes, checklist, done: false};
}


    
    
    

