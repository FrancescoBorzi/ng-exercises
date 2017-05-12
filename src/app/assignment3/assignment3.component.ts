import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  showDetails = false;
  clicks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails() {
    this.showDetails = !this.showDetails;

    this.clicks.push(Math.floor(Date.now()).toString());
  }
}
