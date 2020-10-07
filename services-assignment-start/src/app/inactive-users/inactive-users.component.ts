import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  count: number = 0;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
    ) {
      this.counterService.inactiveIncreased.subscribe( data => this.count = data);
    }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
