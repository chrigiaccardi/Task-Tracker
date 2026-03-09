import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../interface/task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList implements OnInit{
  constructor(private taskService: TaskService){}
  tasks: Task[] = []
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }
}
