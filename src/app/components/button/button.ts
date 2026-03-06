import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  testoBtn: string = 'Aggiungi Task'
  classAddBtn = true

  aggiungiTask() {
    
  }
}
