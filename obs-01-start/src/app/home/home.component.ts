import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription

  constructor() { }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe( count => {
    //   console.log(count);
    // });

    const customIntervalObervable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2)
          observer.complete();

        if (count > 3) {
          observer.error(new Error('count is greater than 3!'));
        }
        count++;
      }, 1000);
    })

    this.subscription = customIntervalObervable.pipe(
      filter((data: number) => data > 0),
      map((data: number) => 'Round: ' + (data + 1))
      ).subscribe(data => {
          console.log(data);
        }, error => {
          alert(error.message);
        }, () => {
          console.log('completed...');
        })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
