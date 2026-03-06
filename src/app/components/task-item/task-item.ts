import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
    tasks: Task[] = TASKS;

}
