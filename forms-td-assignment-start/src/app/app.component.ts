import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(data: NgForm) {
    this.submitted = true;
    this.user.email = data.form.value.email;
    this.user.subscription = data.form.value.subscription;
    this.user.password = data.form.value.password;
  }
}
