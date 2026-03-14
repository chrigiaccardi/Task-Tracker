import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interface/task';
import { UiService } from '../../services/ui-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  imports: [MatButtonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter

  text: string = ""
  day: string = ""
  reminder: boolean = false
  showAddTask: boolean = false
  subscription: Subscription;
  
  constructor(private uiService: UiService) { 
      this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value))
  }
  
  onSubmit() {
    if (!this.text) {
      alert('Inserisci un task valido')
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false

  }
}
