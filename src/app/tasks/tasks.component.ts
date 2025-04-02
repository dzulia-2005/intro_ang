import { Component , Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import {type CreateTaskType} from './create-task/createTask.model';
import { TaskService } from "./tasks.service";

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

  constructor(private taskService:TaskService){}

  get selcetUserTasks() {
    return this.taskService.getUserTask(this.userId);
  }

  onCompleteTask (id:string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData:CreateTaskType){
    this.isAddingTask = false;
  }
}
