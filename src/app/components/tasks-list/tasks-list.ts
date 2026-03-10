import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Task } from '../../interface/task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem,AsyncPipe],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  // constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) { }
  taskService = inject(TaskService)
  tasks1 = this.taskService.getTasks()
  tasks: Task[] = []
// ngOnInit(): void {
//   this.taskService.getTasks().subscribe((tasks) => {
//     this.tasks = tasks;
//     console.log(this.tasks);
//     this.cdr.detectChanges()
//   });
// }
}
