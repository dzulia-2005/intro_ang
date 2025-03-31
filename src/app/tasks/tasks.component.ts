import { Component , Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import {type CreateTaskType} from './create-task/createTask.model';

@Component({
  selector: 'app-tasks',
  imports: [ TaskComponent , CreateTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask=false;

  tasks = [
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

  get selcetUserTasks() {
    return this.tasks.filter((task)=>task.userId === this.userId)
  }


  onCompleteTask (id:string) {
    this.tasks = this.tasks.filter((task)=>task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData:CreateTaskType){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:this.userId,
      title: taskData.title,
      summary:taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask = false;
  }
}
