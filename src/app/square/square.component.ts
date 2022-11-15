import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button class="btn btn-success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button class="btn btn-primary" *ngIf="value == 'O'">{{ value }}</button>
    <button class="btn btn-dark" *ngIf="!value">{{ value }}</button> `,
  styles: [
    `
      button {
        height: 200px;
        width: 200px;
        font-size: 100px;
        border: 4px black solid;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
