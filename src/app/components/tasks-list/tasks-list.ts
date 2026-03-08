import { Component } from '@angular/core';
import { Task } from '../../interface/task';
import { TASKS } from '../../mock-tasks';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  tasks: Task[] = TASKS
}
