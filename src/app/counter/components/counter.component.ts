import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>{{ title }}</h1>
  <hr>
  <h3>Counter : {{counter}}</h3>

  <div class="botones">
    <button (click)="increaseBy(10)">Increment +1</button>
    <button (click)="decreaseBy(10)">Decrement -1</button>
    <button (click)="reset()">Reset</button>
  </div>

  <hr>`,
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Mi first Angular Application';
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value
  }

  decreaseBy(value: number): void {
    if (this.counter === 0) return;
    this.counter -= value;
  }

  reset(): void {
    this.counter = 0;
  }



}
