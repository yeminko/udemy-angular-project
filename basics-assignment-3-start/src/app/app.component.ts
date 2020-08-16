import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShow: boolean = true;
  logs = [];

  toggleButton() {
    this.isShow = !this.isShow;
    this.logs.push(new Date().getTime());
  }
}
