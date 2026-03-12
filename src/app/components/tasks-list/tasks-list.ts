import {ChangeDetectorRef, Component, inject} from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task-service';
import { AsyncPipe } from '@angular/common';
import { Task } from '../../interface/task';
import { AddTask } from "../add-task/add-task";

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem, AsyncPipe, AddTask],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  // inserimento per aggiornamento live della UI, forza Angular a riaggiornare e vedere i cambiamenti
  private cdr = inject(ChangeDetectorRef)

  // Utilizzo dell'inject per restituire la dipendenza prima del constructore
  taskService = inject(TaskService)

// utilizzo dell'async pipe nel ciclo @for così non serve .subscribe visto che lo fa in automatico - metodo creato nel service
  tasks = this.taskService.getTasks()

  //creiamo il metodo deleteTask(task) per cancellare il task richiamando quello creato nel service
 deleteTask(task: Task) {
  this.taskService.deleteTask(task).subscribe(() => {
    this.tasks = this.taskService.getTasks();
    this.cdr.detectChanges()
  });
 }
  
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      this.tasks = this.taskService.getTasks();
          this.cdr.detectChanges()
    });
  }
}
