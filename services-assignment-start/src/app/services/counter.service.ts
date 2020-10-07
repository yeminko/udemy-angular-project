import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  inactiveCount: number = 0;
  activeCount: number = 0;
  activeIncreased = new EventEmitter<number>();
  inactiveIncreased = new EventEmitter<number>();

  constructor() { }

  onIncreaseActive() {
    this.activeCount++;
    this.activeIncreased.emit(this.activeCount);
  }

  onIncreaseInactive() {
    this.inactiveCount++;
    this.inactiveIncreased.emit(this.inactiveCount);
  }
}
