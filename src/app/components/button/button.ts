import { Component, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  testoBtn: string = 'Aggiungi Task'
  classAddBtn = true
  @Output() btnClick = new EventEmitter

  onClick() {
    this.btnClick.emit()
  }
}
