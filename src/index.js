import { projects, project, toDo } from "./todos";

import { projectInput, toDoInput } from "./domManipulation";



const project1 = project("My First Project");
const project2 = project("My Second Project");




// console.log(project1.name)

const toDo1 = toDo("My First To Do","my desc", "10/11/25", 1, "these are my notes", ["item1", "item2", "item3"], project1.name)








