const projects = []

export function project(name) {
    this.name

    const project =  {name: name,
        toDos: []
    }

    projects.push(project);
}

export function toDo(title, desc, dueDate, priority, notes="", checklist=[]){
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist=[];
    this.done = false;

    return{title, desc, dueDate, priority, notes, checklist, done};
}


    
    
    

