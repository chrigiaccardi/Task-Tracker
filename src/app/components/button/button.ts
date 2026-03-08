import { Component, EventEmitter, Input, Output} from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit()
  }
}
