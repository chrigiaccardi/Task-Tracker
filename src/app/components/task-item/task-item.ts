import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interface/task';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-task-item',
  imports: [MatIcon],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task?: Task 
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter

onDelete(task: Task) {
  this.onDeleteTask.emit(task)
  }
}
