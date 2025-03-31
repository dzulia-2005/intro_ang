import { Component , EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { type CreateTaskType } from './createTask.model';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<CreateTaskType>();
  
  enterTitle='';
  enterSummary='';
  enterDueDate='';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title:this.enterTitle,
      summary:this.enterSummary,
      dueDate:this.enterDueDate,
    })
  }
}
