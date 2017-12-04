import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  courses$;
  courses: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.subscription = db.list('/courses').valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(courses);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
