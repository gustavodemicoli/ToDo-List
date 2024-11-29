export function ToDo(title, desc, dueDate, priority, notes="", checklist=[]){
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist=[];
    this.done = false;

    return{title, desc, dueDate, priority, notes, checklist, done};
}