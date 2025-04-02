import { Injectable } from "@angular/core"
import { type CreateTaskType } from "./create-task/createTask.model"

@Injectable({
  providedIn:'root'
})

export class TaskService {
   private tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'build first prototype',
      summary:'build first prototype for the online shop ',
      dueDate:'2024-05-31'
    },
    {
      id:'t2',
      userId:'u2',
      title:'build first prototype',
      summary:'build first prototype for the online shop ',
      dueDate:'2024-05-31'
    },
    {
      id:'t3',
      userId:'u3',
      title:'build first prototype',
      summary:'build first prototype for the online shop ',
      dueDate:'2024-05-31'
    },{
      id:'t4',
      userId:'u4',
      title:'build first prototype',
      summary:'build first prototype for the online shop ',
      dueDate:'2024-05-31'
    }
  ]

  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTask (userId:string) {
    return this.tasks.filter((task)=>task.userId === userId)
    this.saveTasks()
  }

  addTask(taskData:CreateTaskType,userId:string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:userId,
      title: taskData.title,
      summary:taskData.summary,
      dueDate: taskData.dueDate
    })
    this.saveTasks();
  }

  removeTask (id:string) {
    this.tasks = this.tasks.filter((task)=>task.id !== id)
    this.saveTasks()
  }

  private saveTasks () {
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

}
