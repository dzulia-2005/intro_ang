import { CardComponent } from "../../shared/card/card.component";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import  { DatePipe } from "@angular/common";
import {type Task} from './task.model';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Output() complete = new EventEmitter();

  onCompleteTask () {
    this.complete.emit(this.task.id);
  }
}
