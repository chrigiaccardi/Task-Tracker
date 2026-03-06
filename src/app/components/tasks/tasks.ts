import { Component } from '@angular/core';
import { TaskItem } from "../task-item/task-item";

@Component({
  selector: 'app-tasks',
  imports: [TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
}
