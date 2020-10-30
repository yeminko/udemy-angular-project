import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenEmail(control: FormControl): { [s: string] : boolean} {
    if(control.value == 'Test') {
      return { 'nameIsForbidden': true }
    }
    return null;
  }

  forbiddenEmail2(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject)=> {
      setTimeout(() => {
        if(control.value === 'Test') {
          resolve({ 'nameIsForbidden': true })
        } else {
          resolve(null);
        }
      }, 130);
    })
    return promise;
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'name': new FormControl(null, [Validators.required, this.forbiddenEmail]),
      'name': new FormControl(null, Validators.required, this.forbiddenEmail2),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })
  }
}
