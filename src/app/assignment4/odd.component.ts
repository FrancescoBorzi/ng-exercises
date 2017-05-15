import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p> ODD - <strong>{{ number }}</strong> </p>`,
  styles: ['p { color: darkorange; }']
})
export class OddComponent implements OnInit {
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
