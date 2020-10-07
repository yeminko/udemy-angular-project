import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  count: number = 0;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {
    this.counterService.activeIncreased.subscribe( data => this.count = data);
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
