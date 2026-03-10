import { Injectable } from '@angular/core';
import { Task } from '../interface/task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5001/tasks'

  constructor(private http: HttpClient){}
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
