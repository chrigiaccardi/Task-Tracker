import { Component} from '@angular/core';
import { Header } from "./components/header/header";
import { TasksList } from "./components/tasks-list/tasks-list";

@Component({
  selector: 'app-root',
  imports: [Header, TasksList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = 'Task Tracker'
}
