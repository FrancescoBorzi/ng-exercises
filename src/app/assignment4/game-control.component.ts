import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberEmitted = new EventEmitter<number>();
  @Output() clear = new EventEmitter<void>();
  private ref;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.ref = setInterval(() => {
      this.numberEmitted.emit(
        Math.floor((Math.random() * 10) + 1)
      );
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.ref);
  }

  onClear() {
    this.clear.emit();
  }
}
