import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { MatIcon } from "@angular/material/icon";
import { Task } from '../../task';


@Component({
  selector: 'app-tasks',
  imports: [MatIcon],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  private taskService = inject(TaskService)
  tasks = this.taskService.tasks;
  ngOnInit() {
    this.taskService.loadTasks()
  }
  onClickDelete(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks.update(tasks => tasks.filter (t => t.id !== task.id))
    })
  }
}
