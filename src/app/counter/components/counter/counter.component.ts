import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter Module</h1>
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+ 1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">- 1</button>

<hr>

  `
})

export class CounterComponent /*implements OnInit*/ {
  constructor() { }

  /*ngOnInit() { }*/
  public counter:number=10;

  /*public*/increaseBy(value:number):void{
    this.counter = this.counter+value;
  }

  resetCounter():void{
    this.counter=10;
  }



}
