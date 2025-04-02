import { Component , EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { type CreateTaskType } from './createTask.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<CreateTaskType>();

  private taskService = inject(TaskService);

  enterTitle='';
  enterSummary='';
  enterDueDate='';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title:this.enterTitle,
        summary:this.enterSummary,
        dueDate:this.enterDueDate
      },
    this.userId
  );
  this.cancel.emit();
 }
}
