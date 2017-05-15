import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p> EVEN - <strong>{{ number }}</strong> </p>`,
  styles: ['p { color: green; }']
})
export class EvenComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
