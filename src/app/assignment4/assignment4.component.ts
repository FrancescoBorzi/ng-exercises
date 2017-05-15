import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {

  numbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onNumberEmitted($event: number) {
    this.numbers.push($event);
  }
}
