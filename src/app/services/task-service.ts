import { Injectable, signal } from '@angular/core';
import { Task } from '../task';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:5001/tasks'
  private _tasks = signal<Task[]>([])
  tasks = this._tasks.asReadonly();
  
  loadTasks() {
    this.http.get<Task[]>(this.apiUrl).subscribe({
      next: (tasks) => this._tasks.set(tasks),
      error: (err) => console.error('Errore caricando tasks', err),
    });
  }
  deleteTask(task: Task) {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete(url);
  }
}
