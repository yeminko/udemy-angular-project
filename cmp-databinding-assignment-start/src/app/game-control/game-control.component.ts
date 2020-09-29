import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberIncreased = new EventEmitter<number>();
  interval: any;
  count: number = 0;

  constructor() { }

  onStart() {
    this.interval = setInterval(() => {
      this.numberIncreased.emit(this.count);
      this.count++;
    }, 1000);
  }

  onStop() {
    if (this.interval)
      clearInterval(this.interval);
  }

  ngOnInit(): void {
  }
}
