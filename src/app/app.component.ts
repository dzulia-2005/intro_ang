import { Component } from '@angular/core';
import {HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { DUMMY_USERS } from "../dummy-data"
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId?:string;

  get selectedUser () {
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }

  onSelectUser (id:string) {
    this.selectedUserId = id;
  }
}
