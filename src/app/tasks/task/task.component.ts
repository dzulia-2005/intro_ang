import { CardComponent } from "../../shared/card/card.component";
import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import  { DatePipe } from "@angular/common";
import {type Task} from './task.model';
import { TaskService } from "../tasks.service";


@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task!:Task;
  private taskService = inject(TaskService);

  onCompleteTask () {
    this.taskService.removeTask(this.task.id);
  }
}
